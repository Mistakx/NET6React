import {PlayerCreator} from "./PlayerCreator";
import React from "react";
import {TwitchClipPlayer} from "../components/players/TwitchClipPlayer";

export class TwitchClipPlayerCreator extends PlayerCreator {

    public create(clipId: string, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>): JSX.Element {

        return <TwitchClipPlayer
            contentId={clipId}
            setPlayerStarted={setPlayerStarted}
        />;

    }

}