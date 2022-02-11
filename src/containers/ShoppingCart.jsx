import React from "react";
import "@styles/ShoppingCart.scss";
import ButtonRemoveProduct from "@components/ButtonRemoveProduct";
import PrimaryButton from "@components/PrimaryButton";
import ProductItem from "@components/ProductItem";
import Title from "@components/Title";
import arrowBack from "@icons/arrow.svg";

const ShoppingCart = () => {
    return (
        <aside className="ShoppingCart">
            <div className="ShoppingCart__title">
                <img src={arrowBack} alt="arrow" />
                <Title title={"My Shopping Cart"} />
            </div>

            <div>
                <ProductItem
                    product={{
                        image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        name: "Bike",
                        price: 60.0,
                    }}
                >
                    <ButtonRemoveProduct />
                </ProductItem>

                <ProductItem
                    product={{
                        image: "https://images.pexels.com/photos/4922619/pexels-photo-4922619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        name: "Helmet",
                        price: 15.0,
                    }}
                >
                    <ButtonRemoveProduct />
                </ProductItem>

                <ProductItem
                    product={{
                        image: "https://images.pexels.com/photos/10110754/pexels-photo-10110754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        name: "Biker",
                        price: 40.0,
                    }}
                >
                    <ButtonRemoveProduct />
                </ProductItem>

                <article className="ShoppingCart-orderItem--flex">
                    <p className="ShoppingCart-orderItem__text">
                        <span className="ShoppingCart-orderItem__text--medium">
                            Total
                        </span>
                    </p>
                    <p className="ShoppingCart-orderItem__text ShoppingCart-orderItem__text--end">
                        $115.00
                    </p>
                </article>

                <PrimaryButton label={"Checkout"} />
            </div>
        </aside>
    );
};

export default ShoppingCart;
