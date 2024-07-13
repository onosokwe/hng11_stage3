import { combineReducers } from "redux";
import productReducer from "./ppm/productReducer";

const appReducer = combineReducers({
    product: productReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
