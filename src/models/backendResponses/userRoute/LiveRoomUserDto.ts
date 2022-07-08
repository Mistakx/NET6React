import {GeneralizedResult} from "../../apiResponses/GenericResults";
import {UserProfileDto} from "./UserProfileDto";

export interface LiveRoomUserDto {
    user: UserProfileDto;
    currentlyPlaying: GeneralizedResult | null;
}


