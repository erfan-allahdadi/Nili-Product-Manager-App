const initState = {
    products : [],

    isCreateProductLoading : false,
    isReadProductLoading : false,
    isDeleteProductLoading : false,
    isUpdateProductLoading : false,
}

export const productReducer = (state = initState , action) => {
    switch(action.type) {

        case "SEND_PRODUCT_LOADING":
            return {...state}
        case "ADD_NEW_PRODUCT" : 
            return {...state}
        case "SEND_PRODUCT_FAILED" :
            return {...state}

        case "GET_PRODUCT_LOADING" : 
            return {...state}
        case "GET_PRODUCT_DONE" : 
            return {...state}
        case "GET_PRODUCT_FAILED" :
            return {...state}

            
        case "DELETE_PRODUCT" :
            return {...state}
        case "UPDATE_PRODUCT" :
            return {...state}
        default : return {state}
    }
}