import React from 'react';
import '../../styles/style.css';

// https://mocah.org/thumbs/4556157-elliot-mr-robot-mr.-robot-tv-hacking-text.jpg
// https://image.api.playstation.com/vulcan/img/rnd/202109/0114/ql9sjqcZguB1Iz0LUJcKN3yG.png
function User(): JSX.Element {

    return (
        <div className="col-md-4">

            <div className="align-items-stretch mb-4 " data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue rounded">
                    <h4 className="text-white">User name</h4>
                    <img src="https://image.api.playstation.com/vulcan/img/rnd/202109/0114/ql9sjqcZguB1Iz0LUJcKN3yG.png" alt=""
                         className="img-fluid rounded-circle img-centered"/>
                </div>
            </div>
        </div>
    )

}

export default User