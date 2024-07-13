import * as types from "../types/product";

const initState = {
    products: [],
    product: {},
    error: null,
    success: false,
    loading: false,
};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        
        case types.GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case types.GET_ALL_PRODUCTS:
            return {
                ...state,
                loading: false,
                success: true,
                receivings: action.payload.data,
            };
        case types.GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };


        default:
            return state;
    }
};

export default productReducer;
