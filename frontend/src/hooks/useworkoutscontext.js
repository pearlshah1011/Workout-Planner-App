import { Workoutscontext } from "../contexts/workoutcontext";
import { useContext } from "react";

export const useWorkoutscontext=()=>{
    const context=useContext(Workoutscontext)//this workoutscontext is the value that we pass 
    //in provider function

   if(!context)
   {
    throw Error('useworkoutscontext must be used inside an workoutscontext provider')
   }

    return context
}