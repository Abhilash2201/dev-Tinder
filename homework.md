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
- User-findOne with duplicate email ids,which object returned
- API - Get user by email
- API - Feed Api - Get/feed - get all the user from the database
- API - Get user by ID
- Create a delete user API
- Difference bwn PATCH AND PUT
- Explore the Mongoose Documentation for Models
- What are option s in Model.findOneAndUpdate( ), explore more about it
- API update the user with emailId
- EXplore the Mongoose Documentation for Model methods
- What are options in a Model.findOneAndUpdate method, explore more about it
- API -Update the user with email ID

- Explore schemaTYpe options from the documentation
- add required, unique, lowercase, min, validator,
- Add default
- create a custom validate function for gender
- Improve the DB schema -PUT all appropraite validation on each field in Schema
- Add timeStamps to userSchema
- add API level validations on Patch request & SignUp post API
- Data Sanitizing -Add API validations for each field
