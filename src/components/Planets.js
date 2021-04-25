import React, { useEffect, useState } from "react";

const Planets = () => {
	const [bodies, setbodies] = useState();
	const [playerbodies, setplayerbodies] = useState({
		initialgenerate: false,
		initialbody: null,
	});
	useEffect(() => {
		fetch("http://localhost:3004/bodies")
			.then((res) => res.json())
			.then((data) => setbodies(data))
			.catch((error) => console.log("Error"));
	}, []);
	var handleClick = () => {
		console.log(bodies);
		setplayerbodies({
			initialgenerate: true,
			initialbody: bodies[Math.floor(Math.random() * bodies.length)],
		});
	};
	var testhandleClick = () => {
		console.log(bodies[Math.floor(Math.random() * bodies.length)]);
	};
	return (
		<div>
			<h1>Planets</h1>
			<button onClick={testhandleClick}>Test Roll</button>
			<br />
			{playerbodies.initialgenerate ? null : (
				<button onClick={handleClick}>Start Game</button>
			)}
			{playerbodies.initialgenerate ? (
				<h3>
					You have a {playerbodies.isPlanet ? "Planet" : "Stellar Body"}{" "}
					{playerbodies.initialbody.englishName}
					<br />
					Your Planet's Mass:{" "}
					{playerbodies.initialbody.mass
						? playerbodies.initialbody.mass.massValue
						: "1 Default"}
				</h3>
			) : (
				<h3>You do not have a planet</h3>
			)}
		</div>
	);
};

export default Planets;
