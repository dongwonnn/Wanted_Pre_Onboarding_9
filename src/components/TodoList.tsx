import React from "react";
import { FC } from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { readTodoRequest } from "store/reducers/todo";
import { RootState } from "store/reducers";

interface TodoListProps {
  onRemove: (e: number) => void;
  onToggle: (e: number) => void;
}

const TodoList: FC<TodoListProps> = ({ onRemove, onToggle }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(readTodoRequest());
  }, [dispatch]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
