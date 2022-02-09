import React from "react";
import "../styles/PrimaryButton.scss";

const PrimaryButton = ({ label }) => {
    return <button className="primary-button login-button">{label}</button>;
};

export default PrimaryButton;
