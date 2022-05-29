// /Playlist/create
export interface CreatePlaylist {
    title: string
    description: string
    visibility: "Public" | "Private"
    sessionToken: string
}

