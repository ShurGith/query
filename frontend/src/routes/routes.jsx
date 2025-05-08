import axios from "axios";

const SERVER_PORT = 3000

const API = `http://localhost:${SERVER_PORT}/products`;

export const getProductsRequest = async () => {
    //  await axios.get(`'${API}/tasks`);
    return await axios.get(`${API}`);
}

export const createProductRequest = async (task) =>
    await axios.post(`${API}`, task);

export const deleteProductRequest = async (id) =>
    await axios.delete(`${API}/${id}`);

export const getProductRequest = async (id) =>
    await axios.get(`${API}/${id}`);

export const updateProductRequest = async (id, newFields) =>
    await axios.put(`${ API }/${id}`, newFields);

