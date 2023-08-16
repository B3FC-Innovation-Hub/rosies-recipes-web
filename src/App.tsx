import { MsalProvider } from "@azure/msal-react";
import "./App.css";
import RoutesContainer from "./routes/Routes";
import { pca } from "./context/msal/authConfig";
import Footer from "./components/footer/Footer";

/**
 * MSAL stands for Microsoft Authentication Library .
 * You'll find the library's documentation here: https://www.npmjs.com/package/@azure/msal-react
 */

function App() {
	return (
		<MsalProvider instance={pca}>
			<div className="App">
				<RoutesContainer />
				<Footer/>
			</div>
		</MsalProvider>
	);
}

export default App;
