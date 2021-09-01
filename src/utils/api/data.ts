import client from "./client";

export const getTodosData = () => client.get("/todos");

interface createProps {
  content: string;
  isCheck: boolean;
}

export const createTodoData = ({ content, isCheck }: createProps) =>
  client.post("/todos", { content, isCheck });

export const deleteTodoData = (id: number) => client.delete(`/todos/${id}`);
