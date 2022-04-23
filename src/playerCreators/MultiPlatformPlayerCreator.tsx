import {PlayerCreator} from "./PlayerCreator";
import React from "react";
import {MultiPlatformPlayerComponent} from "../components/players/MultiPlatformPlayerComponent";

export class MultiPlatformPlayerCreator extends PlayerCreator {

    public create(clipId: string, width: number, height: number, platformPlayerUrl: string): JSX.Element {

        return <MultiPlatformPlayerComponent contentId={clipId} width={width} height={height} playerUrl={platformPlayerUrl}/>

    }

}