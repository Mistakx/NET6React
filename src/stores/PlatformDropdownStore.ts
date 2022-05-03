import create from 'zustand'
import {PlatformDropdownState} from "../models/states/PlatformDropdownState";

const PlatformDropdown = create<PlatformDropdownState>((set) => ({

    platformDropdownList: "dropdown-menu dropdown-menu-dark align-items-center bg-dark",
    setPlatformDropdownList: (platformDropdownList) => set(state => ({
        platformDropdownList: platformDropdownList
    }))

}))


export default PlatformDropdown;

