import React from "react";
import "../styles/RecoveryPassword.scss";
import PrimaryButton from "../components/PrimaryButton";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const RecoveryPassword = () => {
    return (
        <div className="RecoveryPassword">
            <div className="RecoveryPassword-container">
                <img
                    src="./assets/logos/logo_yard_sale.svg"
                    alt="Logo"
                    className="RecoveryPassword--logo"
                />

                <Title />
                <Subtitle
                    subtitle={
                        "Please check your inbox for instructions on how to reseet the password"
                    }
                />

                <div className="email-image">
                    <img src="./assets/icons/email.svg" alt="Email" />
                </div>

                <PrimaryButton label={"Login"} />

                <p className="RecoveryPassword--resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword;
