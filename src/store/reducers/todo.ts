import { ITodo } from "utils/types/ITodo";
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
  TodoAction,
} from "../actions/todo";

export const initialState = {
  todos: [],
  createLoading: false,
  createError: false,
  readLoading: false,
  readError: false,
  updateLoading: false,
  updateError: false,
  deleteLoading: false,
  deleteError: false,
};

// 초기값 타입
type TodoState = {
  todos: ITodo[];
  createLoading: boolean;
  createError: boolean;
  readLoading: boolean;
  readError: boolean;
  updateLoading: boolean;
  updateError: boolean;
  deleteLoading: boolean;
  deleteError: boolean;
};

const todo = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
      return {
        ...state,
        createLoading: true,
        createError: false,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
        createLoading: false,
        createError: false,
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        createLoading: false,
        createError: true,
      };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        deleteLoading: true,
        deleteError: false,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        deleteLoading: false,
        deleteError: false,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        deleteLoading: false,
        deleteError: true,
      };
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        updateLoading: true,
        updateError: false,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCheck: !todo.isCheck }
            : todo
        ),
        updateLoading: false,
        updateError: false,
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        updateLoading: false,
        updateError: true,
      };
    case READ_TODO_REQUEST:
      return {
        ...state,
        readLoading: true,
        readError: false,
      };
    case READ_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        readLoading: false,
        readError: false,
      };
    case READ_TODO_FAILURE:
      return {
        ...state,
        readLoading: false,
        readError: true,
      };
    default:
      return state;
  }
};

export default todo;
