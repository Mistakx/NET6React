export interface UserProfileDto {
    name: string
    username: string
    profilePhotoUrl: string
    email?: string
    weeklyViewsAmount?: number
    totalViewsAmount?: number
    followed?: boolean
}


