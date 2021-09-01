import React, { useRef } from "react";
import TodoInsert from "components/TodoInsert";
import TodoTemplate from "components/TodoTemplate";
import TodoList from "components/TodoList";
import { useState } from "react";
import { useCallback } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
