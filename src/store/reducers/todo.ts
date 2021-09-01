import { ITodo } from "utils/types/ITodo";

export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST" as const;
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS" as const;
export const CREATE_TODO_FAILURE = "CREATE_TODO_FAILURE" as const;

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST" as const;
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS" as const;
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE" as const;

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST" as const;
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS" as const;
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE" as const;

export const READ_TODO_REQUEST = "READ_TODO_REQUEST" as const;
export const READ_TODO_SUCCESS = "READ_TODO_SUCCESS" as const;
export const READ_TODO_FAILURE = "READ_TODO_FAILURE" as const;

export const createTodoRequest = () => ({
  type: CREATE_TODO_REQUEST,
});
export const createTodoSuccess = () => ({
  type: CREATE_TODO_SUCCESS,
});
export const createTodoFailure = () => ({
  type: CREATE_TODO_FAILURE,
});

export const deleteTodoRequest = () => ({
  type: DELETE_TODO_REQUEST,
});
export const deleteTodoSuccess = () => ({
  type: DELETE_TODO_SUCCESS,
});
export const deleteTodoFailure = () => ({
  type: DELETE_TODO_FAILURE,
});

export const readTodoRequest = () => ({
  type: READ_TODO_REQUEST,
});
export const readTodoSuccess = (payload: ITodo[]) => ({
  type: READ_TODO_SUCCESS,
  payload,
});
export const readTodoFailure = () => ({
  type: READ_TODO_FAILURE,
});

export const updateTodoRequest = () => ({
  type: UPDATE_TODO_REQUEST,
});
export const updateTodoSuccess = () => ({
  type: UPDATE_TODO_SUCCESS,
});
export const updateTodoFailure = () => ({
  type: UPDATE_TODO_FAILURE,
});

type TodoAction =
  | ReturnType<typeof createTodoRequest>
  | ReturnType<typeof createTodoSuccess>
  | ReturnType<typeof createTodoFailure>
  | ReturnType<typeof deleteTodoRequest>
  | ReturnType<typeof deleteTodoSuccess>
  | ReturnType<typeof deleteTodoFailure>
  | ReturnType<typeof readTodoRequest>
  | ReturnType<typeof readTodoSuccess>
  | ReturnType<typeof readTodoFailure>
  | ReturnType<typeof updateTodoRequest>
  | ReturnType<typeof updateTodoSuccess>
  | ReturnType<typeof updateTodoFailure>;

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
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
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
