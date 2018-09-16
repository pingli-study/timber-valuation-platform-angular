// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCJKJ8v5SuWFYhufEKm6pNHuOXHvD76rpg",
    authDomain: "timbervaluationplatform.firebaseapp.com",
    databaseURL: "https://timbervaluationplatform.firebaseio.com",
    projectId: "timbervaluationplatform",
    storageBucket: "timbervaluationplatform.appspot.com",
    messagingSenderId: "837939759249"
  }
};