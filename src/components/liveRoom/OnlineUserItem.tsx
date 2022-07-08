import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {OnlineUserItemProperties} from "models/components/liveRoom/OnlineUserItemProperties";
import {useNavigate} from "react-router-dom";
import {faPlay} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GlobalPlayerStore from "../../stores/players/GlobalPlayerStore";

function OnlineUserItem(props: OnlineUserItemProperties): JSX.Element {

    const navigate = useNavigate();

    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const globalPlayerCurrentResult = GlobalPlayerStore(state => state.globalPlayerCurrentResult)

    useEffect(() => {
        AOS.init();
    }, []);

    let currentlyPlaying
    if (props.currentlyPlaying) {
        currentlyPlaying = <p className="mb-1">{props.currentlyPlaying.title + " - " + props.currentlyPlaying?.platformName}</p>
    } else {
        currentlyPlaying = <p className="mb-1">Not currently playing content</p>
    }

    return (
        <div className="list-group clickable" onClick={() => {
            navigate(`/user/${props.basicUserDetails.username}`)
        }}>
            <a className="list-group-item list-group-item-action" aria-current="true" data-aos="fade-left"
               data-aos-duration="500">
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
                            <h5 className="mb-1"> {props.basicUserDetails.username} </h5>
                            {/*<small>3 days ago</small>*/}
                        </div>
                        <div className={"row"}>
                            <div className={"col-1"} onClick={
                                (e) => {
                                    e.stopPropagation()
                                    setGlobalPlayerCurrentResult(props.currentlyPlaying)
                                }
                            }>
                                <FontAwesomeIcon icon={faPlay} className="mr-2"/>
                            </div>
                            <div className={"col"}>
                                {currentlyPlaying}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default OnlineUserItem;