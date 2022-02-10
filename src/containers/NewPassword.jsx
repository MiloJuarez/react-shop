import React from "react";
import "../styles/NewPassword.scss";
import PrimaryInputSubmit from "../components/PrimaryInputSubmit";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const NewPassword = () => {
    return (
        <div className="NewPassword">
            <div className="NewPassword-container">
                <img
                    src="./assets/logos/logo_yard_sale.svg"
                    alt="Logo"
                    className="NewPassword--logo"
                />

                <Title title={"Create a new password"} />
                <Subtitle subtitle={"Enter a new password for your account"} />

                <form action="/" className="NewPassword-form">
                    <label for="password" className="NewPassword-form--label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*********"
                        className="NewPassword-form--input input-password"
                    />

                    <label
                        for="new-password"
                        className="NewPassword-form--label"
                    >
                        New password
                    </label>
                    <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        placeholder="*********"
                        className="NewPassword-form--input input-password"
                    />

                    <PrimaryInputSubmit value={"Confirm"} />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
