import { applyMiddleWare } from "./middleware";
import { createStore } from "./createStore";

let logger = store => next => action => {
    console.log(store.getState());
    next(action);
    console.log(store.getState())
}

let store = applyMiddleWare(logger)(createStore)(reducer);

store.dispatch({type:'ADD'});