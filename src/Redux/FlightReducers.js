import { ADDFLIGHT, DELETEFLIGHT } from "../Redux/actionType"

const initialState = {
    flight:[]
}


const FlightReducers = (state=initialState,action)=>{
    switch(action.type){
        case ADDFLIGHT:
            return{
                ...state,
                // ...state.flight.push(action.payload)
                ...state.flight.length < 3 ? state.flight.push(action.payload) : state.flight
                
            }
        case DELETEFLIGHT:
            return{
                ...state,
                flight:[...state.flight.filter((singleData)=> singleData.id !== action.payload) ]
                
            }


        default: return state
    }
}

export default FlightReducers