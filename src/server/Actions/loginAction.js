import * as api from "../API/index";
 
export const loginUserAction = (loginFormData , navigate) => async (dispatch) => {
    dispatch({type : "LOGIN_LOADING"})
    try {
        const response = await api.loginUser(loginFormData);
        dispatch({type : "LOGIN_USER" , payload : response?.data});
        localStorage.setItem("userData" , JSON.stringify(response?.data?.data?.result))
        if(response.status === 200) navigate("/products")
    } catch (error) {
        console.log("error" , error);
    }
}