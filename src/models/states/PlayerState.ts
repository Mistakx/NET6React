import {PlayerFactory} from "../../playerFactory/PlayerFactory";

export interface PlayerState {

    playingId: string | null
    setPlayingId: (playingId: string | null) => void
    playingThumbnailUrl: string | null
    setPlayingThumbnailUrl: (playingThumbnailUrl: string | null) => void
    playerCreator: PlayerFactory | null
    setPlayerCreator: (playerCreator: PlayerFactory | null) => void

}
