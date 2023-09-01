import { MsalProvider } from "@azure/msal-react";
import "./App.css";
import RoutesContainer from "./routes/Routes";
import { pca } from "./context/msal/constants";

/**
 * MSAL stands for Microsoft Authentication Library .
 * You'll find the library's documentation here: https://www.npmjs.com/package/@azure/msal-react
 */

function App() {
	return (
		<div className="App">
			<RoutesContainer />
		</div>
		// <MsalProvider instance={pca}>
		// </MsalProvider>
	);
}

export default App;
