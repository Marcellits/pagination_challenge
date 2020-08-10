# API PAGINATION CHALLENGE

### Description

This app is a simple backend pagination solution using params such as name, id, start, end,max page size, and order to display page results.

This project is built in JavaScript, Node.js, and Express to develop the server and the routes, and MongoDB and Mongoose to develop the database. No library was used to create the pagination.

## Installation

install yarn.  
install nodemon.  
install express.  
install mongoose.  
install dotenv.

## .env

Set your own MongoDB according with .sample.env file.

## Run

Running the server: yarn dev

## Deployment

heroku create
git remote -v
git push heroku master

At Heroku dashboard:

Config vars: set MONGODB_URL

## Params

To check /apps endpoint, it is required using a param **by** with value **name** or **id**. For example:
/apps?by=id
/apps?by=name

You can also use the following params:

**order** - You can check the list of apps in ascending or descending order. If it is ommited, the default value will be ascending.  
**start** - If it is omitted, the default value will be the first identifier in the data set.  
**max** - If it is omitted, the default value will be 50.  
**end** - If it is omitted, the default value will be "max" page size.

Examples:  
/apps?by=name&start=1&end=8  
/apps?by=name&start=2&max=10  
/apps?by=id&max=30  
/apps?by=id&order=desc

## Notes

By default, MongoDB generates a unique ObjectID identifier. So avoiding two id's for each document, I used only the default id (with underscore \_id).

## Do you want to check how this project works?

https://fathomless-ravine-16693.herokuapp.com/
