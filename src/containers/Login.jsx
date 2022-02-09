import React from "react";
import "../styles/Login.scss";
import PrimaryInputSubmit from "../components/PrimaryInputSubmit";

const App = () => {
    return (
        <div class="login">
            <div class="form-container">
                <img
                    src="./assets/logos/logo_yard_sale.svg"
                    alt="Logo"
                    class="logo"
                />

                <form action="/" class="form">
                    <label for="email" class="label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="input input-email"
                        placeholder="camilayokoo@gmail.com"
                    />

                    <label for="password" class="label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        class="input input-password"
                    />

                    <PrimaryInputSubmit value={"Log in"} />

                    <a href="/">Forgot my password</a>
                </form>

                <button class="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    );
};

export default App;
