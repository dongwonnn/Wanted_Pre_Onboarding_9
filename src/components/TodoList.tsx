import React from "react";
import { FC } from "react";
import TodoListItem from "./TodoListItem";
import { ITodo } from "utils/types/ITodo";

interface TodoListProps {
  todos: ITodo[];
  onRemove: (e: number) => void;
  onToggle: (e: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
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
