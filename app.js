const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

//
const Users = require('./server/models/user/user');
//

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'keyboard nexus',
    saveUninitialized: false,
    cookie :{maxAge:36000000},
    store: MongoStore.create({ mongoUrl: process.env.MONGOLAB_URL })
  }))



//db
const connectDB = require('./server/config/db');
connectDB();


// user routes 
const userRoutes = require('./server/routes/web/user-route/user-route')
//

app.use('/user', userRoutes)


app.post('/user/login',  async function (req, res){  
    const {password,phone_number} = req.body;
    console.log( req.body.phone_number)
    console.log("this is post request")
    console.log(req.body)
    try {
       console.log(req.sessionID)
       const user = await Users.findOne({phone_number:phone_number});
       if(user)  {
           console.log(user.password)
           if(user.password ==  password){
               req.session.authenticated = true;
               req.session.user = {
                   user_id : user.user_id,
                   first_name : user.first_name,
                   default_language:user.default_language,
                   membership_plan:user.membership_plan
               }
               req.session.isAuth = true;
               console.log(req.session)
               res.send(user)
           }else{
               res.send("invalid password or phone number")
           }
       }else{
         console.log("not a user")
           res.send("not a user") 
       }
   } catch (error) { 
       res.send(error)   
   }
 }) 
 
  app.get("/user/logout",(req, res) => {
     console.log("this is logout")
     req.session.destroy((err)=>{
          if(err) throw err;
         res.send("session destroy")
        
     })
   }); 
   app.get("/api/welcome",(req, res) => {
     console.log(req.session)
     res.status(200).send("Welcome 🙌 ");
   });

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})