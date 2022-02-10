import React from "react";
import "../styles/ProductCard.scss";

const ProductCard = ({ product }) => {
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
                <figure className="ProductCard-info__figure">
                    <img
                        src="./assets/icons/bt_add_to_cart.svg"
                        alt="Add to cart"
                        className="ProductCard-info__figure--icon-add"
                    />
                </figure>
            </div>
        </article>
    );
};

export default ProductCard;
