import React from "react";
import "../styles/ProductItem.scss";

const ProductItem = ({ product, children }) => {
    return (
        <article className="ProductItem">
            <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <p>{product.name}</p>
            <p>${product.price}</p>
            {children}
        </article>
    );
};

export default ProductItem;
