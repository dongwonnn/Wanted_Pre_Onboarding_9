import * as authApi from "utils/api/data";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  READ_TODO_REQUEST,
  READ_TODO_SUCCESS,
  READ_TODO_FAILURE,
  createTodoRequest,
  deleteTodoRequest,
  readTodoRequest,
  updateTodoRequest,
} from "../reducers/todo";

// saga 생성
function* createTodoSaga(action: ReturnType<typeof createTodoRequest>) {
  try {
    const { content, isCheck } = action;

    const response: AxiosResponse = yield call(authApi.createTodoData, {
      content,
      isCheck,
    });

    yield put({
      type: CREATE_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: CREATE_TODO_FAILURE,
      payload: e,
    });
  }
}

function* deleteTodoSaga(action: ReturnType<typeof deleteTodoRequest>) {
  try {
    const { id } = action;
    yield call(authApi.deleteTodoData, id);

    yield put({
      type: DELETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (e) {
    yield put({
      type: DELETE_TODO_FAILURE,
      payload: e,
    });
  }
}

function* updateTodoSaga(action: ReturnType<typeof readTodoRequest>) {
  try {
    const response: AxiosResponse = yield call(authApi.getTodosData);
    yield put({
      type: UPDATE_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: UPDATE_TODO_FAILURE,
      payload: e,
    });
  }
}

function* readTodoSaga(action: ReturnType<typeof updateTodoRequest>) {
  try {
    const response: AxiosResponse = yield call(authApi.getTodosData);
    yield put({
      type: READ_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: READ_TODO_FAILURE,
      payload: e,
    });
  }
}

export function* todoSaga() {
  yield takeLatest(CREATE_TODO_REQUEST, createTodoSaga);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodoSaga);
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodoSaga);
  yield takeLatest(READ_TODO_REQUEST, readTodoSaga);
}
