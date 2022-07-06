import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDailymotion} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Dailymotion extends Platform {

    public getDropdownButtonIcon() {
        return <FontAwesomeIcon icon={faDailymotion} size={"lg"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-dailymotion";
    }

    public getName() {
        return "Dailymotion";
    }

    public getColorClass() {
        return "dailymotion";
    }

}

export default Dailymotion;