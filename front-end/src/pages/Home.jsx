import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
	const [termoPesquisa, setTermoPesquisa] = useState("");

	const navigate = useNavigate();

	return (
		<div className="App">
			<header className="App-header">
				<h1>Ecommerce</h1>
				<div>
					<input
						type="text"
						value={termoPesquisa}
						onChange={(e) => setTermoPesquisa(e.target.value)}
						placeholder="Pesquisar produto"
					/>
					<button
						type="button"
						onClick={() => {
							axios
								.post("http://localhost:5000/api/pesquisar", {
									query: termoPesquisa,
								}, {headers: {'Access-Control-Allow-Origin': '*'}})
								.then((res) => {
									console.log(res);
                                    navigate("/resultado", {
                                        state: { dados: res.data },
                                    });
								})
								.catch((err) => {
									console.log(err);
								});
						}}
					>
						Pesquisar
					</button>
				</div>
			</header>
		</div>
	);
};

export default Home;
