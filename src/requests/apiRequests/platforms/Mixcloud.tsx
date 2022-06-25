import {Platform} from "./Platform";

class Mixcloud extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx bxl-mixcloud h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-mixcloud";
    }

    public getName() {
        return "Mixcloud";
    }

    public getColorClass() {
        return "mixcloud";
    }

}

export default Mixcloud;