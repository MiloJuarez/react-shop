import React from "react";
import "../styles/PrimaryButton.scss";

const PrimaryButton = ({ label }) => {
    return <button className="PrimaryButton">{label}</button>;
};

export default PrimaryButton;
