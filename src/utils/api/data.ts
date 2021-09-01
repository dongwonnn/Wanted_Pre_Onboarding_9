import client from "./client";
import { ITodo } from "utils/types/ITodo";

export const getTodosData = () => client.get("/todos");

export const createTodoData = ({ content, isCheck, createAt }: ITodo) =>
  client.post("/todos", { content, isCheck, createAt });

export const deleteTodoData = (id: number) => client.delete(`/todos/${id}`);

export const updateCheckTodoData = ({ id, isCheck }: ITodo) =>
  client.patch(`/todos/${id}`, { isCheck });
