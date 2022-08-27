import { useLocation } from "react-router-dom";

const Resultado = () => {
	const location = useLocation();
	const { dados } = location.state;

	return (
		<div>
			<h1>Resultado</h1>
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
				{dados.resultado.map((dado) => (
					<div key={dado.id}>
						<h2>{dado.nome}</h2>
						<p>{dado.descricao}</p>
						<p>{dado.preco}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Resultado;
