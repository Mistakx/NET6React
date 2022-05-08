import '../../styles/Login.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PlaylistPage(): JSX.Element {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (

        <section id="hero" className="d-flex flex-column justify-content-center position-relative login">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                
                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <h1>Login</h1>
                        <div className="form-wrapper mt-5">
                            <div className="form-group" data-aos="zoom-in" data-aos-delay="100">
                                <input type="text" className="form-control form-control-lg" placeholder="Email"/>
                            </div>
                            <div className="form-group" data-aos="zoom-in" data-aos-delay="200">
                                <input type="text" className="form-control form-control-lg" placeholder="Password"/>
                            </div>
                            <div className="form-group d-grid" data-aos="zoom-in" data-aos-delay="400">
                                <button className="btn btn-light">Validar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )

}

export default PlaylistPage;
