const initialState = {
    sizeFeature : [],
    colorFeature : []
} 

export const modalReducer = (state = initialState , action) => {
    switch(action.type) {
        case "ADD_FEATURE_SIZE" : 
            return {
                ...state,
                sizeFeature : [...state.sizeFeature , action.payload]
            }
        case "ADD_FEATURE_COLOR" :
            return {
                ...state,
                colorFeature : [...state.colorFeature , action.payload]
            }

        default :
            return state
    }
}