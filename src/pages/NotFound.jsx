import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
    return (
        <div class="NotFound-container">
            <p class="NotFound--message">Recurso no encontrado :(</p>
            <p class="NotFound--message NotFound--message__animated hinge">
                404
            </p>
        </div>
    );
};

export default NotFound;
