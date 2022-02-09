import React from "react";
import "../styles/MyOrder.scss";
import Title from "../components/Title";
import Order from "../components/Order";
import ProductTile from "../components/ProductTile";

const MyOrder = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <Title title={"My order"} />

                <div className="my-order-content">
                    <Order
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                    />

                    <ProductTile
                        product={{
                            image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            name: "Bike",
                            price: 60.0,
                        }}
                    />

                    <ProductTile
                        product={{
                            image: "https://images.pexels.com/photos/4922619/pexels-photo-4922619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            name: "Helmet",
                            price: 15.0,
                        }}
                    />

                    <ProductTile
                        product={{
                            image: "https://images.pexels.com/photos/10110754/pexels-photo-10110754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                            name: "Biker",
                            price: 40.0,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
