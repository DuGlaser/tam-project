import { call, put, takeEvery } from "redux-saga/effects";
import { success, REQUEST, fail } from "../actions/action";
import fetchServer from "../api/api";

function* request(action) {
  try {
    const data = yield call(fetchServer, action.query);
    yield put(success(data));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* rootSaga() {
  yield takeEvery(REQUEST, request);
}
