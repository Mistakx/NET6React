import {PlayerCreator} from "./PlayerCreator";
import React from "react";
import {TwitchClipComponent} from "../components/players/TwitchClipComponent";

export class TwitchClipPlayerCreator extends PlayerCreator {

    public create(clipId: string, width: number, height: number): JSX.Element {

        return <TwitchClipComponent contentId={clipId} width={width} height={height}/>;

    }

}