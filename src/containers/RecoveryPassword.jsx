import React from "react";
import "../styles/RecoveryPassword.scss";
import PrimaryButton from "../components/PrimaryButton";

const RecoveryPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img
                    src="./assets/logos/logo_yard_sale.svg"
                    alt="Logo"
                    className="logo"
                />

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reseet
                    the password
                </p>

                <div className="email-image">
                    <img src="./assets/icons/email.svg" alt="Email" />
                </div>

                <PrimaryButton label={"Login"} />

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword;
