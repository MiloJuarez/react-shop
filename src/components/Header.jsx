import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import AppContext from "@context/AppContext";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCartIcon from "@icons/icon_shopping_cart.svg";
import ShoppingCart from "@containers/ShoppingCart";
import MobileMenu from "@components/MobileMenu";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleMM, setToggleMM] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleToggleMM = () => {
        setToggleMM(!toggleMM);
    };

    return (
        <nav className="Navbar">
            <img
                src={menu}
                alt="menu"
                className="Navbar__menu"
                onClick={() => handleToggleMM()}
            />
            {toggleMM && <MobileMenu handleClick={() => handleToggleMM()} />}
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
                    <li
                        className="Navbar-right__cart"
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                        <img src={shoppingCartIcon} alt="cart" />
                        {state.cart.length > 0 ? (
                            <div>{state.cart.length}</div>
                        ) : null}
                    </li>
                </ul>
                {toggle && <Menu />}
                {toggleOrders && (
                    <ShoppingCart
                        onTapBack={() => setToggleOrders(!toggleOrders)}
                    />
                )}
            </div>
        </nav>
    );
};

export default Header;
