import {ApiSearch} from "../specificSearches/ApiSearch";
import {Platform} from "./Platform";

class Spotify extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx bxl-spotify h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-success";
    }

    public getName() {
        return "Spotify";
    }

    public getColorClass() {
        return "spotify";
    }


}

export default Spotify;