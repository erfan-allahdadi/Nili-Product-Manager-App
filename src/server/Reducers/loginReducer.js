const initState = {
    userData: [] 
}

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_LOADING":
            return {
                isLoginLoading : true,
            }
        case "LOGIN_USER":
            return { userData: action.payload , isLoginLoading : false }
        default:
            return state;
    }
}