import React, { FC } from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { readTodoRequest } from "store/actions/todo";
import { RootState } from "store/reducers";
import Spinner from "./Common/Spinner";
import { CenterErrorMessage } from "utils/styles/Message";
import { READ_ERROR_MESSAGE, CREATE_ERROE_MESSAGE } from "utils/constants";

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const { todos, readLoading, readError, createLoading, createError } =
    useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(readTodoRequest());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
};

export default TodoList;
