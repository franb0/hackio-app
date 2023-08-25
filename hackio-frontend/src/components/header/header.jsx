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
            <div className="presentation">
                <img src={slide0} alt="usb" className="slide" />
                <div className="text-container">
                    <h2>Hotplug Attack</h2>
                    <h4>En poco tiempo, obtén acceso al sistema</h4>
                </div>
            </div>
            <div className="catalogo">
                <div className="products">
                    <img src={attiny} alt="esp" className="esp" />
                    <h3>Hotplug</h3>
                </div>
                <div className="products">
                    <img id="imgantena" src={antena} alt="antena" className="antena" />
                    <h3>Wireless</h3>
                </div>
                <div className="products">
                    <img src={rasp} alt="micropc" className="rasp" />
                    <h3>Micro PC</h3>
                </div>
                <div className="products">
                    <img src={cursos} alt="courses" className="courses" />
                    <h3>Courses</h3>
                </div>
            </div>
        </div>
    );
}
