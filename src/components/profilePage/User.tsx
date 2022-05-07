import React, {useEffect} from 'react';
import '../../styles/style.css';
import axios from "axios";
import {UserProfile} from "../../models/backendSearches/UserProfile";
import {UserProperties} from "../../models/components/profilePage/UserProperties";

// https://mocah.org/thumbs/4556157-elliot-mr-robot-mr.-robot-tv-hacking-text.jpg
// https://image.api.playstation.com/vulcan/img/rnd/202109/0114/ql9sjqcZguB1Iz0LUJcKN3yG.png
function User(props: UserProperties): JSX.Element {




    return (
        <div className="col-md-4">

            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue rounded">
                    <h4 className="text-white">{props.name}</h4>
                    <img src="https://localhost:7007/ProfilePhoto/d5479e76-2e7b-412b-80e5-3d0f810f7014.jpg"
                         alt=""
                         className="img-fluid rounded-circle img-centered"/>
                </div>
            </div>
        </div>
    )

}

export default User