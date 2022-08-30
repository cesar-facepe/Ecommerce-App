import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
	const navigate = useNavigate();
    const [termoPesquisa, setTermoPesquisa] = useState("");

	return (
		<div className="App">
			<Header />
			<div className="main">
			<h1>
			<spam>
				Software, Business and more. No limits.
			</spam>
			</h1>
			<h2>
				Buy wherever you want.
			</h2>
			<h2>
				Ready to buy? Just take a shot!
			</h2>
			<div>
			<input
					type="text"
					value={termoPesquisa}
					onChange={(e) => setTermoPesquisa(e.target.value)}
					placeholder="Search software, courses and more..."
				/>
				<button
					type="button"
					onClick={() => {
						axios
							.post("http://localhost:5000/api/pesquisar", {
								query: termoPesquisa,
							}, {headers: {'Access-Control-Allow-Origin': '*'}})
							.then((res) => {
								console.log(termoPesquisa);
                                navigate("/resultado", {
                                    state: { dados: res.data,
									pesquisa: termoPesquisa },
                                });
							})
							.catch((err) => {
								console.log(err);
							});
					}}>
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						width="16" 
						height="16" 
						fill="currentColor" 
						class="bi bi-search" 
						viewBox="0 0 16 16">
						<path 
						d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
				</button>
			</div>
			</div>
		</div>
	);
};

export default Home;
