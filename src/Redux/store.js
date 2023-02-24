import { createStore } from "redux";
import FlightReducers from "./FlightReducers";

const store = createStore(FlightReducers)

export default store 

