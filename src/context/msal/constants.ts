import { Configuration, PublicClientApplication } from "@azure/msal-browser";


const tenantId = process.env.REACT_APP_TENANT_ID;
const clientId = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_CLIENT_ID : process.env.REACT_APP_PROD_CLIENT_ID;
const url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')? process.env.REACT_APP_DEV_URI : process.env.REACT_APP_PROD_URI;
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