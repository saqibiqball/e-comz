import { combineReducers } from "redux";
import searchReducer from "./slices/searchSlice";
const rootReducer = combineReducers({
    searchItemReducer: searchReducer,
})

export default rootReducer;