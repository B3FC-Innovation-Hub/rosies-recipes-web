import { Configuration, PublicClientApplication } from "@azure/msal-browser";


const clientId = process.env.REACT_APP_CLIENT_ID;
const tenantId = process.env.REACT_APP_TENANT_ID;
//For now, then we'll use a production url 
const url = process.env.REACT_APP_DEV_URI;

if(!clientId || !tenantId) {
	throw new Error('Some of this values are undefined, please provide a correct value');
}

// MSAL config object;
export const configuration: Configuration = {
	auth: {
		clientId: clientId,
		redirectUri: `${url}/home`,
		postLogoutRedirectUri: url,
		authority: `https://login.microsoftonline.com/${tenantId}`,
		navigateToLoginRequestUrl: false
	}

};

export const pca = new PublicClientApplication(configuration);