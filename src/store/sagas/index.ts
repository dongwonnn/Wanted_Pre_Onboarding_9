import { all } from "redux-saga/effects";

import { todoSaga } from "./todo";

export function* rootSaga() {
  yield all([todoSaga()]);
}
