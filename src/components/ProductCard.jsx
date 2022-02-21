import React, { useContext } from "react";
import "@styles/ProductCard.scss";
import addToCartIcon from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <article className="ProductCard">
            <img
                src={product.images[0]}
                alt={product.title}
                className="ProductCard__image"
            />
            <div className="ProductCard-info">
                <div>
                    <p className="ProductCard-info__text ProductCard-info__text--bold">
                        ${product.price}
                    </p>
                    <p className="ProductCard-info__text ProductCard-info__text--gray">
                        {product.title}
                    </p>
                </div>
                <figure
                    className="ProductCard-info__figure"
                    onClick={() => handleClick(product)}
                >
                    <img
                        src={addToCartIcon}
                        alt="Add to cart"
                        className="ProductCard-info__figure--icon-add"
                    />
                </figure>
            </div>
        </article>
    );
};

export default ProductCard;
