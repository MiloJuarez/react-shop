import React from "react";
import "@styles/ProductItem.scss";

const ProductItem = ({ product, children }) => {
    return (
        <article className="ProductItem">
            <figure className="ProductItem__figure">
                <img src={product.image} alt={product.name} />
            </figure>
            <p className="ProductItem__text--light">{product.name}</p>
            <p className="ProductItem__text--bold">${product.price}</p>
            {children}
        </article>
    );
};

export default ProductItem;
