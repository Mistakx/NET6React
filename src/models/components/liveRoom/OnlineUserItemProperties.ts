import { UserProfileDto } from "models/backendResponses/userRoute/UserProfileDto";

export interface OnlineUserItemProperties {
    basicUserDetails: UserProfileDto, 
    currentPlaying?: string | null
}