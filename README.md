# Ecommerce backend demo app 🚀

This is a demo projet I developed as part of my personal portfolio.

This is an ecommerce API demo for serve the ecommerce frontend app.

This API contains:

1) Endpoint to get all products of the ecommerce.
2) Endpoint to get product details (based on _product_id_)
3) Endpoint to save a sale. This sale is created from a Client model and a list of Products from a cart sent from the frontend app.
4) Based on the previous endpoints, it contains models for _Product_, _Client_ and _Sale_.

As this is a demo app, it does not contain all the expected functionallities an ecommerce app should have.

## Full-stack project

This is part of a full-stack project, so this backend app is connected to a frontend app developed as part of personal portfolio too. So if you want to run this app locally, you should run the frontend at the same time.

As this is an API, it can be consulted by any client (like POSTMAN, curl, etc). But it makes sense to connect with its frontend app.

## Requisites 🔌

- **Node Versión**: v18.14.0
- **NPM Versión**: 9.3.1

_Remember_: This app is connected to other frontend app, so if you want to run locally, you should run this frontend app too.

## Setup 🚀

**Environment variables**
- Create .env file at the root directory (same as README.me) with the following variable `MONGO_DB` (This app uses MongoDB as Database and Mongoose as ODM).

If you want to run locally, I recommend set `MONGO_DB` as the direction to your MongoDB. For example if I run MongoDB on my local, I use `MONGO_DB = "mongodb://localhost/ecommerce-db"` where _ecommerce_db_ is the name of the database. 


**Run locally**

- _Install dependencies_: `npm run install`
- _Run locally_: `npm run start`

## Highlitghts about the technology used in this project 📋

 - This is a Node Js app using Express as framework.
 - This app uses MongoDB as Database and Mongoose as ODM. 
 - It contains a main file (_app.ts_) for define middlewares, connect to database, declare routers and setup server.
 - It contains a folder _routes_ defining routes for every different endpoint.
 - It contains a folder for _models_ defining the _Schema_, _Type_ and validations for every model (_Product_, _Client_ and _Sale_). This is done using Mongoose and Typescript.
 - It contains a folder for _controllers_ defining different controllers to manage the request for every route. In each controller it defines queries and operations to get resources and create resources on the database.
 - Every response is done in _JSON_ format or with an appropiate _status code_ in case of error.
