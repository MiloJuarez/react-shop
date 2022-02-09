import React from "react";
import "../styles/AccountDetails.scss";
import SecondaryInputSubmit from "../components/SecondaryInputSubmit";
import Title from "../components/Title";

const AccountDetails = () => {
    return (
        <div className="login">
            <div className="form-container">
                <Title title={"My account"} />

                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">
                            Name
                        </label>
                        <p className="value">Camila Yokoo</p>

                        <label for="email" className="label">
                            Email address
                        </label>
                        <p className="value">camilayokoo@gmail.com</p>

                        <label for="password" className="label">
                            Password
                        </label>
                        <p className="value">*********</p>
                    </div>

                    <SecondaryInputSubmit value={"Edit"} />
                </form>
            </div>
        </div>
    );
};

export default AccountDetails;
