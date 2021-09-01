import { ITodo } from "utils/types/ITodo";

export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST" as const;
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS" as const;
export const CREATE_TODO_FAILURE = "CREATE_TODO_FAILURE" as const;

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST" as const;
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS" as const;
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE" as const;

export const COMPLETE_TODO_REQUEST = "COMPLETE_TODO_REQUEST" as const;
export const COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS" as const;
export const COMPLETE_TODO_FAILURE = "COMPLETE_TODO_FAILURE" as const;

export const READ_TODO_REQUEST = "READ_TODO_REQUEST" as const;
export const READ_TODO_SUCCESS = "READ_TODO_SUCCESS" as const;
export const READ_TODO_FAILURE = "READ_TODO_FAILURE" as const;

export const createTodoRequest = ({ content, isCheck, createAt }: ITodo) => ({
  type: CREATE_TODO_REQUEST,
  content,
  isCheck,
  createAt,
});
export const createTodoSuccess = (payload: ITodo) => ({
  type: CREATE_TODO_SUCCESS,
  payload,
});
export const createTodoFailure = () => ({
  type: CREATE_TODO_FAILURE,
});

export const deleteTodoRequest = (id: number) => ({
  type: DELETE_TODO_REQUEST,
  id,
});
export const deleteTodoSuccess = (payload: number) => ({
  type: DELETE_TODO_SUCCESS,
  payload,
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

export const completeTodoRequest = ({ id, isCheck }: ITodo) => ({
  type: COMPLETE_TODO_REQUEST,
  id,
  isCheck,
});
export const completeTodoSuccess = (payload: number) => ({
  type: COMPLETE_TODO_SUCCESS,
  payload,
});
export const completeTodoFailure = () => ({
  type: COMPLETE_TODO_FAILURE,
});

export type TodoAction =
  | ReturnType<typeof createTodoRequest>
  | ReturnType<typeof createTodoSuccess>
  | ReturnType<typeof createTodoFailure>
  | ReturnType<typeof deleteTodoRequest>
  | ReturnType<typeof deleteTodoSuccess>
  | ReturnType<typeof deleteTodoFailure>
  | ReturnType<typeof readTodoRequest>
  | ReturnType<typeof readTodoSuccess>
  | ReturnType<typeof readTodoFailure>
  | ReturnType<typeof completeTodoRequest>
  | ReturnType<typeof completeTodoSuccess>
  | ReturnType<typeof completeTodoFailure>;
