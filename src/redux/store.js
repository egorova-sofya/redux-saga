import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const configureStore = preloadState => createStore(reducer, preloadState, composeEnhancers(applyMiddleware(sagaMiddleware)))

const store = configureStore({})

sagaMiddleware.run(rootSaga)

export default store