import { ITodo } from "utils/types/ITodo";
import {
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  READ_TODO_SUCCESS,
  READ_TODO_FAILURE,
  TodoAction,
} from "../actions/todo";

export const initialState = {
  todos: [],
};

// 초기값 타입
type TodoState = {
  todos: ITodo[];
};

const todo = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCheck: !todo.isCheck }
            : todo
        ),
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
      };
    case READ_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case READ_TODO_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default todo;
