import React from 'react';
import './header.css';
import slide0 from "../../multimedia/slide0.jpg";
// import slide1 from "../../multimedia/slide1.png";
import rasp from "../../multimedia/rasp.png";
import image from "../../multimedia/image.png";
import cursos from "../../multimedia/cursos.png";
import cart from "../../multimedia/cart.png";
import attiny from "../../multimedia/attiny.png";
import antena from "../../multimedia/antena.png";
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <header>
                <div className="Logo">
                    <Link to="/"><img src={image} alt="logo tienda" className="logoImg" /></Link>
                    <Link to="/" className="hackio">Hackio</Link>
                </div>
                <nav>
                    <Link to="/Login" className="Nav-Link">Login</Link>
                    <Link to="/cart"><img src={cart} alt="Carrito" className="carrito" /></Link>
                </nav>
            </header>

        </div>
    );
}
