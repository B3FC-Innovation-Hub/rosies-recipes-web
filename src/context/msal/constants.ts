import { Configuration, PublicClientApplication } from "@azure/msal-browser";


const clientId = process.env.REACT_APP_CLIENT_ID;
const tenantId = process.env.REACT_APP_TENANT_ID;
//For now, then we'll use a production url 
const url = process.env.REACT_APP_DEV_URI;

/*
	Both client id and tenant id can be found in Azure's App Registrations 
*/
if(!clientId) {
	throw new Error('clientId is undefined, please provide a correct value');
}
else if(!tenantId){
	throw new Error('tenantId is undefined, please provide a correct value');
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