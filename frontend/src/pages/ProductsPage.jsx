import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import { useProducts } from "../context/ProductProvider";
import { Link } from "react-router-dom";

function ProductsPage() {
    const { products, loadProducts, loading } = useProducts();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [numberPage, setNumberPage] = useState(1);
    const delay = 1500;
    useEffect(() => {
        loadProducts(limit);
    }, []);

    const pagination = Math.floor(1 + products.total / limit);
    const paginationArray = Array.from({ length: pagination }, (_, index) => index + 1);

    const handlePagination = (page) => {
        /*//! No funciona
        setSkip(limit * (page - 1)); 
         loadProducts(limit, skip);
        //! No funciona */
        loadProducts(limit, limit * (page - 1), delay);
        setPage(page);
        setTimeout(() => {
            setNumberPage(page);
        }, delay);
       // setNumberPage(page);
    };

    const handleLoadMore = (objetivo) => {
        switch (true) {
            case objetivo >= pagination:
                return;
            case objetivo === 0:
                handlePagination(page - 2);
                break;
            default:
                handlePagination(objetivo + 1);
        }
    };
    //console.log(products);
    const HTMLRenderer = ({ htmlContent }) => {
        const sanitizedHTML = DOMPurify.sanitize(htmlContent);
        return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
    };

    return (
        <div>
            <h1 className="text-5xl text-sky-600 font-bold text-center">Productos</h1>
            <div className="flex justify-start items-end py-8 pl-4 gap-1 mt-12">
                <button
                    onClick={() => handleLoadMore(page)}
                    className={`text-white font-bold py-2 px-4 rounded
                            ${page >= pagination ? "cursor-not-allowed bg-green-200" : "bg-green-600 cursor-pointer over:bg-green-700"}`}>
                    Load More
                </button>
                {paginationArray.map((page) => (
                    <button key={page} onClick={() => handlePagination(page)}
                        className={`text-white font-bold py-2 px-4 rounded 
                        ${page === numberPage ? "bg-blue-300 cursor-not-allowed" : "cursor-pointer bg-blue-500 hover:bg-blue-700"}`}
                        disabled={numberPage === page}>
                        {page}
                    </button>
                ))}
            </div>
            {loading && <p>Loading...</p>}
            {!loading && products.length === 0 && <p>No products found</p>}
            {
                !loading && products.length !== 0 &&
                <>
                    {products.products.map((product) => (
                        <div key={product.id}
                            className="flexjustify-between items-center border-b-2 border-gray-300 p-4
                        shadow-md hover:shadow-lg shadow-gray-500 rounded-md mb-4">
                            <h2 className="text-blue-500 hover:underline font-bold p-2 ">
                                <Link to={`/products/${product.id}`}
                                    className="flex items-end justify-start gap-2 max-w-fit">
                                    <img src={product.thumbnail} alt={product.title}
                                        className="w-20 h-20 object-cover" />
                                    {product.id} - {product.title}
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