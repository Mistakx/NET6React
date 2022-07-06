import {Platform} from "./Platform";

class Radio extends Platform {

    public getDropdownButtonIcon(){
        return <i className='bx radio h3'></i>;
    }

    public getDropdownButtonClass() {
        return "btn-radio";
    }

    public getName() {
        return "Radio";
    }

    public getColorClass() {
        return "radio";
    }

}

export default Radio;