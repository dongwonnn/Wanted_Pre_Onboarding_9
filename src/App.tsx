import React from "react";
import TodoTemplate from "components/Todo/TodoTemplate";
import TodoInsert from "components/Todo/TodoInsert";
import TodoList from "components/Todo/TodoList";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
