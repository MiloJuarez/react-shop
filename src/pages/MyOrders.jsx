import React from "react";
import "../styles/MyOrders.scss";
import Title from "../components/Title";
import Order from "../components/Order";
import ButtonOrderDetails from "../components/ButtonOrderDetails";

const MyOrders = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <Title title={"My orders"} />

                <div className="my-order-content">
                    <Order
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </Order>

                    <Order
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </Order>

                    <Order
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </Order>

                    <Order
                        order={{
                            date: "04.25.21",
                            total_items: 3,
                            total_price: 115.0,
                        }}
                        canNavigateToDetails={true}
                    >
                        <ButtonOrderDetails />
                    </Order>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
