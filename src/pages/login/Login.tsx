import Button from "../../components/button/Button";
import "./Login.css";
import background from "../../assets/background-spheres.png";
import Footer from "../../components/footer/Footer";
import SpheresBackground from "./spheres-background/SpheresBackground";

const Login: React.FC = () => {
	
	return (
		<div className="login container">
			<img
				src={background}
				alt="A background with circles"
				className="login image-background"
			/>
			<SpheresBackground />
			<div className="login content-container">
				<header className="login content-header">
					<strong>Rosie's</strong> Recipes
				</header>
				<p className="login content-body">
					Test test test test
					Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
					tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrum exercitationem ullam corporis suscipit Excepteur
					sint obcaecat cupiditat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<Button
					title="Login with 365"
					color="green"
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
