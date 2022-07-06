import '../../../styles/style.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginStore from "../../../stores/LoginStore";

function HomePage(): JSX.Element {

    useEffect(() => {
        AOS.init();
    }, []);

    // var options = new Typed('.typed', {
    //     strings       : ['Make your playlist', 'Choose your music', 'Many more than a playlist manager'],
    //     backSpeed     : 0,
    //     smartBackspace: true,
    //     typeSpeed     : 100,
    //     backDelay     : 700,
    //     loop          : true,
    // });
    
    return (

        <section id="hero" className="d-flex flex-column justify-content-center position-relative">

            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Sparta List</h1>
                <div className="typed"></div>
                <div className="social-links">
                    <a href="components/pages/homePage/HomePage#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="components/pages/homePage/HomePage#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="components/pages/homePage/HomePage#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="components/pages/homePage/HomePage#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="components/pages/homePage/HomePage#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>

                <div className="col-md-4 offset-md-2 position-absolute top-50 start-50 translate-middle logo">
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className="loading">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

        </section>
    )

}

export default HomePage;
