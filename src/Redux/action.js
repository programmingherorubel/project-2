import { ADDFLIGHT, DELETEFLIGHT } from "./actionType"

export const addNewFlightAction = (value)=>{
    return{
        type:ADDFLIGHT,
        payload:value
    }
}

export const deleteFlight = (value)=>{
    return{
        type:DELETEFLIGHT,
        payload:value 
    }
}