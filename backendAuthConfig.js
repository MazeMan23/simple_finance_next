const passportConfig = {
  credentials: {
    tenantName: process.env.MS_DOMAIN,
    clientID: process.env.MS_SF_APPLICATION_ID,
  },
  policies: {
    policyName: "B2C_1_susi",
  },
  metadata: {
    b2cDomain: process.env.MS_B2C_DOMAIN,
    authority: "login.microsoftonline.com",
    discovery: ".well-known/openid-configuration",
    version: "v2.0",
  },
  settings: {
    isB2C: true,
    validateIssuer: false,
    passReqToCallback: true,
    loggingLevel: "info",
    loggingNoPII: false,
  },
  protectedRoutes: {
    todolist: {
      endpoint: "/api/translate",
      delegatedPermissions: {
        text: ["translate.text"],
        file: ["translate.file"],
      },
    },
  },
};

module.exports = passportConfig;
