import React from "react";
import "@styles/Login.scss";
import PrimaryInputSubmit from "@components/PrimaryInputSubmit";
import SecondaryButton from "@components/SecondaryButton";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
    return (
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="Logo" className="Login__icon" />

                <form action="/" className="Login-form">
                    <label htmlFor="email" className="Login-form__label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="Login-form__input Login-form__input--mb22"
                        placeholder="camilayokoo@gmail.com"
                    />

                    <label htmlFor="password" className="Login-form__label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        className="Login-form__input Login-form__input--mb22"
                    />

                    <PrimaryInputSubmit value={"Log in"} />

                    <a href="/" className="Login-form__link">
                        Forgot my password
                    </a>
                </form>

                <SecondaryButton label={"Sign up"} />
            </div>
        </div>
    );
};

export default Login;
