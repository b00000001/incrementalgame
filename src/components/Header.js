import React, { useContext } from "react";
import "../css/Header.css";
import { DataLayer } from "./reducer";

const Header = () => {
	const context = useContext(DataLayer);
	return (
		<div className="header__container">
			<div className="header__left">
				<ul onClick={() => context.dispatch({ type: "Homepage" })}>Home</ul>
				<ul onClick={() => context.dispatch({ type: "Planets" })}>Planets</ul>
			</div>
		</div>
	);
};

export default Header;
