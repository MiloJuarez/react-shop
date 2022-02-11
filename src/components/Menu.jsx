import React from "react";
import "@styles/Menu.scss";

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign up</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
