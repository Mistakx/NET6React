import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Mixcloud extends Platform {

    public getDropdownButtonIcon(){
        return <FontAwesomeIcon icon={faMixcloud} size={"2x"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-mixcloud";
    }

    public getName() {
        return "Mixcloud";
    }

    public getColorClass() {
        return "mixcloud";
    }

}

export default Mixcloud;