import {Platform} from "./Platform";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import React from "react";

class Spotify extends Platform {

    public getDropdownButtonIcon(){
        return <FontAwesomeIcon icon={faSpotify} size={"2x"}/>;
    }

    public getDropdownButtonClass() {
        return "btn-spotify";
    }

    public getName() {
        return "Spotify";
    }

    public getColorClass() {
        return "spotify";
    }


}

export default Spotify;