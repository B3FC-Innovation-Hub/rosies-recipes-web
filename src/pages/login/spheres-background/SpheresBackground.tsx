import "./SpheresBackground.css";
import Sphere from "../../../components/sphere/Sphere";
import spatula from "../../../assets/food-assets/Spatula.png";
import pancakes from "../../../assets/food-assets/Pancake.png";
import cookie from "../../../assets/food-assets/cookie.png";
import carrot from "../../../assets/food-assets/Carrot.png";
import ramen from "../../../assets/food-assets/Ramen Noodles.png";
import blender from "../../../assets/food-assets/Blender.png";
import React from "react";
/*The purpose of this component is to modularize the background of our login page
which contains several sphere components that need to be in a specific order and position in
order to look correct .
It consists of two columns with spheres components
*/

const SpheresBackground: React.FC = () => {
	//To divide the data array ento two equal parts
	return (
		<>
			<div className="circles-column-left">
				<Sphere
					img={spatula}
					size="big"
				/>
				<Sphere
					img={cookie}
					size="xlarge"
				/>
				<Sphere
					img={pancakes}
					size="large"
				/>
				<Sphere
					size="small"
				/>
				<Sphere
					size="xsmall"
				/>
				<Sphere
					size="xsmall"
				/>
				<Sphere
					size="medium"
				/>
				<Sphere
					size="micro"
				/>
			</div>
			<div className="circles-column-right">
				<Sphere
					img={carrot}
					size="medium"
				/>
				<Sphere
					size="xlarge"
					img={ramen}
				/>
				<Sphere
					img={blender}
					size="big"
				/>
				<Sphere
					size="small"
				/>
				<Sphere
					size="small"
				/>
				<Sphere
					size="micro"
				/>
				<Sphere
					size="mini"
				/>
				<Sphere
					size="medium"
				/>
			</div>
		</>
	);
};

export default SpheresBackground;
