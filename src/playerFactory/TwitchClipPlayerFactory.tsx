import {PlayerFactory} from "./PlayerFactory";
import React from "react";
import {TwitchClipPlayer} from "../components/players/TwitchClipPlayer";

export class TwitchClipPlayerFactory extends PlayerFactory {

    public create(clipId: string, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>): JSX.Element {

        return <TwitchClipPlayer
            contentId={clipId}
            setPlayerStarted={setPlayerStarted}
        />;

    }

}