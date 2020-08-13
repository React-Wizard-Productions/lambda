import {combineReducers} from "redux";
import students from './students/studentReducer';

const reducer = combineReducers({students})

export type AppState = ReturnType<typeof reducer>

export default reducer;
