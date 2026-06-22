import React from "react";

//include images into your bundle
import Actividades from "./ListaTareas.jsx"



//create your first component
const Home = () => {
	return (
		<div className="container d-flex justify-content-center align-items-center min-vh-100">
			<div className="w-100" style={{ maxWidth: 480 }}>
				<Actividades />
			</div>
		</div>

	);
};

export default Home;