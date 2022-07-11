import create from 'zustand'
import {TrendingTopBarState} from "../../models/states/topBars/TrendingTopBarState";

const TrendingTopBarStore = create<TrendingTopBarState>((set) => ({

    showing: "Weekly",
    setShowing: (showing) => set(state => ({
        showing: showing
    }))

}))

export default TrendingTopBarStore;

