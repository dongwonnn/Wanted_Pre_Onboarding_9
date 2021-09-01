import client from "./client";

export const getTodosData = () => client.get("/todos");

interface createProps {
  content: string;
  isCheck: boolean;
}
export const createTodoData = ({ content, isCheck }: createProps) =>
  client.post("/todos", { content, isCheck });
