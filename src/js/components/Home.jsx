import React, { useState } from "react";


const Home = () => {
	// {First solution}
// 	const [selectedColor, setSelectedColor] = useState("red");

// 	return (

// 		<div className="traffic-light">
// 			<div onClick={() => setSelectedColor("red")} className={`light red ${selectedColor === "red" ? "glow" : ""}`}></div>
// 			<div onClick={() => setSelectedColor("yellow")} className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}></div>
// 			<div onClick={() => setSelectedColor("green")} className={`light green ${selectedColor === "green" ? "glow" : ""}`}></div>
// 		</div>
// 	)
// };

        //   {Second Solution}:

	const [Light, setLight] = useState("null");

	return (
		<div className="container d-flex flex-column align-items-center bg-secondary min-vh-100 ">

			<div className="black-container bg-dark border"></div>
			<div className="traffic-light bg-dark border">
				<div onClick={() => { setLight("red") }}
					className={`light bg-danger rounded-circle border ${Light === "red" ? "active-light" : ""}`}>
				</div>
				<div onClick={() => { setLight("yellow") }}
					className={`light bg-warning rounded-circle border ${Light === "yellow" ? "active-light" : ""}`}>
				</div>

				<div onClick={() => { setLight("green") }}
				 className={`light bg-success rounded-circle border ${Light === "green" ? "active-light" : ""}`}>

				</div>

			</div>



		</div>
	);
};

export default Home;
