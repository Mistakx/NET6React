import {ApiSearch} from "../specificSearches/ApiSearch";
import { Platform } from "./Platform";

class Vimeo extends Platform{

    public getDropdownButtonIcon() {
        return <i className='bx bxl-vimeo h3'></i>;
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
