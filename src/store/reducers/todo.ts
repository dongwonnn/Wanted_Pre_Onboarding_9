import { ITodo } from "utils/types/ITodo";
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
  TodoAction,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
} from "../actions/todo";

export const initialState = {
  todos: [],
  createLoading: false,
  createError: false,
  readLoading: false,
  readError: false,
  completeLoading: false,
  completeError: false,
  deleteLoading: false,
  deleteError: false,
  count: null,
};

type TodoState = {
  todos: ITodo[];
  createLoading: boolean;
  createError: boolean;
  readLoading: boolean;
  readError: boolean;
  completeLoading: boolean;
  completeError: boolean;
  deleteLoading: boolean;
  deleteError: boolean;
  count: number | null;
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
    case COMPLETE_TODO_REQUEST:
      return {
        ...state,
        completeLoading: true,
        completeError: false,
      };
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCheck: !todo.isCheck }
            : todo
        ),
        completeLoading: false,
        completeError: false,
      };
    case COMPLETE_TODO_FAILURE:
      return {
        ...state,
        completeLoading: false,
        completeError: true,
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
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo
        ),
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default todo;
