import * as types from "../types/product";
import axios from "axios";

const BASE_URL = process.env.BASE_URL;
const APP_ID = process.env.APP_ID;
const ORG_ID = process.env.ORG_ID;
const API_KEY = process.env.API_KEY;


export const getAllProducts = () => async (dispatch) => {
    try {

        console.log(API_KEY, APP_ID, ORG_ID, BASE_URL)

        dispatch({
            type: types.GET_ALL_PRODUCTS_REQUEST,
        });
        const { data } = await axios.get(`${BASE_URL}/products?organization_id=${ORG_ID}&APP_ID=${APP_ID}&API_KEY=${API_KEY}`);

        console.log(data)

        dispatch({
            type: types.GET_ALL_PRODUCTS,
            payload: data,
        });

        return data.data;

    } catch (error) {
        dispatch({
            type: types.GET_ALL_PRODUCTS_FAIL,
            payload: error
        });
    }
};

