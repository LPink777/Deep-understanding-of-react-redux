import { applyMiddleWare } from "./middleware";
import { createStore } from "./createStore";

let thunk = store => next => action => {
    if (typeof(action) === 'function') {
        return action(next)
    }
    return next(action);
}

let store = applyMiddleWare(thunk)(createStore)(reducer);

store.dispatch(dispatch => {
    setTimeout(() => dispatch({type:'ADD'}),3000)
});