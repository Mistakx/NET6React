import create from 'zustand'
import {PlatformDropdownState} from "../models/states/PlatformDropdownState";

const PlatformDropdown = create<PlatformDropdownState>((set) => ({

    platformDropdownList: "dropdown-menu",
    setPlatformDropdownList: (platformDropdownList) => set(state => ({
        platformDropdownList: platformDropdownList
    }))

}))


export default PlatformDropdown;

