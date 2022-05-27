import {GeneralizedResult} from "../../apiRequests/GenericResults";

export interface PlaylistItemDropdownProperties {
    genericResult: GeneralizedResult
    playlistId: string | undefined
}