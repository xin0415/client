Setup the cors on port 4200 in spring boot. Make sure angular run on port 4200

## Install modules
use "npm install" to install the node_modules

## run the frontend
use "ng serve" to run the frontend

## form folder
This contains the form component that required in document

## shared folder
This contains the models template and services. In models folder, it contains the interface that use to define the shape of an object. Response.ts is the shape of response that will receive from backend. temp.ts is the shape of the field that will send to the backend. Services folder contain the service file have the logic that used to interact with backend API

## app.module.ts
in the app.module.ts add modules that need in the application. HttpClientModule is used for HTTP requests and communicate with backend API. ReactiveFormsModule is enable to use reactive forms in angular.