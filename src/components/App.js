import React, { useReducer } from "react";
import "../css/App.css";
import Header from "./Header";
import Body from "./Body";
import reducer, { DataLayer, initialState } from "./reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<DataLayer.Provider value={{ state, dispatch }}>
			<div className="app">
				<div className="grid__container">
					<div className="header">
						<h1>
							<Header />
						</h1>
					</div>
					<div className="body">
						<Body />
					</div>
					<div className="footer">Footer</div>
				</div>
			</div>
		</DataLayer.Provider>
	);
}

export default App;
