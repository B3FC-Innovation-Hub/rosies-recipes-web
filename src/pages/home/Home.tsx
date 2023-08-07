import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import TopBar from "../../components/topbar/TopBar";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import "./Home.css";
import { RedirectRequest } from "@azure/msal-browser";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload-icon.svg";
import "./Home.css";
import HomeBackground from "./home-bg/HomeBackground";
import Footer from "../../components/footer/Footer";

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { instance, accounts } = useMsal();
	const redirectStartPage = process.env.REACT_APP_DEV_URI;

	const request: RedirectRequest = {
		scopes: [],
		redirectStartPage: redirectStartPage,
	};

	const logoutHandler = () => {
		try {
			instance.loginRedirect(request);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className="wrapper">
			<TopBar />
			<div className="home-container">
				<HomeBackground />

				<div className="home-container-content">
					<h1 className="home-header">
            Your meal starts <strong>here </strong>
					</h1>
					<p className="home-content">
            Give me your best recipes, or browse recipes from my collection and
            I will provide optimized step-by-step, optimized instructions, so
            that you do not waste any time .
						<AuthenticatedTemplate>
							<p>Signed in as: {accounts[0]?.username}</p>
						</AuthenticatedTemplate>
						<Button
							title="Sign out"
							color="pink"
							onClick={() => logoutHandler()}
						/>
					</p>
				</div>
				<div className="button-row">
					<Button
						title="Upload"
						color="pink"
						onClick={() => navigate("/")}
						icon={<SearchIcon fill="white" />}
					/>
					<Button
						title="Browse"
						color="pink"
						onClick={() => navigate("/")}
						icon={<UploadIcon fill="white" />}
					/>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
