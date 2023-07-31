import { combineReducers } from "redux"
import reposatoriesReducer from "./reposatoriesReducer"

const reducers = combineReducers({
  reposatories: reposatoriesReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
