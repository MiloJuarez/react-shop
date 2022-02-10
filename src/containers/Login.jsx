import React from "react";
import "../styles/Login.scss";
import PrimaryInputSubmit from "../components/PrimaryInputSubmit";
import SecondaryButton from "../components/SecondaryButton";

const Login = () => {
    return (
        <div class="Login">
            <div class="Login-container">
                <img
                    src="./assets/logos/logo_yard_sale.svg"
                    alt="Logo"
                    class="Login__icon"
                />

                <form action="/" class="Login-form">
                    <label for="email" class="Login-form__label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="Login-form__input Login-form__input--mb22"
                        placeholder="camilayokoo@gmail.com"
                    />

                    <label for="password" class="Login-form__label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        class="Login-form__input Login-form__input--mb22"
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
