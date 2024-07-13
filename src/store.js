import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./pages/reducers";

const initialState = {};

const middleware = [thunk];
const middleWareEnhancer = applyMiddleware(...middleware);

const composedEnhancers = composeWithDevTools({
  trace: true,
});

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers(middleWareEnhancer)
);

export default store;
