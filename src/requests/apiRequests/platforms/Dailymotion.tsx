import {Platform} from "./Platform";

class Dailymotion extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx bxl-dailymotion h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-dailymotion";
    }

    public getName() {
        return "Dailymotion";
    }

    public getColorClass() {
        return "dailymotion";
    }

}

export default Dailymotion;