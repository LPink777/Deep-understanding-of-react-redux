import { createStore } from "./createStore";

let applyMiddleWare = middleware => createStore => reducer => {
    let store = createStore(reducer);
    middleware = middleware(store);
    let dispatch = middleware(store.dispatch);
    return {
        ...store,
        dispatch,
    }
}

export { applyMiddleWare };