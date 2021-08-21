import { createStore, combineReducers } from "redux";
import { modalReducer } from "./modalDucks";

export const allReducers = combineReducers({
  modal: modalReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
