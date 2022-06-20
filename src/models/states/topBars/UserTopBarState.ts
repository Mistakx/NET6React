import {PlaylistSortingOptions} from "../../../utils/sorting/playlistSorting";

export interface UserTopBarState {

    order: PlaylistSortingOptions
    setOrder: (order: PlaylistSortingOptions) => void

}
