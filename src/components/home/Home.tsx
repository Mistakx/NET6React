import React from 'react';
import '../../styles/style.css';
// import '../../assets/js/main.js';
import SidePanel from "../SidePanel";

function Home(): JSX.Element {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">

            <SidePanel/>

            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Play list Manager</h1>
                <p><span className="typed"
                data-typed-items="Make your playlist, Choose your music, Many more than a playlist manager"></span></p>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>

        </section>
    )

}

export default Home;
