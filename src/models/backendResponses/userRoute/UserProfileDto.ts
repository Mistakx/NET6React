export interface UserProfileDto {
    username: string
    name?: string
    email?: string
    profilePhotoUrl: string

    weeklyViewsAmount?: number
    totalViewsAmount?: number

    playlistsAmount?: number
    playlistsWeeklyViewsAmount?: number
    playlistsTotalViewsAmount?: number
    playlistsContentAmount?: number

    followersAmount: number

    followed?: boolean
}


