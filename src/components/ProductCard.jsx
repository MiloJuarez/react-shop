import React from "react";
import "../styles/ProductCard.scss";

const ProductCard = ({ product }) => {
    return (
        <article className="ProductCard">
            <img src={product.image} alt={product.name} />
            <div className="ProductCard-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.name}</p>
                </div>
                <figure>
                    <img
                        src="./assets/icons/bt_add_to_cart.svg"
                        alt="Add to cart"
                    />
                </figure>
            </div>
        </article>
    );
};

export default ProductCard;
