import { useEffect } from "react";
import { useProducts } from "../context/ProductProvider";
import { Link } from "react-router-dom";


function ProductsPage() {
    const { products,loadProducts } = useProducts();

    useEffect(() => {
        loadProducts();
    }, []);
    
    return (
        <div>
            <h1 className="text-5xl text-sky-600 font-bold text-center">Productos</h1>
            {products.length > 0 && products.map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}><h2>{product.name}</h2></Link>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;