import '../../../styles/style.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faVimeoV,
    faSpotify,
    faSoundcloud,
    faMixcloud,
    faDailymotion,
    faTwitch
} from "@fortawesome/free-brands-svg-icons";
import {faRadio, faPodcast} from "@fortawesome/free-solid-svg-icons";

function HomePage(): JSX.Element {

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (

        <section id="hero" className="d-flex flex-column justify-content-center">

            <div className="container-fluid" data-aos="zoom-in" data-aos-delay="100">
                <div className="row text-center">
                    <div className="col-lg-10">

                        <h1>No Name app</h1>
                        <div className="typed"></div>
                        <button className="btn btn-lg btn-secondary">Login</button>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-10 offset-1">
                        <div className="row">
                            <div className="col-lg-1">
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faYoutube} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faVimeoV} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faSpotify} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faSoundcloud} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faMixcloud} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faDailymotion} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faTwitch} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faRadio} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                                
                                <FontAwesomeIcon icon={faPodcast} size={"4x"}/>
                                    
                            </div>
                            <div className="col-lg-1">
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )

}

export default HomePage;
