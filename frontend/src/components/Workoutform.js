import { useState } from "react"
import { useWorkoutscontext } from "../hooks/useworkoutscontext.js"
const Workoutform=()=>{
    const{dispatch}=useWorkoutscontext()
    const[title,setTitle]=useState('')
    const[load,setLoad]=useState('')
    const[reps,setReps]=useState('')
    const[error,setError]=useState(null)
    const[emptyFields,setEmptyfields]=useState([])
    const handlesubmit=async(e)=>{
        e.preventDefault()

        const workout={title,load,reps}

        const response =await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-type':'application/json'
            }
        })
        const json=await response.json()
        if(!response.ok)
        {
          setError(json.error)
          setEmptyfields(json.emptyFields)
        }
        if(response.ok)
        {   setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added',json)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }
    return(
        <form className="create" onSubmit={handlesubmit}>
            <h3>Add a new workout</h3>

            <label>Excercise title:</label>
            <input
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}

            className={emptyFields.includes('title')? 'error':''}
            />
            <label>Load(in kg):</label>
            <input
            type="number"
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load')? 'error':''}
            />
            <label>Reps:</label>
            <input
            type="number"
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps')? 'error':''}
            />
            <button>Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default Workoutform