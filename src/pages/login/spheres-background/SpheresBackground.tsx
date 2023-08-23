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
					// left={10}
					// top={0}
					// backgroundColor="#FDE8B2"
				/>
				<Sphere
					imgHeight={150}
					imgWidth={150}
					src={cookie}
					cssClass="big"
					// backgroundColor="#FFB0BD"
					// top={70}
					// left={12}
				/>
				<Sphere
					imgHeight={150}
					imgWidth={150}
					src={pancakes}
					cssClass="big"
					// backgroundColor="#E40060"
					// top={40}
					// left={4}
				/>
				<Sphere
					imgHeight={20}
					imgWidth={20}
					cssClass="small"
					// left={10}
					// top={30}
					// backgroundColor="#A8CAE9"
				/>
				<Sphere
					imgHeight={5}
					imgWidth={5}
					cssClass="xsmall"
					// left={20}
					// top={50}
					// backgroundColor="#EFB9F3"
				/>
				<Sphere
					imgHeight={5}
					imgWidth={5}
					cssClass="xsmall"
					// left={10}
					// top={0}
					// backgroundColor="#FFC09A"
				/>
				<Sphere
					imgHeight={40}
					imgWidth={40}
					cssClass="medium"
					// left={0}
					// top={70}
					// backgroundColor="#FFA56E"
				/>
			</div>
			<div className="circles-column-right">
				<Sphere
					src={carrot}
					imgHeight={100}
					imgWidth={100}
					cssClass="large"
					// top={80}
					// right={6}
					// backgroundColor="#EFB9F3"
				/>
				<Sphere
					imgHeight={120}
					imgWidth={120}
					src={blender}
					cssClass="big"
					// backgroundColor="#FFA56E"
					// top={0}
					// right={10}
				/>
				<Sphere
					imgHeight={200}
					imgWidth={200}
					cssClass="xlarge"
					src={ramen}
					// top={30}
					// right={6}
					// backgroundColor="#E40060"
				/>
				<Sphere
					imgHeight={10}
					imgWidth={10}
					cssClass="small"
					// right={5}
					// top={20}
					// backgroundColor="#FDE8B2"
				/>
				<Sphere
					imgHeight={20}
					imgWidth={20}
					cssClass="small"
					// right={20}
					// bottom={30}
					// backgroundColor="#A8CAE9"
				/>
				<Sphere
					imgHeight={1}
					imgWidth={1}
					cssClass="micro"
					// right={20}
					// top={0}
					// backgroundColor="#EFB9F3"
				/>
				<Sphere
					imgHeight={2}
					imgWidth={2}
					cssClass="mini"
					// right={10}
					// bottom={20}
					// backgroundColor="#FFC09A"
				/>
				<Sphere
					imgHeight={40}
					imgWidth={40}
					cssClass="medium"
					// left={0}
					// top={70}
					// backgroundColor="#FFA56E"
				/>
			</div>
		</>
	);
};

export default SpheresBackground;
