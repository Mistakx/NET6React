export interface UserProfileDto {
    username: string
    name?: string
    email?: string
    profilePhotoUrl: string

    viewablePlaylistsAmount?: number
    playlistsWeeklyViewsAmount?: number
    playlistsTotalViewsAmount?: number
    playlistsContentAmount?: number

    weeklyViewsAmount?: number
    totalViewsAmount?: number

    followersAmount?: number
    followingUsersAmount?: number
    followingPlaylistsAmount?: number

    followed?: boolean
}


