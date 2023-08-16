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

export default function Login() {
    return (
        <div>
            <header>
                <a href="/index.html" className="Logo">
                    <img src="/media/image.png" alt="logo tienda" className="logoImg" />
                    <h2 className="MyPage">Hackio</h2>
                </a>

                <nav>
                    <a href="/index.html" className="Nav-Link">HOME</a>
                </nav>
            </header>

            <div className="login-box">
                <form action="action_page.php" method="post">
                    <div className="imgcontainer">
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked={true} name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="container" style={{ backgroundColor: "#3b3b3b" }}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw"><a href="#">Forgot password?</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}
