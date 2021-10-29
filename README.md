# Getting Started with Pet Passport

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## About

Pet Passport is an app to help you stay on track with keeping your pets healthy & thriving! With these tips, encouragement, and reminders, your pets have never been better! Have fun! Making changes in the branch. 

![UF](photos/UFPhoto.png)

### _Features_

- Ability to create user profiles 
- Ability to add a new pet, edit, and delete it
- Ability to store pet vital information
- Ability to learn about local pet resources
- Ability to make and interact with new pet friends!
- Ability to use git.

## Setup

### _Dependencies_

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.

- `cd client` and run `npm install`. This will install client dependencies (React).

### _Database Prep_

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called passport: `create database passport`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=passport
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create 2 tables called 'plantsTable' and 'usersTable' in your database.

![DB](photos/DBPhoto.png)

### _Development_

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.

### _EmailJS Integration_

- Run `npm install emailjs-com`in new terminal window to import module or the required method.

```bash
import{ init } from 'emailjs-com';
init("yourUserId");
```

## Technologies

- React
- CSS
- MySql
- Express
- Nodemon
- (...)

## Possible Future Features

- In the future, this app could have a messaging feature

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
