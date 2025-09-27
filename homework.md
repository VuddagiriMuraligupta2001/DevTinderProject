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
