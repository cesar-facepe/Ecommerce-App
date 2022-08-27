import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resultado from "./pages/Resultado";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resultado" element={<Resultado />} />
			</Routes>
		</BrowserRouter>
	)	
}

export default App;
