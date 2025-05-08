import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductProvider";
import { Link , useParams } from "react-router-dom";
function ProductUnic() {
    const {  getProduct } = useProducts();
    const [product, setProduct] = useState({});

   const params = useParams();

    useEffect(() => {
       const loadProduct = async () => {
           const producto = await getProduct(params.id);
           setProduct(producto);
        };
        loadProduct();
    }, []);
    console.log(product);
return (
    <div
        className="flex flex-col justify-between w-3/4 mt-2 mx-auto border-2 min-h-2/3">
            <div key={product.id} className="flex flex-col justify-between gap-8">
            <h1 className="text-5xl text-sky-600 font-bold">{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.features}</p>                
                <p>{product.category}</p>
                {product.thumbnail && (
                    <img src={product.thumbnail} alt={product.name} />
                )}
                {product.images.length > 0 && (
                    <div>
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Imagen ${index + 1}`} />
                        ))}
                    </div>
                )}
{
    product.oferta && (
        <p className="text-red-500 font-bold">Oferta: {product.oferta}%</p>
    )
}
            </div>
            <Link to={`/products`}><button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">Volver</button></Link>
        </div>
    );
}

 
export default ProductUnic