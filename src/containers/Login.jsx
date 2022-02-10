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
                    class="Login--logo"
                />

                <form action="/" class="Login-form">
                    <label for="email" class="Login-form--label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="Login-form--input input-email"
                        placeholder="camilayokoo@gmail.com"
                    />

                    <label for="password" class="Login-form--label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        class="Login-form--input input-password"
                    />

                    <PrimaryInputSubmit value={"Log in"} />

                    <a href="/">Forgot my password</a>
                </form>

                <SecondaryButton label={"Sign up"} />
            </div>
        </div>
    );
};

export default Login;
