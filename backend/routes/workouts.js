const express=require('express')
const{createworkout,
    getworkout,
    getworkouts,
    deleteworkout,
    updateworkout}=require('../controllers/workoutcontroller')
const router=express.Router()
//GET all workouts
router.get('/',getworkouts)
//GET single workout
router.get('/:id',getworkout)

//POST a new workout
router.post('/',createworkout)
    

//DELETE a  workout
router.delete('/:id',deleteworkout)

//UPDATE a  workout
router.patch('/:id',updateworkout)
module.exports=router