import React from "react";
import "../styles/PrimaryInputSubmit.scss";

const PrimaryInputSubmit = ({ value }) => {
    return (
        <input
            type="submit"
            value={value}
            className="primary-button login-button"
        />
    );
};

export default PrimaryInputSubmit;
