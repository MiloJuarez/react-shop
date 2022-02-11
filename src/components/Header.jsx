import React, { useState } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className="Navbar">
            <img src={menu} alt="menu" className="Navbar__menu" />
            <div className="Navbar-left">
                <img src={logo} alt="logo" className="Navbar-left__logo" />
                <ul className="Navbar-left__items">
                    <li>
                        <a href="/" className="Navbar__item">
                            All
                        </a>
                    </li>
                    <li>
                        <a href="/" className="Navbar__item">
                            Clothes
                        </a>
                    </li>
                    <li>
                        <a href="/" className="Navbar__item">
                            Electronics
                        </a>
                    </li>
                    <li>
                        <a href="/" className="Navbar__item">
                            Furnitures
                        </a>
                    </li>
                    <li>
                        <a href="/" className="Navbar__item">
                            Toys
                        </a>
                    </li>
                    <li>
                        <a href="/" className="Navbar__item">
                            Others
                        </a>
                    </li>
                </ul>
            </div>
            <div className="Navbar-right">
                <ul className="Navbar-right__items">
                    <li className="Navbar-right__email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="Navbar-right__cart">
                        <img src={shoppingCart} alt="cart" />
                        <div>2</div>
                    </li>
                </ul>
                {toggle && <Menu />}
            </div>
        </nav>
    );
};

export default Header;
