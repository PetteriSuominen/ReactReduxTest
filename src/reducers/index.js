import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import appReducer from "./app";
import { reducer as formReducer } from "redux-form";


const createRootReducer = history => combineReducers({
    app: appReducer,
    router: connectRouter(history),
    form: formReducer
    
});

export default createRootReducer;