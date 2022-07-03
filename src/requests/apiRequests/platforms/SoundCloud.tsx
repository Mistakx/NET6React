import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class SoundCloud extends Platform {

    public getDropdownButtonIcon(){
        return <FontAwesomeIcon icon={faSoundcloud} size={"lg"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-soundCloud";
    }

    public getName() {
        return "SoundCloud";
    }

    public getColorClass() {
        return "soundCloud";
    }

}

export default SoundCloud;