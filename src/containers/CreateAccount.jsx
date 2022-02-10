import React from "react";
import "../styles/CreateAccount.scss";
import PrimaryInputSubmit from "../components/PrimaryInputSubmit";
import Title from "../components/Title";

const CreateAccount = () => {
    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <Title title={"Create account"} />

                <form action="/" className="CreateAccount-form">
                    <div>
                        <label for="name" className="CreateAccount-form--label">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Milo"
                            className="CreateAccount-form--input input-name"
                        />

                        <label
                            for="email"
                            className="CreateAccount-form--label"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="platzi@example.com"
                            className="CreateAccount-form--input input-email"
                        />

                        <label
                            for="password"
                            className="CreateAccount-form--label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*********"
                            className="CreateAccount-form--input input-password"
                        />
                    </div>

                    <PrimaryInputSubmit value={"Create"} />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
