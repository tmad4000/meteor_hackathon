/* accounts.js = Accounts.config(), etc. */
ServiceConfiguration.configurations.remove({
  service: "google"
});

ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "1057430303583-hvkrpj9alufcib0bjjfgaf6o128l95ko.apps.googleusercontent.com",
  secret: "hxumS37nfMXOMF2XxE7UvDCu"
});

ServiceConfiguration.configurations.remove({
  service: "facebook"
});

ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "1396572823917500",
  secret: "f81d3edb4d78984efe236c0e09ead2dc"
});

