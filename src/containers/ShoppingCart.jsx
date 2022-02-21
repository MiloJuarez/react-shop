import React, { useContext } from "react";
import "@styles/ShoppingCart.scss";
import AppContext from "@context/AppContext";
import ButtonRemoveProduct from "@components/ButtonRemoveProduct";
import PrimaryButton from "@components/PrimaryButton";
import ProductItem from "@components/ProductItem";
import Title from "@components/Title";
import arrowBack from "@icons/arrow.svg";

const ShoppingCart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (acumulador, currentValue) =>
            acumulador + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className="ShoppingCart">
            <div className="ShoppingCart__title">
                <img src={arrowBack} alt="arrow" />
                <Title title={"My Shopping Cart"} />
            </div>

            <div className="ShoppingCart__container">
                {state.cart.map((product) => (
                    <ProductItem
                        product={product}
                        key={`productItem-${product.id}`}
                    >
                        <ButtonRemoveProduct />
                    </ProductItem>
                ))}

                <article className="ShoppingCart-orderItem--flex">
                    <p className="ShoppingCart-orderItem__text">
                        <span className="ShoppingCart-orderItem__text--medium">
                            Total
                        </span>
                    </p>
                    <p className="ShoppingCart-orderItem__text ShoppingCart-orderItem__text--end">
                        ${sumTotal()}
                    </p>
                </article>

                <PrimaryButton label={"Checkout"} />
            </div>
        </aside>
    );
};

export default ShoppingCart;
