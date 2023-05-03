import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  cosnt value = 20;
	const dispatch = useDispatch();
	const addBtn = () => {
		dispatch({
			type: "increment",
		});
	};
  const addBtn25 = () => {
		dispatch({
			type: "increment",
      value:25
		});
	};
	const subBtn = () => {
		dispatch({
			type: "decrement",
		});
	};
	return (
		<div>
			<h2>{value}</h2>
			<button onClick={addBtn}>Increment</button>
			<button onClick={addBtn25}>Increment by 25</button>
			<button onClick={subBtn}>Decrement</button>
		</div>
	);
};

export default Home;
