// /Playlist/{playlistId}
import {UserProfile} from "./UserProfile";
import {GenericResult} from "../apiRequests/GenericResults";

export interface PlaylistDetails {
    id: string
    title: string
    owner: string
    visibility: string
    description: string
    creationDate: Date
    contents: GenericResult[]
    sharedWith: UserProfile[]
}



