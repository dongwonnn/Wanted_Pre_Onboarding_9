import client from "./client";
import { ITodo } from "utils/types/ITodo";

export const getTodosData = () => client.get("/");

export const createTodoData = ({ content, isCheck, createAt }: ITodo) =>
  client.post("/", { content, isCheck, createAt });

export const deleteTodoData = (id: number) => client.delete(`/${id}`);

export const updateCheckTodoData = ({ id, isCheck }: ITodo) =>
  client.patch(`/${id}`, { isCheck });
