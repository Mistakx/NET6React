import {Platform} from "./Platform";

class Twitch extends Platform {

    public getDropdownButtonIcon() {
        return <i className='bx bxl-twitch h3'></i>
    }

    public getDropdownButtonClass() {
        return "btn-twitch";
    }

    public getName() {
        return "Twitch";
    }

    public getColorClass() {
        return "twitch";
    }

}

export default Twitch;
