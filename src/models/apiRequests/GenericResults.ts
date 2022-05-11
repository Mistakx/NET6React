/**
 * A platform-agnostic result, with no API specific details.
 */
import {PlayerFactory} from "../../playerFactory/PlayerFactory";

export interface GenericResult {
    interface: string
    id: string
    title: string
    // createdAt: string
    thumbnailUrl: string
    creator: string
    playerFactory: PlayerFactory
}

/**
 * A platform-agnostic video result, with no API specific details.
 */
export interface GenericVideoResult extends GenericResult {
    interface: "GenericVideoResult"
    // durationInSeconds: number
    // views: number
}

/**
 * A platform-agnostic track result, with no API specific details.
 */
export interface GenericTrackResult extends GenericResult {
    interface: "GenericTrackResult"
    duration: number
    albumName: string
}

/**
 * A platform-agnostic livestream result, with no API specific details.
 */
export interface GenericLivestreamResult extends GenericResult{
    interface: "GenericLivestreamResult"
    gameName: string // Name of the game being played on the stream.
}