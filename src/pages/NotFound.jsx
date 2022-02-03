import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
    return (
        <div class="error-container">
            <p class="error-message">Recurso no encontrado :(</p>
            <p class="error-message animated hinge fw-light">404</p>
        </div>
    );
};

export default NotFound;
