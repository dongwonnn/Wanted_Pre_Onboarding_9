import client from "./client";

export const getTodosData = () => client.get("/todos");

interface createProps {
  id?: number;
  content?: string;
  isCheck: boolean;
}

export const createTodoData = ({ content, isCheck }: createProps) =>
  client.post("/todos", { content, isCheck });

export const deleteTodoData = (id: number) => client.delete(`/todos/${id}`);

export const updateCheckTodoData = ({ id, isCheck }: createProps) =>
  client.patch(`/todos/${id}`, { isCheck });
