import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CenterErrorMessage } from "utils/styles/Message";
import { READ_ERROR_MESSAGE, CREATE_ERROE_MESSAGE } from "utils/constants";
import TodoListItem from "components/Todo/TodoListItem";
import Spinner from "components/Common/Spinner";
import { readTodoRequest } from "store/actions/todo";
import { RootState } from "store/reducers";

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const { todos, readLoading, readError, createLoading, createError } =
    useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(readTodoRequest());
  }, [dispatch]);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
      {readLoading && <Spinner />}
      {createLoading && <Spinner />}
      {readError && (
        <CenterErrorMessage>{READ_ERROR_MESSAGE}</CenterErrorMessage>
      )}
      {createError && (
        <CenterErrorMessage>{CREATE_ERROE_MESSAGE}</CenterErrorMessage>
      )}
    </ul>
  );
};

export default TodoList;
