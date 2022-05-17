import React from "react";
import '../../styles/style.css';
import "aos/dist/aos.css";

function SuccessAlert(): JSX.Element {

    return (

        <div className="toast align-items-center show bg-success position-absolute top-0 end-0 m-5" role="alert" aria-live="assertive" aria-atomic="true" data-aos="fade-left" data-aos-duration="500">
            <div className="d-flex">
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
                <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>

    )

}

export default SuccessAlert;
