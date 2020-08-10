# API PAGINATION CHALLENGE

### Description

This app is a simple backend pagination solution using params such as name, id, start, end and max page size to order page results.

This project is built in JavaScript, Node.js , and Express to develop the server and the routes, and MongoDB and Mongoose Library to develop the database.

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

heroku create your-app-name
heroku config:set MONGODB_URL
git push heroku master

## Params

To check /apps endpoint, it is required using a param called **by** with values **name** or **id**. For example:

- To sort in ascending order by **id**:  
  /apps?by=id

- To sort in ascending order by **name**:  
  /apps?by=name

You can also use the following params:

**start** - If it is omitted, the default value will be the first identifier in the data set.  
**max** - If it is omitted, the default value will be 50.  
**end** - If it is omitted, the default value will be "max" page size.

Example:  
/apps?by=name&start=1&end=8.  
/apps?by=name&start=2&max=10.  
/apps?by=id&max=30.
