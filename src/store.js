import { createStore } from "redux";
import { Reducer } from "./Reducer";
import logger from 'redux-logger'
    //const store = redux.createStore
const middleWare = [logger]
export const store = createStore(Reducer,middleWare)