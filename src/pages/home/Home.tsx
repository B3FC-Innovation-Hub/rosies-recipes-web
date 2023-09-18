import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import "./Home.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload-icon.svg";
import HomeBackground from "./home-bg/HomeBackground";
import Footer from "../../components/footer/Footer";

const HomePageFC: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>

			<div className="home-wrapper">
				<HomeBackground />
				<div className="home-container">
					<UnauthenticatedTemplate>
						<div className="home-unauthenticated">
							<h1>Ooops! You could not be authenticated , try again</h1>
						</div>
					</UnauthenticatedTemplate>
					<AuthenticatedTemplate>
						<div className="home-container-content">
							<h1 className="home-header">
								Your meal starts <strong>here </strong>
							</h1>
							<div className="home-content">

								Give me your best recipes, or browse recipes from my collection and
								I will provide optimized step-by-step, optimized instructions, so
								that you do not waste any time .
							</div>
						</div>
						<div className="button-row">
							<Button
								title="Upload"
								color="accent"
								onClick={() => navigate("/upload")}
								icon={<SearchIcon />}
							/>
							<Button
								title="Browse"
								color="accent"
								onClick={() => navigate("/")}
								icon={<UploadIcon />}
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
