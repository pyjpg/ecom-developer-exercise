import {useState, useEffect, useCallback } from "react";

export default function useProductData() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // The reason for useCallaback is because we don't want to re-render the products once we already fetched, it might be unnecessary in a small applicaiton
    // However within production environments it's also best to optimise - i.e only re-rendered if product list updates
    const fetchProducts = useCallback(async() => {
        try{
            setLoading(true);
            setError(null);

            const response = await fetch("/data/recommendations.json");

            if (!response.ok) {
                throw new Error(`Error fetching products ${response.status}`);
            }

            const data = await response.json();

            // Need to validate whether the data is in the right format so we can pass into productList => productCards => user 
            if (!data.productData || !Array.isArray(data.productData)){
                throw new Error('Invalid Data Format');
            }
            
            // if we pass all the if, then we populate the products with the data
            setProducts(data.productData);
        }
        catch (err) {
            console.error('Product data did not load:', err);
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {
        products,
        loading,
        error,
        // refetch function is a little bonus as prevents re-rendering
        refetch: fetchProducts
    };
};