import { createStore } from "redux";


const reduser = (state = { value: " "},action)=>{
    switch(action.type){
        case "SET_VAL": return{...state,value:action.payload};
        default: return state;
    }
};
const store = createStore(reduser);

export default store;