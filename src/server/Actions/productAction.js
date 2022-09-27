import * as api from "../API/index";

export const sendProduct = (productData) => async (dispatch) => {
    dispatch({type : "SEND_PRODUCT_LOADING"})
    try {
        const {data} = await api.createProduct(productData);
        dispatch({type : "ADD_NEW_PRODUCT", payload : data});
    } catch (error) {
        dispatch({type : "SEND_PRODUCT_FAILED"});
    }
}

export const getProducts = () => async (dispatch) => {
    dispatch({type : "GET_PRODUCT_LOADING"})
    try {
        const {data} = await api.readProduct(productData);
        dispatch({type : "GET_PRODUCT_DONE", payload : data});
    } catch (error) {
        dispatch({type : "GET_PRODUCT_FAILED"});
    }
}