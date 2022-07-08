import {PlaylistSortingOptions} from "../../../utils/sorting/playlistSorting";
import {UsernameSortingOptions} from "../../../utils/sorting/userSorting";

export interface TrendingTopBarState {

    showing: "Monthly" | "Weekly" | "Daily"
    setShowing: (show: "Monthly" | "Weekly" | "Daily") => void

}
