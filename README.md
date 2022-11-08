# PAGINATION CHALLENGE

### Description

This app is a pagination solution using params such as name, id, start, end,max page size, and order to display data results.

This project is built in JavaScript, Node.js, and Express to develop the server and the routes, and MongoDB and Mongoose to develop the database.

No library was used to create the pagination.

## Installation

install yarn.  
install nodemon.  
install express.  
install mongoose.  
install dotenv.

## .env

Set MongoDB according with .sample.env file.

## Run

Running the server: yarn dev

## Deployment

heroku create  
git remote -v  
git push heroku master

At Heroku dashboard:  
Config vars: set MONGODB_URL

## Params

To check "/apps" endpoint, it is required using a param **by** with value **name** or **id**. For example:
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

Two routes were built using POST and GET requests. The first one was used to add 100 documents into the MongoDB in order to manually test /apps endpoint. The GET route was built according with the following logic:

- Setting a condition when user add param "by" with value "name" or "id". Since "by" is a required param, if the user omits it, prints an error message.
- Setting default values for "start" , "end", "max" and "order", in case user omitted these informations.
- "max" param has precedent if "end" is bigger than "max".
- Setting the range according with params.

By default, MongoDB generates a unique ObjectID identifier. So avoiding two id's for each document, I used only the default id (with underscore).
