import Button from "../../components/button/Button";
import "./Login.css";
import background from "../../assets/background-spheres.png";
import Footer from "../../components/footer/Footer";
import SpheresBackground from "./spheres-background/SpheresBackground";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<img
				src={background}
				alt="A background with circles"
				className="image-background"
			/>
			<SpheresBackground />
			<div className="content-container">
				<header className="header">
					<strong>Rosie's</strong> Recipes
				</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
					tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrum exercitationem ullam corporis suscipit Excepteur
					sint obcaecat cupiditat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<Button
					title="Login with 365"
					onClick={() => navigate("/upload")}
					isGreen={true}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
