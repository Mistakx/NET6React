import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Facebook extends Platform {

    public getDropdownButtonIcon(){
        return <FontAwesomeIcon icon={faFacebook} size={"lg"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-facebook";
    }

    public getName() {
        return "Facebook";
    }

    public getColorClass() {
        return "facebook";
    }

}

export default Facebook;