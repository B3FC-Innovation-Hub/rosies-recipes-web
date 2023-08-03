import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from "../../components/button/Button";
import { RedirectRequest } from "@azure/msal-browser";

const Home: React.FC = () => {
	const { instance, accounts } = useMsal();
	const redirectStartPage = 'http://localhost:3000';
	
	const requests: RedirectRequest = {
		scopes: [],
		redirectStartPage: redirectStartPage
	};
	
	const logoutHandler = () => {
		try {
			instance.loginRedirect(requests);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
            home
			<AuthenticatedTemplate>
				<p>Signed in as: {accounts[0]?.username}</p>
			</AuthenticatedTemplate>
			<Button
				title="Sign out"
				color="pink"
				onClick={() => logoutHandler()}
			/>
		</div>
	);
};

export default Home;