import client from "./client";
import { ITodo } from "utils/types/ITodo";
import { END_POINT } from "utils/constants";

export const getTodosData = () => client.get(`/${END_POINT}`);

export const createTodoData = ({ content, isCheck, createAt }: ITodo) =>
  client.post(`/${END_POINT}`, { content, isCheck, createAt });

export const deleteTodoData = (id: number) =>
  client.delete(`/${END_POINT}/${id}`);

export const completeCheckTodoData = ({ id, isCheck }: ITodo) =>
  client.patch(`/${END_POINT}/${id}`, { isCheck });

export const updateTodoData = ({ id, content }: ITodo) =>
  client.patch(`/${END_POINT}/${id}`, { content });
