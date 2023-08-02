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
					height={150}
					width={150}
					src={spatula}
					left={10}
					top={0}
					backgroundColor="#FDE8B2"
				/>
				<Sphere
					height={150}
					width={150}
					src={cookie}
					backgroundColor="#FFB0BD"
					top={70}
					left={12}
				/>
				<Sphere
					height={150}
					width={150}
					src={pancakes}
					backgroundColor="#E40060"
					top={40}
					left={4}
				/>
				<Sphere
					height={20}
					width={20}
					left={10}
					top={30}
					backgroundColor="#A8CAE9"
				/>
				<Sphere
					height={5}
					width={5}
					left={20}
					top={50}
					backgroundColor="#EFB9F3"
				/>
				<Sphere
					height={5}
					width={5}
					left={10}
					top={0}
					backgroundColor="#FFC09A"
				/>
				<Sphere
					height={40}
					width={40}
					left={0}
					top={70}
					backgroundColor="#FFA56E"
				/>
			</div>
			<div className="circles-column-right">
				<Sphere
					height={100}
					width={100}
					src={carrot}
					top={80}
					right={6}
					backgroundColor="#EFB9F3"
				/>
				<Sphere
					height={120}
					width={120}
					src={blender}
					backgroundColor="#FFA56E"
					top={0}
					right={10}
				/>
				<Sphere
					height={200}
					width={200}
					top={30}
					right={6}
					src={ramen}
					backgroundColor="#E40060"
				/>
				<Sphere
					height={10}
					width={10}
					right={5}
					top={20}
					backgroundColor="#FDE8B2"
				/>
				<Sphere
					height={20}
					width={20}
					right={20}
					bottom={30}
					backgroundColor="#A8CAE9"
				/>
				<Sphere
					height={1}
					width={1}
					right={20}
					top={0}
					backgroundColor="#EFB9F3"
				/>
				<Sphere
					height={2}
					width={2}
					right={10}
					bottom={20}
					backgroundColor="#FFC09A"
				/>
				<Sphere
					height={40}
					width={40}
					left={0}
					top={70}
					backgroundColor="#FFA56E"
				/>
			</div>
		</>
	);
};

export default SpheresBackground;
