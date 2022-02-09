import React from "react";
import "../styles/Order.scss";
import ButtonOrderDetails from "./ButtonOrderDetails";

const Order = ({ order, children }) => {
    return (
        <article className="order">
            <p>
                <span>{order.date}</span>
                <span>{order.total_items} articles</span>
            </p>
            <p>${order.total_price}</p>
            {children}
        </article>
    );
};

export default Order;
