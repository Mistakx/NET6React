export interface PlaylistTopBarState {

    order: "Custom Order" | "Order by Title" | "Order by Creator"
    setOrder: (order: "Custom Order" | "Order by Title" | "Order by Creator") => void

}
