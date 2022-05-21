import React from "react";
import '../styles/style.css';
import "aos/dist/aos.css";
import AlertStore from "../stores/AlertStore";

function Alert(): JSX.Element {

    const showingAlert = AlertStore(state => state.showingAlert)
    const alertSucceeded = AlertStore(state => state.alertSucceeded)
    const setShowingAlert = AlertStore(state => state.setShowingAlert)
    const alertMessage = AlertStore(state => state.alertMessage)

    const alertColor = alertSucceeded ? 'bg-success' : 'bg-danger'

    let alert;
    if (showingAlert) {
        alert =

            <div className="row text-center no-gutters position-absolute top-0 end-0 m-5"
                 style={{overflowX: "hidden"}}>

                <div style={{zIndex: 1070}}
                     className={"toast align-items-center show " + alertColor}
                     data-aos="fade-left" data-aos-duration="500">
                    <div className="d-flex">
                        <div className="toast-body">
                            {alertMessage}
                        </div>
                        <button type="button" className="btn-close me-2 m-auto"
                                aria-label="Close"
                                onClick={() => setShowingAlert(false)}
                        >
                        </button>
                    </div>
                </div>

            </div>
        setTimeout(() => {
            setShowingAlert(false)
        }, 2500)
    }

    return (

        <div>
            {alert}
        </div>
    )

}

export default Alert;
