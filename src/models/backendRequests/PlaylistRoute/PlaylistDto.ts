// /User/Playlists/{userId}
export interface PlaylistDto {
    id: string
    title: string
    visibility: "Public" | "Private"
    creationDate: Date
    description: string
    thumbnailUrl: string
    resultsAmount: number
    weeklyViewsAmount: number
    totalViewsAmount: number
}



