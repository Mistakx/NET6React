import React, {useEffect} from "react";
import '../styles/style.css';
import "aos/dist/aos.css";
import AlertStore from "../stores/AlertStore";

function Alert(): JSX.Element {

    const showingAlert = AlertStore(state => state.showingAlert)
    const alertSucceeded = AlertStore(state => state.alertSucceeded)
    const setShowingAlert = AlertStore(state => state.setShowingAlert)
    const setAlertMessage = AlertStore(state => state.setAlertMessage)
    const alertMessage = AlertStore(state => state.alertMessage)
    const [alertMessageBeingDisplayed, setAlertMessageBeingDisplayed] = React.useState<string | null>(null)

    const timeoutId = React.useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {

        if (alertMessage) {
            if (timeoutId.current) clearTimeout(timeoutId.current)
            setAlertMessageBeingDisplayed(alertMessage)
            setAlertMessage(null)
            timeoutId.current = setTimeout(() => {
                console.log("3000 ms have passed, resetting alert")
                setShowingAlert(false)
                setAlertMessageBeingDisplayed(null)
            }, 3000)
        }

    }, [alertMessage])

    const alertColor = alertSucceeded ? 'bg-success' : 'bg-danger'

    let alert;
    if (showingAlert && alertMessageBeingDisplayed) {
        alert =

            <div className="row text-center no-gutters position-absolute top-0 end-0 m-5"
                 style={{overflowX: "hidden"}}>

                <div style={{zIndex: 1070}}
                     className={"toast align-items-center show " + alertColor}
                     data-aos="fade-left" data-aos-duration="500">
                    <div className="d-flex">
                        <div className="toast-body">
                            {alertMessageBeingDisplayed}
                        </div>
                        <button type="button" className="btn-close me-2 m-auto"
                                aria-label="Close"
                                onClick={() => {
                                    setShowingAlert(false)
                                    setAlertMessage(null)
                                }}
                        >
                        </button>
                    </div>
                </div>

            </div>

    }

    return (

        <div>
            {alert}
        </div>
    )

}

export default Alert;
