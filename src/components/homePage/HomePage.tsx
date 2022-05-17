import '../../styles/style.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const logo = require("../../assets/img/logo.PNG");

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
                <p><span className="typed"></span></p>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>

                <div className="col-md-4 offset-md-2 position-absolute top-50 start-50 translate-middle logo">
                    {/* <img src={logo} alt="" /> */}

                    <div className="row">
                        <div className="col-6 p-5 bg-danger">s</div>
                        <div className="col-6 p-5 bg-success">f</div>
                        <div className="col-6 p-5 bg-warning">f</div>
                        <div className="col-6 p-5 bg-primary">f</div>


                        
                    </div>

                </div>

            </div>

            <div className="toast align-items-center show bg-danger position-absolute top-0 end-0 m-5" role="alert" aria-live="assertive" aria-atomic="true" data-aos="fade-left" data-aos-duration="500">
                <div className="d-flex">
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>


        </section>
    )

}

export default HomePage;
