import axios from "axios";

const SERVER_PORT = 3000

//const API = `http://localhost:${SERVER_PORT}/products`;
const API = 'https://dummyjson.com/products'
export const consultaDeProducto = API

export const getProductsRequest = async () => {
    return await axios.get(`${API}?limit=5`);
  //  return await axios.get(`http://localhost:3000/products`);
}

export const createProductRequest = async (prod) =>
    await axios.post(`${API}`, prod);

export const deleteProductRequest = async (id) =>
    await axios.delete(`${API}/${id}`);

export const getProductRequest = async (id) =>
    await axios.get(`${API}/${id}`);

export const updateProductRequest = async (id, newFields) =>
    await axios.put(`${ API }/${id}`, newFields);

