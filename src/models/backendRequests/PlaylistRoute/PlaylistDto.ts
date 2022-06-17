// /User/Playlists/{userId}
import {UserProfileDto} from "../UserRoute/UserProfileDto";

export interface PlaylistDto {
    id: string
    title: string
    description: string
    thumbnailUrl: string
    resultsAmount: number
    visibility?: "Public" | "Private"
    weeklyViewsAmount?: number
    totalViewsAmount?: number
    followed?: boolean
    owner: UserProfileDto
}



