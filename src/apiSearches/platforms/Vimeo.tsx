import {ApiSearch} from "../specificSearches/ApiSearch";
import { Platform } from "./Platform";

class Vimeo extends Platform{

    public getDropdownButtonIcon() {
        return <i className='bx bxl-vimeo h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-info";
    }

    public getName() {
        return "Vimeo";
    }

    public getColorClass() {
        return "vimeo";
    }

}

export default Vimeo;
