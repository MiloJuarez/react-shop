import React from "react";
import "../styles/SecondaryInputSubmit.scss";

const SecondaryInputSubmit = ({ value }) => {
    return (
        <input
            type="submit"
            value={value}
            className="secondary-button login-button"
        />
    );
};

export default SecondaryInputSubmit;
