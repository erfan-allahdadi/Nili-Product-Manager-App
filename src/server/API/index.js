import axios from "axios"; 

const API = axios.create({baseURL : "https://nilistore.iran.liara.run/api"});

const userData = JSON.parse(localStorage.getItem("userData"));

const accessToken = userData?.accessToken;
const refreshToken = userData?.refreshToken;

API.defaults.headers.common["access-token"] = accessToken;
API.defaults.headers.common["refresh-token"] = refreshToken;
API.defaults.headers.post["Content-Type"] = "application/json";
 
export const loginUser = (userData) => API.post("user/login" , userData) 
export const createProduct = (productData) => API.post("products", productData)
export const readProduct = () => API.get("products")
export const updateProduct = () => API.put("" , {params : {}})
export const deleteProduct = () => API.delete("" , {params : {}})