# Getting Started with FeedMeSeymore

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## About

FeedMeSeymore is an app to help you stay on track with keeping your plants alive! With these tips, encouragement, and scheduled watering reminders, your plants have never looked better!

![UF](photos/UFPhoto.png)

### _Features_

- Ability to add a new plant, edit, and delete it
- Ability to add a new group, edit, and delete it
- Ability to add or remove a plant from a group
- Ability to add, edit, and delete users
- Ability to set reminders to water a plant
- Ability to send reminders to water to text or email
- Ability to add or remove a photo of a plant
- Ability to list all plants by location and know how long it has been since a plant was last watered

## Setup

### _Dependencies_

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.

- `cd client` and run `npm install`. This will install client dependencies (React).

### _Database Prep_

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called facebook: `create database plants`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=facebook
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

- In the future, this app could be able to maintain and access a log of plant watering.
- It could also be able to connect to an api for watering and fertilizing.
- It might also be helpful to look up specific needs and care plans for types of plants.

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
