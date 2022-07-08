import { UserProfileDto } from "models/backendResponses/userRoute/UserProfileDto";
import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface OnlineUserItemProperties {
    basicUserDetails: UserProfileDto, 
    currentlyPlaying: GeneralizedResult | null
}