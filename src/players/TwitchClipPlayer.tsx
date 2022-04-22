import {PlayerBuilder} from "./PlayerBuilder";
import React from "react";
import {TwitchClipComponent} from "../components/players/TwitchClipComponent";

export class TwitchClipPlayer extends PlayerBuilder {

    public buildComponent(clipId: string, width: number, height: number): JSX.Element {

        return <TwitchClipComponent contentId={clipId} width={width} height={height}/>;

    }

}