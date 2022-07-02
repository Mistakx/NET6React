import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {OnlineUserItemProperties} from "models/components/liveRoom/OnlineUserItemProperties";
import {useNavigate} from "react-router-dom";

function OnlineUserItem(props: OnlineUserItemProperties): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className="list-group" onClick={() => {
            navigate("/user/" + props.basicUserDetails.username)
        }}>
            <a href="" className="list-group-item list-group-item-action" aria-current="true" data-aos="fade-left"
               data-aos-duration="1000">
                <div className="row">

                    <div className="col-3">

                        <div className="image_outer_container">
                            <div className="green_icon"></div>
                            <div className="image_inner_container">
                                <img className="img-fluid" src={"/" + props.basicUserDetails.profilePhotoUrl}/>
                            </div>
                        </div>

                    </div>
                    <div className="col-9">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1"> {props.basicUserDetails.name} </h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">MDSMEUSENHORMEAJUDAPFV.</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default OnlineUserItem;