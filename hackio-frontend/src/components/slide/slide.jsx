import React from 'react';
import './slide.css';
import slide0 from "../../multimedia/slide0.jpg";
// import slide1 from "../../multimedia/slide1.png";


export default function Slide() {
    return (
        <div>
           
            <div className="presentation">
                <img src={slide0} alt="usb" className="slide" />
                <div className="text-container">
                    <h2>Hotplug Attack</h2>
                    <h4>En poco tiempo, obtén acceso al sistema</h4>
                </div>
            </div>
        </div>
    );
}
