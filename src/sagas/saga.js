import { call, put, takeEvery } from "redux-saga";
import { success, REQUEST, fail } from "../actions/action";

function* request() {
  try {
    const data = yield call(/*graphQLを使ってデータを取得*/);
    yield put(success(data));
  } catch (error) {
    yield put(fail(error));
  }
}

export function* rootSaga() {
  yield takeEvery(REQUEST, request());
}
