/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffeeshop-ng', // the auth0 domain prefix
    audience: 'coffeeshop.herokuapp.com', // the audience set for the auth0 app
    clientId: 'OkkQUnF76y32Xx8hITzdjuUW9TGVtJDc', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
