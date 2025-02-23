import React, { useState, useEffect } from "react";
import {getAllProducts} from "../../api/product";
import {ERROR_MESSAGES} from "../../constants/errorMessages";
import ProductCard from "../ProductCard/ProductCard";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import './ProductList.css'
import MessageBanner from "../MessageBanner/MessageBanner";
import {ERROR} from "../../constants/constants";

const ProductList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchProducts = async () => {
            try {
                const products = await getAllProducts();
                setProducts(products);
            } catch (e) {
                setError(ERROR_MESSAGES.FETCH_PRODUCTS_FAILED);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, [])

    if (isLoading) return <SkeletonLoader />;
    if (error) return <MessageBanner message={error} severity={ERROR} />;
    if (products.length === 0) {
        return <div style={{textAlign: 'center', padding: '20px'}}>No products found</div>;
    }

    return (
        <div style={{padding: '20px'}}>
            <h1>Products</h1>
            <div className='product-grid'>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList;