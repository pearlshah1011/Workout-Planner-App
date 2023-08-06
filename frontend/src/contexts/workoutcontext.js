import { createContext, useReducer } from "react";

export const Workoutscontext=createContext()
//state-reliable previous state value
export const workoutsReducer=(state,action)=>{

    //in workoutsreducer we check the action type of workout
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts:action.payload
            } 
        case 'CREATE_WORKOUT':
            return{
                workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{    //inside filter we fire a function and each time we get access to individual workout w
                // action.payload gives us workout id that we have given it to delete
                workouts:state.workouts.filter((w)=>w._id!==action.payload._id)
            }
            default:
                return state
        }
}
//children component represents the app component in index.js
export const Workoutscontextprovider=({children})=>{

    const[state,dispatch]=useReducer(workoutsReducer,{
        workouts:null
    })

    return ( //should wrap root app component at the top
        <Workoutscontext.Provider value={{...state,dispatch}}>
           {children} 
        </Workoutscontext.Provider>
    )
}