import "./SpheresBackground.css";
import Sphere from "../../../components/sphere/Sphere";
import spatula from "../../../assets/food-assets/Spatula.png";
import pancakes from "../../../assets/food-assets/Pancake.png";
import cookie from "../../../assets/food-assets/cookie.png";
import carrot from "../../../assets/food-assets/Carrot.png";
import ramen from "../../../assets/food-assets/Ramen Noodles.png";
import blender from "../../../assets/food-assets/Blender.png";

/*The purpose of this component is to modularize the background of our login page
which contains several sphere components that need to be in a specific order and position in
order to look correct .
It consists of two columns with spheres components
*/

const SpheresBackground: React.FC<any> = () => {
	return (
		<>
			<div className="circles-column-left">
				<Sphere
					imgHeight={150}
					imgWidth={150}
					img={spatula}
					size="big"
				/>
				<Sphere
					imgHeight={150}
					imgWidth={150}
					img={cookie}
					size="xlarge"
				/>
				<Sphere
					imgHeight={150}
					imgWidth={150}
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
					imgHeight={100}
					imgWidth={100}
					size="medium"
				/>
				<Sphere
					imgHeight={200}
					imgWidth={200}
					size="xlarge"
					img={ramen}
				/>
				<Sphere
					imgHeight={120}
					imgWidth={120}
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
