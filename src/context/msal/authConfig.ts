import {
	Configuration,
	PublicClientApplication,
	EventMessage,
	EventType,
	AuthenticationResult,
} from "@azure/msal-browser";

const tenantId = process.env.REACT_APP_TENANT_ID;
const clientId = process.env.REACT_APP_CLIENT_ID;
const url = process.env.REACT_APP_URI;
/*
	Both client id and tenant id can be found in Azure's App Registrations 
*/
if (!clientId) {
	throw new Error("clientId is undefined, please provide a correct value");
} else if (!tenantId) {
	throw new Error("tenantId is undefined, please provide a correct value");
}

// MSAL config object;
export const configuration: Configuration = {
	auth: {
		clientId: clientId,
		redirectUri: `${url}/home`,
		postLogoutRedirectUri: url,
		authority: `https://login.microsoftonline.com/${tenantId}`,
		navigateToLoginRequestUrl: false,
	},
};

export const pca = new PublicClientApplication(configuration);

pca.initialize().then(()=> {
	const accounts = pca.getAllAccounts();
	if(accounts.length > 0){
		pca.setActiveAccount(accounts[0]);
	}

	pca.addEventCallback((event: EventMessage) => {
		if(event.eventType === EventType.LOGIN_SUCCESS && event.payload){
			const payload = event.payload as AuthenticationResult;
			const account = payload.account;
			console.log(account, payload);
			pca.setActiveAccount(account);
		}
	});
});
