export interface UserTopBarState {

    order: "Custom Order" | "Order by Title" | "Order by Weekly Views" | "Order by Total Views" | "Order by Items Amount"
    setOrder: (show: "Custom Order" | "Order by Title") => void

}
