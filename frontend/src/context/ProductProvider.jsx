import { createContext, useState } from 'react';
import { 
    getProductsRequest, createProductRequest, 
    deleteProductRequest, getProductRequest, 
    updateProductRequest }
 from '../routes/routes';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    return (
        <ProductContext.Provider value={{
            getProductsRequest,
            createProductRequest,
            deleteProductRequest,
            getProductRequest,
            updateProductRequest,
            products,
            setProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
};

