import React from "react";
import "../styles/ShoppingCart.scss";
import ButtonRemoveProduct from "../components/ButtonRemoveProduct";
import PrimaryButton from "../components/PrimaryButton";
import ProductTile from "../components/ProductTile";
import Title from "../components/Title";

const ShoppingCart = () => {
    return (
        <aside className="product-detail">
            <div className="title-container">
                <img src="./assets/icons/arrow.svg" alt="arrow" />
                <Title title={"My Shopping Cart"} />
            </div>

            <div>
                <ProductTile
                    product={{
                        image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        name: "Bike",
                        price: 60.0,
                    }}
                >
                    <ButtonRemoveProduct />
                </ProductTile>

                <ProductTile
                    product={{
                        image: "https://images.pexels.com/photos/4922619/pexels-photo-4922619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        name: "Helmet",
                        price: 15.0,
                    }}
                >
                    <ButtonRemoveProduct />
                </ProductTile>

                <ProductTile
                    product={{
                        image: "https://images.pexels.com/photos/10110754/pexels-photo-10110754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        name: "Biker",
                        price: 40.0,
                    }}
                >
                    <ButtonRemoveProduct />
                </ProductTile>

                <article className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$115.00</p>
                </article>

                <PrimaryButton label={"Checkout"} />
            </div>
        </aside>
    );
};

export default ShoppingCart;
