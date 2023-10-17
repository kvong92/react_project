import React from "react";
import '../assets/css/products.css'
import Product from "../components/Product";

function ProductsList() {
    const products = ["Produit A", "Produit B", "Produit C", "Produit D"];

    return (
        <div className="products">
            <h1>Products List</h1>

            <div className="products-list">
                {products.map((product, index) => (
                    <Product name={product} key={index} />
                ),)}
            </div>
        </div>
    );
}

export default ProductsList;