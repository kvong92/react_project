import React from "react";

function Product({ name }) {
    return (
        <div className="product">
            <h2>{name}</h2>
        </div>
    );
}

export default Product;