import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import TopBar from "../../components/topbar/TopBar";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import './Home.css';
import { RedirectRequest } from "@azure/msal-browser";

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { instance, accounts } = useMsal();
	const redirectStartPage = process.env.REACT_APP_DEV_URI;
	
	const request: RedirectRequest = {
		scopes: [],
		redirectStartPage: redirectStartPage
	};
	
	const logoutHandler = () => {
		try {
			instance.loginRedirect(request);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className="home-container">
			<TopBar />
			<div className="home-container-content">
				<h1 className="home-header">
                Your meal starts <strong>here </strong>
				</h1>
				<p className="home-content">
                Did you bring your own recipes with you? Then you are in the right place . You can paste the url of your recipe or paste a whole recipe on the text boxes below.
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
				<Button title="Upload" color="pink" onClick={() => navigate('/')}/>
				<Button title="Browse" color="pink" onClick={() => navigate('/')}/>
			</div>
		</div>
	);
};

export default Home;