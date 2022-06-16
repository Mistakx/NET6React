// /User/Profile/{profileId}
export interface UserProfileResponseDto {
    name: string
    username: string
    profilePhotoUrl: string
    email?: string
    weeklyViewsAmount?: number
    totalViewsAmount?: number
}


