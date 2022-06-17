export interface UserTopBarState {

    showing: "Custom Order" | "Order by Title" | "Order by Weekly Views" | "Order by Total Views" | "Order by Items Amount"
    setShowing: (show: "Custom Order" | "Order by Title") => void

}
