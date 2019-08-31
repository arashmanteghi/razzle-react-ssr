import { takeLatest, takeEvery, put, call, all } from "redux-saga/effects";

import * as constants from "./constants";
import { weatherRequest, weatherSuccess } from "./actions";
import { get } from "../utils/request";

// function* sagaWorker() {
//   yield put(testAction("Arash"));
//   // const { body, result } = yield call(get, apiBaseUrl('/tags'));
//   // if (result) {
//   //   yield put(getTagListSuccess(body.tags));
//   // }
// }

// function* sagaWatcher() {
//   console.log("there therer");
//   yield takeEvery(constants.ABOUT_ACTION, sagaWorker);
// }

function* weatherWorker(action) {
  const { city } = action;
  yield put(weatherRequest(city));
  const { body, result } = yield call(
    get,
    `https://openweathermap.org/data/2.5/weather?q=${city},uk&appid=b6907d289e10d714a6e88b30761fae22`
  );
  if (result) yield put(weatherSuccess(body));
}

function* weatherWatcher() {
  yield takeEvery(constants.WEATHER, weatherWorker);
}

export default function* aboutSagas() {
  yield all([weatherWatcher()]);
}
