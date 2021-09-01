import React from "react";
import { FC } from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { readTodoRequest } from "store/reducers/todo";
import { RootState } from "store/reducers";

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(readTodoRequest());
  }, [dispatch]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
