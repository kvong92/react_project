import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'

function Navbar() {

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/ToDoList">ToDoList</Link>
                <Link to="/Counter">Counter</Link>
                <Link to="/UserProfile">UserProfile</Link>
                <Link to="/Productslist">Products List</Link>
                <Link to="/FilmsList/1  ">Films List</Link>
            </ul>
        </nav>
    );

}

export default Navbar;