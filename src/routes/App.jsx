import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "../containers/CreateAccount";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import MyOrder from "../containers/MyOrder";
import NewPassword from "../containers/NewPassword";
import RecoveryPassword from "../containers/RecoveryPassword";
import ShoppingCart from "../containers/ShoppingCart";
import AccountDetails from "../pages/AccountDetails";
import Home from "../pages/Home";
import MyOrders from "../pages/MyOrders";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<CreateAccount />} />
                    <Route path="/account" element={<AccountDetails />} />
                    <Route
                        path="/recovery-password"
                        element={<RecoveryPassword />}
                    />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/my-order" element={<MyOrder />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
