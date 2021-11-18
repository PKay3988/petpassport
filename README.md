# Getting Started with Pet Passport 

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## About

Pet Passport is an app to help you stay on track with keeping your pets healthy & thriving! With these tips, encouragement, and reminders, your pets have never been better! Have fun! Making changes in the branch. 

![UF](photos/UFPhoto.png)

### _Features_

- Ability to log in and create different authenticated user profiles 
- Ability to add a new pet, delete it, and store pet vital information
- Ability to track past and upcoming appointments & treatments
- Ability to post enjoy uploaded pictures of your pet


## Setup

### _Dependencies_

- Run `npm install` in project directory. This will install server-related dependencies such as `express`, `bcrypt`, `leaflet`, `express-fileupload`.

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
- You will also need to store your leaflet API key and your `API_KEY=` and your bcrypt secret key `SUPER_SECRET=`. These will allow for login and access to protected map data

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create 7 tables called 'users', 'pets', 'vets', 'treatments', 'diet','grooming', and 'images' in your database.

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
  - React Router 6  
  - Reect File Upload
  - React Select Country List
- React boostrap
- MySql
- JSON web token
- bcrypt
- dotenv
- axios
- express
- Nodemon
- CSS
- (...)

## Possible Future Features

- In the future, this app could have a community posts board or messaging feature
- It could have different types of users/ access-- vets, pets stores, sitters, etc. 
- It could track favorite locations or upcoming events on the map feature
- It could have calendar and reminders for appointment maintenance
- The map could also have a search bar


_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
