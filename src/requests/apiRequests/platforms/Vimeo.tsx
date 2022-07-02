import { Platform } from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVimeoV} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Vimeo extends Platform{

    public getDropdownButtonIcon() {
        return <FontAwesomeIcon icon={faVimeoV} size={"2x"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-vimeo";
    }

    public getName() {
        return "Vimeo";
    }

    public getColorClass() {
        return "vimeo";
    }

}

export default Vimeo;
