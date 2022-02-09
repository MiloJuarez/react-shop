import React from "react";
import "../styles/NewPassword.scss";
import PrimaryInputSubmit from "../components/PrimaryInputSubmit";
import Title from "../components/Title";

const NewPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img
                    src="./assets/logos/logo_yard_sale.svg"
                    alt="Logo"
                    className="logo"
                />

                <Title title={"Create a new password"} />
                <p className="subtitle">
                    Enter a new password for your account
                </p>

                <form action="/" className="form">
                    <label for="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />

                    <label for="new-password" className="label">
                        New password
                    </label>
                    <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        placeholder="*********"
                        className="input input-password"
                    />

                    <PrimaryInputSubmit value={"Confirm"} />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
