import React from 'react';
import './products.css';
import slide0 from "../../multimedia/slide0.jpg";
// import slide1 from "../../multimedia/slide1.png";
import rasp from "../../multimedia/rasp.png";
import cursos from "../../multimedia/cursos.png";
import attiny from "../../multimedia/attiny.png";
import antena from "../../multimedia/antena.png";
import {Link} from "react-router-dom"

export default function Products() {
    return (
        <div>
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