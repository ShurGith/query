import { useEffect } from "react";
import DOMPurify from 'dompurify';
import { useProducts } from "../context/ProductProvider";
import { Link } from "react-router-dom";

function ProductsPage() {
    const { products, loadProducts,loading } = useProducts();
    useEffect(() => {
        loadProducts();
    }, []);

    console.log(products);

    const HTMLRenderer = ({ htmlContent }) => {
        const sanitizedHTML = DOMPurify.sanitize(htmlContent);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && products.length === 0 && <p>No products found</p>}
            {
                !loading && products.length !== 0 &&
                <><h1 className="text-5xl text-sky-600 font-bold text-center">Productos</h1>
              {products.map((product) => (

            <div key={product.id}>
                <h2
                    className="text-blue-500 hover:underline font-bold p-2 "
                >
                    <Link to={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </h2>

                <p>{product.price}</p>
                {/*  Salida renderizada */}
                <HTMLRenderer htmlContent={product.description} />
            </div>

            ))}
            </>
            }
        </div>

    );
}

export default ProductsPage;