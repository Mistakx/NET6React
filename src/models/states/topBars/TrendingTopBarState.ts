import {PlaylistSortingOptions} from "../../../utils/sorting/playlistSorting";
import {UserSortingOptions} from "../../../utils/sorting/userSorting";

export interface TrendingTopBarState {

    showing: "Monthly" | "Weekly" | "Daily"
    setShowing: (show: "Monthly" | "Weekly" | "Daily") => void

}
