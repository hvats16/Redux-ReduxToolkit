import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Home";

function App() {
	const { c } = useSelector((state) => state.custom);
	return (
		<div className="App">
			<h2>{c}</h2>
			<Home />
		</div>
	);
}

export default App;
