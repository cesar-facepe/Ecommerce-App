import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Header.css";

const Header = () => {
	const navigate = useNavigate();
	const [termoPesquisa, setTermoPesquisa] = useState("");
	return (
		<header className="header">
			<div
				onClick={() => {
					navigate("/");
				}}
			>
				<img
					src="../../logo.png"
					alt="logo"
					width={40}
					height={40}
					className="img"
				/>
				<h1>LitorAll</h1>
			</div>
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
							.post(
								"http://localhost:5000/api/pesquisar",
								{
									query: termoPesquisa,
								},
								{
									headers: {
										"Access-Control-Allow-Origin": "*",
									},
								}
							)
							.then((res) => {
								console.log(termoPesquisa);
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
					}}
				>
					Pesquisar
				</button>
			</div>
		</header>
	);
};

export default Header;
