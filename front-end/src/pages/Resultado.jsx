import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import './style.css'

const Resultado = () => {
	const location = useLocation();
	const { dados, pesquisa } = location.state;
	return (
		<div>
			<Header />
			<h1>Resultados</h1>
			<h2>Exibindo resultados para: {pesquisa}</h2>
			<h4>{dados.resultado.length} resultados encontrados</h4>
			<div className="high-container">
				{dados.resultado === "Produto não consta na plataforma" ? (
					<h1>Nenhum resultado encontrado na plataforma</h1>
				) : (
					dados.resultado.map((dado, index) => {
						var id = Object.keys(dado.title);
						return (
							<div className="box-data" key={index}>
								<span>Produto: {dado.title[id]}</span>
								<br />
								<span>Categoria: {dado.category[id]}</span>
								<br />
								<span>Preço: {dado.price[id]}</span>
								<br />
								<span>Marca: {dado.brand[id]}</span>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};
export default Resultado;
