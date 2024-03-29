import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";

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

    followersAmount?: number

    owner?: UserProfileDto
}



