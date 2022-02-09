import React from "react";
import "../styles/ProductTile.scss";

const ProductTile = ({ product, children }) => {
    return (
        <article className="shopping-cart">
            <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <p>{product.name}</p>
            <p>${product.price}</p>
            {children}
        </article>
    );
};

export default ProductTile;
