import client from "./client";
import { ITodo } from "utils/types/ITodo";

export const getTodosData = () => client.get("/todos");

export const createTodoData = ({ content, isCheck }: ITodo) =>
  client.post("/todos", { content, isCheck });

export const deleteTodoData = (id: number) => client.delete(`/todos/${id}`);

export const updateCheckTodoData = ({ id, isCheck }: ITodo) =>
  client.patch(`/todos/${id}`, { isCheck });
