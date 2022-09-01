import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./style.css";

const Resultado = () => {
	const location = useLocation();
	const { dados, pesquisa } = location.state;
	console.log(dados);
	return (
		<div>
			<Header />
			{/* <h1>Resultados</h1> */}
			<h2>Exibindo resultados para: {pesquisa}</h2>
			{dados.resultado === "Produto não consta na plataforma" ? (
				""
			) : (
				<h4>{dados.resultado.length} resultados encontrados</h4>
			)}
			<div className="high-container">
				{dados.resultado === "Produto não consta na plataforma" ? (
					<h1>Nenhum resultado encontrado na plataforma</h1>
				) : (
					dados.resultado.map((dado, index) => {
						var id = Object.keys(dado.title);
						return (
							<div className="box-data" key={index}>
								<div className="inner-box-data">
									<div
										style={{
											background:
												"url(" +
												dado.imageURLHighRes[id] +
												")",
											backgroundSize: "cover",
											backgroundRepeat: "no-repeat",
											borderRadius: "10px",
											width: "100%",
											height: "100%",
											marginBottom: "10px",
										}}
									></div>
									<h3>{dado.title[id]}</h3>
									<br />
									<div className="feat">
										<span>
											Categoria: {dado.category[id][0]}
										</span>
										<br />
										<span>Preço: {dado.price[id]}</span>
										<br />
										<span>Marca: {dado.brand[id]}</span>
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};
export default Resultado;
