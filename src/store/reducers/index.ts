import { combineReducers } from "redux";

import todo from "./todo";

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
