import {GenericVideoResult} from "../../apiRequests/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";

export interface VideoSearchItemProperties {
    item: GenericVideoResult
    playerCreator: PlayerCreator
}