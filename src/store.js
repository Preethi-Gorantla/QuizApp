import { createStore } from "redux";
import { Reducer } from "./Reducer";
    //const store = redux.createStore
export const store = createStore(Reducer)