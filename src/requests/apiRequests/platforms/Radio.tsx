import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRadio} from "@fortawesome/free-solid-svg-icons";
import React from "react";

class Radio extends Platform {

    public getDropdownButtonIcon(){
        return <FontAwesomeIcon icon={faRadio} size={"lg"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-radio";
    }

    public getName() {
        return "Radio";
    }

    public getColorClass() {
        return "radio";
    }

}

export default Radio;