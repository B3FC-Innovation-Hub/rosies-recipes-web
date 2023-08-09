import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import "./Home.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload-icon.svg";
import "./Home.css";
import HomeBackground from "./home-bg/HomeBackground";
import Footer from "../../components/footer/Footer";

const HomePageFC: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="wrapper">
				<HomeBackground />
				<div className="home-container">
					<UnauthenticatedTemplate>
						<h1>Ooops! You could not be authenticated , try again</h1>
					</UnauthenticatedTemplate>
					<AuthenticatedTemplate>
						<div className="home-container-content">
							<h1 className="home-header">
            Your meal starts <strong>here </strong>
							</h1>
							<p className="home-content">
            Give me your best recipes, or browse recipes from my collection and
            I will provide optimized step-by-step, optimized instructions, so
            that you do not waste any time .
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
					</AuthenticatedTemplate>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default HomePageFC;
