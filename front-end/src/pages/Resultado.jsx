import { useLocation } from "react-router-dom";
import './style.css'

const Resultado = () => {
	const location = useLocation();
	const { dados, pesquisa } = location.state;

	return (
		<div>
			<h1>Resultados</h1>
			<h2>Exibindo resultados para: {pesquisa}</h2>
			<div className="high-container">
				{dados.resultado.map((dado) => (
					<div className='box-data' key={dado.id}>
						<h2>{dado.nome}</h2>
						<h4>{dado.descricao}</h4>
						<h4>Price: {dado.preco}</h4>
					</div>
				))}
			</div>
		</div>
	);
};
export default Resultado;
