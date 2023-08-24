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
					src={spatula}
					cssClass="big"
				/>
				<Sphere
					imgHeight={150}
					imgWidth={150}
					src={cookie}
					cssClass="xlarge"
				/>
				<Sphere
					imgHeight={150}
					imgWidth={150}
					src={pancakes}
					cssClass="large"
				/>
				<Sphere
					cssClass="small"
				/>
				<Sphere
					cssClass="xsmall"
				/>
				<Sphere
					cssClass="xsmall"
				/>
				<Sphere
					cssClass="medium"
				/>
				<Sphere
					cssClass="micro"
				/>
			</div>
			<div className="circles-column-right">
				<Sphere
					src={carrot}
					imgHeight={100}
					imgWidth={100}
					cssClass="medium"
				/>
				<Sphere
					imgHeight={200}
					imgWidth={200}
					cssClass="xlarge"
					src={ramen}
				/>
				<Sphere
					imgHeight={120}
					imgWidth={120}
					src={blender}
					cssClass="big"
				/>
				<Sphere
					cssClass="small"
				/>
				<Sphere
					cssClass="small"
				/>
				<Sphere
					cssClass="micro"
				/>
				<Sphere
					cssClass="mini"
				/>
				<Sphere
					cssClass="medium"
				/>
			</div>
		</>
	);
};

export default SpheresBackground;
