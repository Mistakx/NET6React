import '../../../styles/style.css';
import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
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

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className="position-relative">
            
        <section id="hero" className="d-flex flex-column justify-content-center">

            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h1 data-aos="zoom-in-down" data-aos-delay="100">Orion</h1>
                    </div>
                </div>
                <div className="d-none d-sm-block">
                    
                    <div className="row text-center mt-5">
                        <div className="col-12">
                            
                            <div className="d-inline p-2 text-youtube" data-aos="zoom-out-up" data-aos-delay="200">
                                <FontAwesomeIcon icon={faYoutube} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-vimeo" data-aos="zoom-out-up" data-aos-delay="300">
                                <FontAwesomeIcon icon={faVimeoV} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-spotify" data-aos="zoom-out-up" data-aos-delay="400">
                                <FontAwesomeIcon icon={faSpotify} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-soundCloud" data-aos="zoom-out-up" data-aos-delay="500">
                                <FontAwesomeIcon icon={faSoundcloud} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-mixcloud" data-aos="zoom-out-up" data-aos-delay="600">
                                <FontAwesomeIcon icon={faMixcloud} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-dailymotion" data-aos="zoom-out-up" data-aos-delay="700">
                                <FontAwesomeIcon icon={faDailymotion} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-twitch" data-aos="zoom-out-up" data-aos-delay="800">
                                <FontAwesomeIcon icon={faTwitch} size={"4x"}/>    
                            </div>
                            <div className="d-inline p-2 text-radio" data-aos="zoom-out-up" data-aos-delay="900">
                                <FontAwesomeIcon icon={faRadio} size={"4x"}/>
                            </div>
                            <div className="d-inline p-2 text-orion" data-aos="zoom-out-up" data-aos-delay="1000">
                                <FontAwesomeIcon icon={faPodcast} size={"4x"}/>    
                            </div>
                        </div> 
                    </div> 
                </div>
                
                {/* <div className="position-absolute bottom-0 start-50 translate-middle-x"> */}
                    <div className="b-block text-center pt-5">

                        <button className="btn btn-lg btn-link" data-aos="zoom-in" data-aos-delay="200"
                            onClick={() => {
                                navigate('/');
                            }}>Login
                        </button>/
                        <button className="btn btn-lg btn-link" data-aos="zoom-in" data-aos-delay="200"
                            onClick={() => {
                                navigate('/register');
                            }}>Sign in
                        </button>
                    </div>
                {/* </div> */}
            </div>
        </section>
        </div>
    )

}

export default HomePage;
