import Button from "../../components/button/Button";
import "./Login.css";
import background from "../../assets/background-spheres.png";
import Footer from "../../components/footer/Footer";
import SpheresBackground from "./spheres-background/SpheresBackground";
import {
	useMsal,
} from "@azure/msal-react";

/**
 * This is our root component and here is where the user will log in with their Microsoft account
 */

const LoginPageFC: React.FC = () => {
	const { instance } = useMsal();

	const loginAuthHandler = () => {
		try {
			instance.loginRedirect();
		} catch (e) {
			console.log(e);
		}
	};

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
					Embark on a culinary journey like no other with Rosie by your side. 
					With Rosie’s step-by-step instructions, this app will guide you through the cooking process, ensuring your creations turn out perfectly, every time.  
					Whether you're seeking weeknight dinner inspiration, looking to impress guests with a gourmet feast, or simply exploring the joy of cooking, this AI Cooking Assistant is your ultimate companion in the kitchen.
				</p>
				<p>HELLO WORLD</p>
				<Button
					title="Login with 365"
					color="secondary"
					onClick={() => loginAuthHandler()}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default LoginPageFC;
