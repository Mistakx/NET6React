import {PlayerBuilder} from "./PlayerBuilder";
import React from "react";
import {MultiPlatformPlayerComponent} from "../components/players/MultiPlatformPlayerComponent";

export class MultiPlatformPlayer extends PlayerBuilder {

    public buildComponent(clipId: string, width: number, height: number, platformPlayerUrl: string): JSX.Element {

        return <MultiPlatformPlayerComponent contentId={clipId} width={width} height={height} playerUrl={platformPlayerUrl}/>

    }

}