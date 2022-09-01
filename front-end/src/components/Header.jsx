import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Header.css"

const Header = () => {
    const navigate = useNavigate();
    const [termoPesquisa, setTermoPesquisa] = useState("");
	return (
		<header className="header" onClick={()=>{navigate("/")}}>
            <div>
				<img src="../../logo.png" alt="logo" width={40} height={40} className="img"/>
				<h1>LitorAll</h1>
            </div>
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
								console.log(res.data);
								navigate("/resultado", {
									state: {
										dados: res.data,
										pesquisa: termoPesquisa,
									},
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
						className="bi bi-search" 
						viewBox="0 0 16 16">
						<path 
						d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
				</button>
				<div>
					<h1>
						<span className="pet">
							PET
						</span>
						-
						<span className="facep">
						FACEP
						</span>
						-
						<span className="ifpe">
						IFPE
						</span>
						-
						<span className="cesar">
						CESAR
						</span>
						-
						<span className="project">
						PROJECT
						</span>
						</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
