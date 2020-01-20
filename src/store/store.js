import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { rootSaga } from "../sagas/saga";
import { initialState, reducer } from "../reducers/reducer";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { routerReducer } from "react-router-redux";

// export const history = createBrowserHistory();
//
// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const routerMW = routerMiddleware(history);
//   const middlewares = [sagaMiddleware, routerMW];
//
//   const store = createStore(
//     combineReducers({
//       reducer,
//       initialState,
//       router: connectRouter(history)
//     }),
//     applyMiddleware(...middlewares)
//   );
//
//   sagaMiddleware.run(rootSaga);
//
//   return store;
// };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
