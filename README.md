# Express MongoDB Auth Demos

These demonstrations expand on those in the lecture content for a web security course lecture that I teach at SAIT. Much of the code comes from there. However I've made the following adjustments

- Demonstrate use with Mongo Atlas (including some debugging tips)
- Use Async/Await syntax
- Modularisation
- Error Handling
- Routing

## Dependencies

- [Node](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [argon2](https://argon2.online/)
- [jasonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)

## Resources

- [OWASP Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Salted Password Hashing](https://www.codeproject.com/Articles/704865/Salted-Password-Hashing-Doing-it-Right)
- [Role Based Access Control](https://www.okta.com/identity-101/what-is-role-based-access-control-rbac/)
- [MongoDB Deploy a Free Cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/)
- [Why You Don't Need Body Parser](https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c)
- [Node Environment Variable Support](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [Async Await Mongoose](https://www.slingacademy.com/article/mongoose-how-to-connect-to-multiple-databases/)

## Development Notes 1

### MongoDB Cluster

- **Objective: Create a users database**
- Pay attention to whitelisted IP addresses
- Save your password
- Save your connection string

### Setup App & Connect to Mongo Atlas

- **Objective: Initialize a server and establish a secure connection to your database**
- Use node built in support for .env in package.json scripts
- Use the built in json support in express
- Create connection to database

### User Model

- **Objective: Create a data model for creating new users**
- Controls what the data coming and going from the db looks like

### Auth Route

- **Objective: Create post routes register and login**
- allows user to sign up and sign in
- set roles for admin vs user

### Password Hashing

- **Objective: Add password hashing to protect new user password**
- Set up encryption string and decryption for when users login and create passwords
