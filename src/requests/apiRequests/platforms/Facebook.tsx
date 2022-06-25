import {Platform} from "./Platform";

class Facebook extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx bxl-facebook h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-facebook";
    }

    public getName() {
        return "Facebook";
    }

    public getColorClass() {
        return "facebook";
    }

}

export default Facebook;