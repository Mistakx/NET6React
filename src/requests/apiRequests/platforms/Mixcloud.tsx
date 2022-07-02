import {Platform} from "./Platform";

class Mixcloud extends Platform {

    public getDropdownButtonIcon(){
        return <i className="fa-brands fa-mixcloud h3"></i>;
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