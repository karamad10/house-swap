module.exports = {
  i18n: {
    localeDetection: false,
    locales: ["en", "nl"],
    defaultLocale: "en",
  },

  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: "JWT-SECRET",
  },

  publicRuntimeConfig: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    ENV: process.env.NODE_ENV,
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
};
