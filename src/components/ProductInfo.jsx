import React from "react";
import "../styles/ProductInfo.scss";

const ProductInfo = ({ product }) => {
    return (
        <>
            <img src={product.image} alt={product.name} />
            <div className="ProductInfo">
                <p>${product.price}</p>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <button className="primary-button add-to-cart-button">
                    <img
                        src="./assets/icons/bt_add_to_cart.svg"
                        alt="add to cart"
                    />
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductInfo;
