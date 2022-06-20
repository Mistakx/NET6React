import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";

export function comparePlaylistTitle(a: PlaylistDto, b: PlaylistDto) {
    return (a.title.localeCompare(b.title));
}

export function comparePlaylistWeeklyViews(a: PlaylistDto, b: PlaylistDto) {
    return (b.weeklyViewsAmount! - a.weeklyViewsAmount!);
}

export function comparePlaylistTotalViews(a: PlaylistDto, b: PlaylistDto) {
    return (b.totalViewsAmount! - a.totalViewsAmount!);
}

export function comparePlaylistResultsAmount(a: PlaylistDto, b: PlaylistDto) {
    return (b.resultsAmount! - a.resultsAmount!);
}

export type PlaylistSortingOptions = "Custom Order" | "Order by Title" | "Order by Weekly Views" | "Order by Total Views" | "Order by Items Amount"