import React, { FC } from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { readTodoRequest } from "store/actions/todo";
import { RootState } from "store/reducers";
import Spinner from "./Common/Spinner";
import { CenterErrorMessage } from "utils/styles/Message";
import { READ_ERROR_MESSAGE } from "utils/constants/constants";

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const { todos, readLoading, readError } = useSelector(
    (state: RootState) => state.todo
  );

  useEffect(() => {
    dispatch(readTodoRequest());
  }, [dispatch]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
      {readLoading && <Spinner />}
      {readError && (
        <CenterErrorMessage>{READ_ERROR_MESSAGE}</CenterErrorMessage>
      )}
    </div>
  );
};

export default TodoList;
