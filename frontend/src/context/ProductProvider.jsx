import { createContext, useContext, useState } from 'react';
import {
    //consultaDeProducto,
    getProductRequest, //Uno solo
    getProductsRequest, // Productos Todos
    createProductRequest,
    deleteProductRequest,
    updateProductRequest
}
    from '../routes/routes';

const ProductContext = createContext();
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadProducts(limit = 10, skip = 0, delay = 0) {
        setLoading(true);
        try {
            const response = await getProductsRequest(limit, skip, delay);
            //  console.log(response.data, response.statusText, response.headers);
            setProducts(response.data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const getProduct = async (id) => {
        try {
            const response = await getProductRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProductContext.Provider value={{
            getProduct,
            setProducts,
            loadProducts,
            loading,
            products,
        }}>
            {children}
        </ProductContext.Provider>
    );
};

