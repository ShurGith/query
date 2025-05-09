import axios from "axios";

const SERVER_PORT = 3000

//const API = `http://localhost:${SERVER_PORT}/products`;
const API = 'https://dummyjson.com/products'
export const consultaDeProducto = API

export const getProductsRequest = async (limit, skip,delay) => {
    //return await axios.get(`${API}?limit=${limit}&skip=${skip}`);
  //  return await axios.get(`http://localhost:3000/products`);
/*    fetch(`${API}?limit=${limit}&skip=${skip}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); */
    return await axios.get(`${API}?limit=${limit}&skip=${skip}&delay=${delay}`);
}

export const createProductRequest = async (prod) =>
    await axios.post(`${API}`, prod);

export const deleteProductRequest = async (id) =>
    await axios.delete(`${API}/${id}`);

export const getProductRequest = async (id) =>
    await axios.get(`${API}/${id}`);

export const updateProductRequest = async (id, newFields) =>
    await axios.put(`${ API }/${id}`, newFields);

