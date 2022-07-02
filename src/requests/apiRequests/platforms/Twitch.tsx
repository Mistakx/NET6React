import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Twitch extends Platform {

    public getDropdownButtonIcon() {
        return <FontAwesomeIcon icon={faTwitch} size={"2x"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-twitch";
    }

    public getName() {
        return "Twitch";
    }

    public getColorClass() {
        return "twitch";
    }

}

export default Twitch;
