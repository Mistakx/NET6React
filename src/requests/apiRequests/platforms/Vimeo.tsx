import { Platform } from "./Platform";

class Vimeo extends Platform{

    public getDropdownButtonIcon() {
        return <i className='fa-brands fa-vimeo-v h3'></i>;
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
