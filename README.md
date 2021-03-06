// give a short summary of the project itself
// list the main technologies used
// go through the process
    // go to package.json -- which dependecnies are you using and why



MERN stack application

Boilerplte code that allows for the construction of a MERN spplication:

backend package.json includes the following dependencies:
- concurrently
- nodemon
- express
- if-env

frontend package.json includes the following dependencies:
- react
- react-dom
- react-scripts
(these are specified in create react app)


# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
