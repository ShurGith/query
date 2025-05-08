import { createContext, useContext, useState } from 'react';
import {
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

    async function loadProducts() {
        const response = await getProductsRequest();
        setProducts(response.data);
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
            products,
        }}>
            {children}
        </ProductContext.Provider>
    );
};

