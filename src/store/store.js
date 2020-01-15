import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "../sagas/saga";
import { reducer, initialState } from "../reducers/reducer";

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
