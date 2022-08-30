import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import './style.css'

const Resultado = () => {
	const location = useLocation();
	const { dados, pesquisa } = location.state;
	dados.resultado.forEach((dado, indice, array) => (
		console.log(dado, indice)
	))
	return (
		<div>
			<Header />
			<h1>Resultados</h1>
			<h2>Exibindo resultados para: {pesquisa}</h2>
			<div className="high-container">
				{dados.resultado.map((dado) => (
					<div className='box-data' key={dado.id}>
						<span>{dado[0]}</span>
						<span>precisão: {dado[1]}</span>
					</div>
				))}
			</div>
		</div>
	);
};
export default Resultado;
