---

- initialize git
- .gitignore
- create remote repo on github
- push all code to remote origin
- play with Routes and Route Extensions ex:- /hello, hello/2, /xyz
- order of the routes matter a lot
- install the postman and create new collections
- write the logic to handle get, post, patch, delete apis and test them on postman
- explore routes and use of \*, +, (), ? in the routes
- use of regex in routes /a/, /.\*fly$
- Reading the queryparams in the routes
- Reading the dynamic routes

Episode5-

- Multiple route handlers - play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH,, [rH2, rH3], rH4, rH5);
- what is a middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- app.use vs app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error handling using app.use("/")

DB, Schema, models-

- Install mongoose library
- Connect your application to the database / devTinder
- call connectDB function and connect to the database before starting application on 7777
- Create a user schema and user model
- Create signup api to add data to databse
- Push somedocuments using api calls from postman
- Error handling using try, catch

- JS object vs JSOn differences
- Add the express.json middleware to the application
- Make your signup API dynamic to receive the data from the end user
- API -get user by email
- API- Feed API - GET /feed - get all the users from the database
- API - get user by Id
- Create a delete user API
- Difference between PATCH and PUT
- API - update a user
- Explore the Mongoose Documentation for Model methods
- What are options in a Model.findOneAndUpdate method, explore more about it.
- API - update the user with emailId

- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - put all appropriate validations on each field in schema
- Add timestamps to the user schema
- Add API level validations on patch requedt and post api
- Add API validation for each field
- DATA sanitizating - Add api validation for each field
- Install validator
- Explore validator library functions and use validator functions for passwords, email, photourl.

- Validate data in signup api
- Install bcrypt package
- Create a password hash using bcrypt.hash and save the user with encrypted password
- Create login API
- Compare passwords and throw erros if email or password is invalid
-
