import create from 'zustand'
import {CommunityDropdownState} from "../../models/states/searches/CommunityDropdownState";

const CommunityDropdownStore = create<CommunityDropdownState>((set) => ({

    communityDropdownList: "dropdown-menu",
    setCommunityDropdownList: (communityDropdownList) => set(state => ({
        communityDropdownList: communityDropdownList
    }))

}))

export default CommunityDropdownStore;

