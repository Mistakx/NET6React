import {PlaylistSortingOptions} from "../../../utils/sorting/playlistSorting";
import {UserSortingOptions} from "../../../utils/sorting/userSorting";

export interface FollowedTopBarState {

    showing: "Playlists" | "Users"
    setShowing: (show: "Playlists" | "Users") => void

    userOrder: UserSortingOptions
    setUserOrder: (order: UserSortingOptions) => void

    playlistOrder: PlaylistSortingOptions
    setPlaylistOrder: (order: PlaylistSortingOptions) => void

}
