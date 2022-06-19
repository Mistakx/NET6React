export interface FollowedTopBarState {

    showing: "Playlists" | "Users"
    setShowing: (show: "Playlists" | "Users") => void

    userOrder: "Order By Custom" | "Order By Weekly Views" | "Order By Total Views"
    setUserOrder: (order: "Order By Custom" | "Order By Weekly Views" | "Order By Total Views") => void

    playlistOrder: "Order By Custom" | "Order By Weekly Views" | "Order By Total Views"
    setPlaylistOrder: (order: "Order By Custom" | "Order By Weekly Views" | "Order By Total Views") => void

}
