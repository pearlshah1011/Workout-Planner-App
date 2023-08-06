const Workout=require('../models/Workoutmodel')
const mongoose=require('mongoose')
//get all workouts
const getworkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}


//get a single workout
const getworkout=async(req,res)=>{
    const{id}=req.params
   if(!mongoose.Types.ObjectId.isValid(id))
   {
      return res.status(404).json({error:'No such workout'})
   }
    const workout=await Workout.findById(id)

    if(!workout)
    {
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(workout)
}


//create a new workout
const createworkout=async(req,res)=>{
    const{title,reps,load}=req.body

    //check for empty fields
    let emptyFields=[]

    if(!title)
    {
        emptyFields.push('title')
    }
    if(!load)
    {
        emptyFields.push('load')
    }
    if(!reps)
    {
        emptyFields.push('reps')
    }
    if(emptyFields.length>0)
    {
        return res.status(400).json({error:'PLease fill in all fields',emptyFields})
    }
 //add doc to db
    try{
        const workout= await Workout.create({title,reps,load})  
                     //await pauses execution before promise is resolved
        res.status(200).json(workout)             
    }catch(error){
       res.status(400).json({error: error.message})
    }
}
//now export this file
//delete a workout
const deleteworkout=async(req,res)=>{
  const{id}=req.params

  if(!mongoose.Types.ObjectId.isValid(id))
  {
     return res.status(404).json({error:'No such workout'})
  }
  
  const workout= await Workout.findOneAndDelete({_id: id})

  if(!workout)
  {
      return res.status(404).json({error:'No such workout'})
  }
  res.status(200).json(workout)
}


//update a workout
const updateworkout=async(req,res)=>{
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json({error:'No such workout'})
    }
    const workout=await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    }) 
    if(!workout)
    {
      return res.status(404).json({error:'No such workout'})
    }
  res.status(200).json(workout)
}



module.exports={
    getworkout,
    getworkouts,
    createworkout,
    deleteworkout,
    updateworkout
}