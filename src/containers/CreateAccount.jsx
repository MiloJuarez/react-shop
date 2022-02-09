import React from "react";
import "../styles/CreateAccount.scss";
import PrimaryInputSubmit from "../components/PrimaryInputSubmit";
import Title from "../components/Title";

const CreateAccount = () => {
    return (
        <div className="login">
            <div className="form-container">
                <Title title={"Create account"} />

                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Milo"
                            className="input input-name"
                        />

                        <label for="email" className="label">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="platzi@example.com"
                            className="input input-email"
                        />

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
                    </div>

                    <PrimaryInputSubmit value={"Create"} />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
