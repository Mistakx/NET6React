import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {useNavigate} from "react-router-dom";

function LiveRoom(): JSX.Element {

    useEffect(() => {
        AOS.init();
    }, []);

    const navigate = useNavigate();

    let liveRoom;
    if (localStorage.getItem("sessionToken")) {
        liveRoom = 
            

                <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Live Room</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">

                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action" aria-current="true" data-aos="fade-left" data-aos-duration="3000">
                                <div className="row">

                                    <div className="col-3">

                                        <div className="image_outer_container">
                                            <div className="green_icon"></div>
                                            <div className="image_inner_container">
                                                <img className="img-fluid" src="https://i.pinimg.com/originals/43/96/61/439661dcc0d410d476d6d421b1812540.jpg"/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Nome utilizador</h5>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">Fazendo o que?.</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>

    }

    return (

        <div className="position-relative">
            <div className="live-room">
                <a className="intro-banner-vdo-play-btn green-sinal" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" title="See people online">
                    <i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
                    <span className="ripple green-sinal"></span>
                    <span className="ripple green-sinal"></span>
                    <span className="ripple green-sinal"></span>
                </a>
            </div>
            {liveRoom}
        </div>

    )

}

export default LiveRoom;


