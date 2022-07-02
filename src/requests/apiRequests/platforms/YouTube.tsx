import { Platform } from "./Platform";

export class YouTube extends Platform{

    public getDropdownButtonIcon() {
        return <i className='fa-brands fa-youtube h3'/>;
    }

    public getDropdownButtonClass() {
        return "btn-youtube";
    }

    public getName() {
        return "YouTube";
    }

    public getColorClass() {
        return "youtube";
    }


}

export default YouTube;