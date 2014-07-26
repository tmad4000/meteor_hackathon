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
  appId: "324025767759096",
  secret: "028e31ea7225e27cc7720e6674d7f735"
});

