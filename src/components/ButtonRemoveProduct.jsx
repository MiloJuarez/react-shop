import React from "react";
import close from "@icons/icon_close.png";
import "@styles/ButtonRemoveProduct.scss";

const ButtonRemoveProduct = ({ handleClick }) => {
    return (
        <img
            className="ButtonRemoveProduct"
            src={close}
            alt="close"
            onClick={handleClick}
        />
    );
};

export default ButtonRemoveProduct;
