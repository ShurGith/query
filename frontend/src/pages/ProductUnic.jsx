import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductProvider";
import { Link, useParams } from "react-router-dom";
function ProductUnic() {
    const { getProduct } = useProducts();
    const [product, setProduct] = useState({});

    const params = useParams();

    useEffect(() => {
        const loadProduct = async () => {
            const producto = await getProduct(params.id);
            console.log(producto);
            setProduct(producto);
        };
        loadProduct();
    }, []);
    //console.log(product);
    return (
        <div
            className="flex flex-col justify-between w-3/4 mt-2 mx-auto min-h-2/3">
            <div key={product.id} className="flex flex-col justify-between gap-8 pb-24">
                <h1 className="text-5xl text-sky-600 font-bold">{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.features}</p>
                <p>{product.category}</p>
                {product.thumbnail && (
                    <img src={product.thumbnail} alt={product.name}
                        className="w-1/3 mx-auto" />
                )}
                <p className="text-green-500 font-bold">Precio: {product.price}</p>
            <p className="text-red-500 font-bold">Stock: {product.stock}</p> 
            </div>
            <Link to={`/products`}><button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">Volver</button></Link>
        </div>
    );
}


export default ProductUnic