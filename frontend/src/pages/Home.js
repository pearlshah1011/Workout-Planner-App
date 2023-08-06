import { useEffect } from "react"
import { useWorkoutscontext } from "../hooks/useworkoutscontext.js"
import Workoutdetails from '../components/Workoutdetails.js'
import Workoutform from '../components/Workoutform.js'

const Home=()=>
{  const{workouts,dispatch}=useWorkoutscontext()

      useEffect(()=>{
        const fetchworkouts=async()=>{
        const response = await fetch('/api/workouts')
        const json = await response.json()

        if(response.ok){
           dispatch({type:'SET_WORKOUTS',payload:json})
          }
        }
        fetchworkouts()
      },[dispatch])



    return(
        <div className="home">
        <div className="workouts">
            {
                workouts && workouts.map((workout)=>(
                <Workoutdetails key={workout._id} workout={workout}/>
                ))
            }
            </div>
            <Workoutform/>
        </div>

    )
}
export default Home