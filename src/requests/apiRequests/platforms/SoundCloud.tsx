import {Platform} from "./Platform";

class SoundCloud extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx bxl-soundcloud h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-soundCloud";
    }

    public getName() {
        return "SoundCloud";
    }

    public getColorClass() {
        return "soundCloud";
    }

}

export default SoundCloud;