import React, { useState } from "react";
import "@styles/ProductCard.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductCard = ({ product }) => {
    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    };

    return (
        <article className="ProductCard">
            <img
                src={product.image}
                alt={product.name}
                className="ProductCard__image"
            />
            <div className="ProductCard-info">
                <div>
                    <p className="ProductCard-info__text ProductCard-info__text--bold">
                        ${product.price}
                    </p>
                    <p className="ProductCard-info__text ProductCard-info__text--gray">
                        {product.name}
                    </p>
                </div>
                <figure
                    className="ProductCard-info__figure"
                    onClick={handleClick}
                >
                    <img
                        src={addToCart}
                        alt="Add to cart"
                        className="ProductCard-info__figure--icon-add"
                    />
                </figure>
            </div>
        </article>
    );
};

export default ProductCard;
