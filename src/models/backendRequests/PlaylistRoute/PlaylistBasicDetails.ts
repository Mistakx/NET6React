// /User/Playlists/{userId}
export interface PlaylistBasicDetails {
    id: string
    title: string
    visibility: "Public" | "Private"
    creationDate: Date
    description: string
    thumbnailUrl: string
    resultsAmount: number
}



