import client from "./client";

export const getTodosData = () => client.get("/todos");
export const createTodoData = () => client.post("/todos");
