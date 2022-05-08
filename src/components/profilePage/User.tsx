import React, {useEffect} from 'react';
import '../../styles/style.css';
import {UserProperties} from "../../models/components/profilePage/UserProperties";

// https://mocah.org/thumbs/4556157-elliot-mr-robot-mr.-robot-tv-hacking-text.jpg
// https://image.api.playstation.com/vulcan/img/rnd/202109/0114/ql9sjqcZguB1Iz0LUJcKN3yG.png
function User(props: UserProperties): JSX.Element {

    return (
        <div className="col-md-4 position-relative">
            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue rounded">
                    <h4 className="text-white">{props.name}</h4>
                    <img src="https://image.api.playstation.com/vulcan/img/rnd/202109/0114/ql9sjqcZguB1Iz0LUJcKN3yG.png"
                         alt=""
                         className="img-fluid rounded-circle img-centered"/>
                    <button className="btn rounded position-absolute top-50 start-50 translate-middle mt-5">
                        <i className='bx bx-camera'></i>
                    </button>
                </div>
                <div className="options-top mr-5 mb-5">
                    <button className="btn text-white">
                        <i className='bx bx-edit-alt'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User