import { Platform } from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export class YouTube extends Platform{

    public getDropdownButtonIcon() {
        return <FontAwesomeIcon icon={faYoutube} size={"lg"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-youtube";
    }

    public getName() {
        return "YouTube";
    }

    public getColorClass() {
        return "youtube";
    }


}

export default YouTube;