import Button from "../../components/button/Button";
import "./Login.css";
import background from "../../assets/background-spheres.png";
import Footer from "../../components/footer/Footer";
import Sphere from "../../components/sphere/Sphere";
import spatula from "../../assets/food-assets/Spatula.png";
import pancakes from "../../assets/food-assets/Pancake.png";
import cookie from "../../assets/food-assets/cookie.png";
import carrot from "../../assets/food-assets/Carrot.png";
import ramen from "../../assets/food-assets/Ramen Noodles.png";
import blender from "../../assets/food-assets/Blender.png";

const Login: React.FC = () => {
	return (
		<div className="container">
			<img
				src={background}
				alt="A background with circles"
				className="image-background"
			/>
			<div className="circles-row-left">
				<Sphere
					height={200}
					width={200}
					src={spatula}
					left={10}
					backgroundColor="#FFA56E"
					top={0}
				/>
				<Sphere
					height={150}
					width={150}
					src={cookie}
					backgroundColor="#FFB0BD"
					left={12}
					top={70}
				/>
				<Sphere
					height={150}
					width={150}
					src={pancakes}
					backgroundColor="#E40060"
					left={4}
					top={40}
				/>
			</div>
			<div className="circles-row-right">
				<Sphere
					height={100}
					width={100}
					src={carrot}
					top={4}
					right={6}
					backgroundColor="#FFA56E"
				/>
				<Sphere
					height={150}
					width={150}
					src={blender}
					backgroundColor="#FDE8B2"
					top={30}
					right={10}
				/>
				<Sphere
					height={200}
					width={200}
					top={60}
					right={2}
					src={ramen}
					backgroundColor="#E40060"
				/>
			</div>
			<header className="header">
				<strong>Rosie's</strong> Recipes
			</header>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
				tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrum exercitationem ullam corporis suscipit Excepteur
				sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<Button />
			<Footer />
		</div>
	);
};

export default Login;
