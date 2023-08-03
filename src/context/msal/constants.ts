import { Configuration, PublicClientApplication } from "@azure/msal-browser";


const clientId = process.env.REACT_APP_CLIENT_ID;
const tenantId = process.env.REACT_APP_TENANT_ID;

if(!clientId || !tenantId) {
	throw new Error('Some of this values are undefined, please provide a correct value');
}

// MSAL config object;
export const configuration: Configuration = {
	auth: {
		clientId: clientId,
		//For now, then we'll use a production url 
		redirectUri: "http://localhost:3000/home",
		postLogoutRedirectUri: "http://localhost:3000",
		authority: `https://login.microsoftonline.com/${tenantId}`,
		navigateToLoginRequestUrl: false
	}

};

export const pca = new PublicClientApplication(configuration);