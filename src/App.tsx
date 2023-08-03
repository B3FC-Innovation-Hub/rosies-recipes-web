import { MsalProvider } from "@azure/msal-react";
import "./App.css";
import RoutesContainer from "./routes/Routes";
import { pca } from "./context/msal/constants";

function App() {
	return (
		<MsalProvider instance={pca}>
			<div className="App">
				<RoutesContainer />
			</div>
		</MsalProvider>
	);
}

export default App;
