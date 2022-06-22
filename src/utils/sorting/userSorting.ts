import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";

export function compareUsername(a: UserProfileDto, b: UserProfileDto) {
    return (a.username.localeCompare(b.username));
}

export function compareUserWeeklyViews(a: UserProfileDto, b: UserProfileDto) {
    return (b.weeklyViewsAmount! - a.weeklyViewsAmount!);
}

export function compareUserTotalViews(a: UserProfileDto, b: UserProfileDto) {
    return (b.totalViewsAmount! - a.totalViewsAmount!);
}

export function compareUserPlaylistAmount(a: UserProfileDto, b: UserProfileDto) {
    return (b.viewablePlaylistsAmount! - a.viewablePlaylistsAmount!);
}

export type UsernameSortingOptions = "Custom Order" | "Order by Username" | "Order by Weekly Views" | "Order by Total Views" | "Order by Playlists Amount"