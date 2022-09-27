import axios from "axios";

const API = createBaseUrl({baseUrl : "https://localhost:3000"});

export const createProduct = (productData) => {API.post("", productData)}
export const readProduct = () => {API.get("")}
export const updateProduct = () => {API.put("" , {params : {}})}
export const deleteProduct = () => {API.delete("" , {params : {}})}