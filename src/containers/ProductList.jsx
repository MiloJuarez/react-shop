import React, { useEffect, useState } from "react";
import "@styles/ProductList.scss";
import ProductCard from "@components/ProductCard";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, []);

    return (
        <section className="ProductList-container">
            <div className="ProductList-cards">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
