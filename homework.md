- ep 16
- Create a repository
- Initailize the repository
- node modules, package.json, package-lock.json
- Install express
- Create a server
- listen to port 7777
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of '-g' while npm install
- Difference between caret and tilde (^ vs -)

-- Ep 17

- initialize the repo
- .gitignore
- Create a remote repo on github
- Push all the code to the remote orgin
- Play with routes and route extensions ex. /hello ,/hello/123 ,xyz ,/
- Order of the routes matter a lot \*\*\*
- Install postman app and make a workspace /collection> test api's
- Write a logic a handle the GET, POST, PATCH, DELETE API Calls and tehem on Postman
- Explore routing and use of ?, \*, + in the routes
- use of regex in the routes /a/ /.\*fly$/
- Reading the query params in the routes
- Raeading the dynamic routes

18.

- Multiple route handlers -Play withe the code
- next()
- next function and errors along withe res.send()
- What is Middleware and route handler
- Why do we need Middleware and route handler
- How express js basically hamdles requests behind the scene
- app.use() vs app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for al user routes, expect /user/login (login need not check authentication)
- Error Handling using app.use('/', (err,req, res , next)=>{ })

- Create a free cluster on MongoDB official website
- Install mongoose library
- Connect your application to the Database"Connection-url"/DevTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userschema and user Model
- Create a POST api /signup that add the data to DB
- Push some sample documents to the DB by calling the api
- Error handling using try , catch

- JSON vs Js Object(difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive the data from the end user
