import {PlayerCreator} from "./PlayerCreator";
import React from "react";
import {TwitchClipPlayer} from "../components/players/TwitchClipPlayer";

export class TwitchClipPlayerCreator extends PlayerCreator {

    public create(clipId: string): JSX.Element {

        return <TwitchClipPlayer contentId={clipId} width={super.getPlayerWidth()} height={super.getPlayerWidth()}/>;

    }

}