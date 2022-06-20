import {PlaylistSortingOptions} from "../../../utils/sorting/playlistSorting";
import {UsernameSortingOptions} from "../../../utils/sorting/userSorting";

export interface FollowedTopBarState {

    showing: "Playlists" | "Users"
    setShowing: (show: "Playlists" | "Users") => void

    userOrder: UsernameSortingOptions
    setUserOrder: (order: UsernameSortingOptions) => void

    playlistOrder: PlaylistSortingOptions
    setPlaylistOrder: (order: PlaylistSortingOptions) => void

}
