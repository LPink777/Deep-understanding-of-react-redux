import { applyMiddleWare } from "./middleware";
import { createStore } from "./createStore";

let promise = store => next => action => {
    if (Object.prototype.toString.call(action) === '[object Promise]') {
        return action.then(
            res => next(res)
        ) 
    }
    return next(action);
}

let store = applyMiddleWare(promise)(createStore)(reducer);

store.dispatch(new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({type:'ADD'})
    },3000);
}));