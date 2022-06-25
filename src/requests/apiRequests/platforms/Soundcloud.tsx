import {Platform} from "./Platform";

class Soundcloud extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx bxl-soundcloud h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-soundCloud";
    }

    public getName() {
        return "Soundcloud";
    }

    public getColorClass() {
        return "soundCloud";
    }

}

export default Soundcloud;