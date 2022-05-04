import {PlayerCreator} from "./PlayerCreator";
import {SpotifyPlayer} from "../components/players/SpotifyPlayer";
import React from "react";

export class SpotifyPlayerCreator extends PlayerCreator {

    public create(trackId: string, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>, trackThumbnailUrl: string): JSX.Element {

        return <SpotifyPlayer
            contentId={trackId}
            thumbnailUrl={trackThumbnailUrl}
            setPlayerStarted={setPlayerStarted}
        />;

    }

}