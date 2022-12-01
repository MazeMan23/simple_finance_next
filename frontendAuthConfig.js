import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_susi",
    forgotPassword: "B2C_1_reset_password",
    editProfile: "B2C_1_edit_profile",
  },
  authorities: {
    signUpSignIn: {
      authority: `https://${process.env.MS_B2C_DOMAIN}/${process.env.MS_DOMAIN}/b2c_1_susi`,
    },
    forgotPassword: {
      authority: `https://${process.env.MS_B2C_DOMAIN}/${process.env.MS_DOMAIN}/b2c_1_reset_password`,
    },
    editProfile: {
      authority: `https://${process.env.MS_B2C_DOMAIN}/${process.env.MS_DOMAIN}/b2c_1_edit_profile`,
    },
  },
  authorityDomain: process.env.MS_B2C_DOMAIN,
};

export const msalConfig = {
  auth: {
    clientId: process.env.MS_SF_REACT_APPLICATION_ID, // This is the ONLY mandatory field that you need to supply.
    authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
    knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
    redirectUri: "/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const protectedResources = {
  apiTodoList: {
    endpoint: "http://localhost:5000/api/translate",
    scopes: {
      text: [`https://${process.env.MS_DOMAIN}/${process.env.MS_SF_APPLICATION_ID}/translate.text`],
      file: [`https://${process.env.MS_DOMAIN}/${process.env.MS_SF_APPLICATION_ID}/translate.file`],
    },
  },
};

export const loginRequest = {
  scopes: [...protectedResources.apiTodoList.scopes.read, ...protectedResources.apiTodoList.scopes.write],
};
