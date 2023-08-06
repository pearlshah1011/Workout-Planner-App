require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutsRoutes=require('./routes/workouts')
const userRoutes=require('./routes/user')


//install express app
const app=express()
//middleware(intermediate between application and server -performs tasks like logging and authentication of user)
app.use(express.json())

app.use((req,res,next)=>{ 
    console.log(req.path,req.method)
    next()
})

//route
// app.get('/',(req,res) => {                        // request nd response
//   res.json({mssg:'welcome to the app'})                          //sends a json string for us 
// })
app.use('/api/workouts',workoutsRoutes)

app.use('/api/user',userRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen to request
app.listen(process.env.PORT,()=>{
    console.log('connected to db and listening at port ',process.env.PORT)
})
})
.catch((error)=>{
    console.log(error)
})

process.env