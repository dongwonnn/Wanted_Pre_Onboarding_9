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
  COMPLETE_TODO_REQUEST,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAILURE,
  READ_TODO_REQUEST,
  READ_TODO_SUCCESS,
  READ_TODO_FAILURE,
  createTodoRequest,
  deleteTodoRequest,
  completeTodoRequest,
  UPDATE_TODO_REQUEST,
  updateTodoRequest,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
} from "../actions/todo";

function* createTodoSaga(action: ReturnType<typeof createTodoRequest>) {
  try {
    const { content, isCheck, createAt } = action;

    const response: AxiosResponse = yield call(authApi.createTodoData, {
      content,
      isCheck,
      createAt,
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

function* completeTodoSaga(action: ReturnType<typeof completeTodoRequest>) {
  const { id, isCheck } = action;

  try {
    yield call(authApi.completeCheckTodoData, {
      id,
      isCheck,
    });

    yield put({
      type: COMPLETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (e) {
    yield put({
      type: COMPLETE_TODO_FAILURE,
      payload: e,
    });
  }
}

function* readTodoSaga() {
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

function* updateTodoSaga(action: ReturnType<typeof updateTodoRequest>) {
  try {
    const { id, content } = action;

    yield call(authApi.updateTodoData, {
      id,
      content,
    });

    yield put({
      type: UPDATE_TODO_SUCCESS,
      payload: { id, content },
    });
  } catch (e) {
    yield put({
      type: UPDATE_TODO_FAILURE,
      payload: e,
    });
  }
}

export function* todoSaga() {
  yield takeLatest(CREATE_TODO_REQUEST, createTodoSaga);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodoSaga);
  yield takeLatest(COMPLETE_TODO_REQUEST, completeTodoSaga);
  yield takeLatest(READ_TODO_REQUEST, readTodoSaga);
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodoSaga);
}
