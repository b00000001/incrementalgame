import React, { createContext } from "react";
import Homepage from "./Homepage";
import Planets from "./Planets";
export const DataLayer = React.createContext();

export const initialState = -{
	display: <Homepage />,
};

var reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "Homepage":
			return {
				...state,
				display: <Homepage />,
			};
		case "Planets":
			return {
				...state,
				display: <Planets />,
			};

		default:
			return state;
	}
};
export default reducer;
