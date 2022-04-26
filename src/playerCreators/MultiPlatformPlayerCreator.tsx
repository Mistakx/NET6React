import {PlayerCreator} from "./PlayerCreator";
import React from "react";
import {MultiPlatformPlayer} from "../components/players/MultiPlatformPlayer";

export class MultiPlatformPlayerCreator extends PlayerCreator {

    public create(clipId: string): JSX.Element {

        if (super.getPlatformPlayerUrl()) {
            return <MultiPlatformPlayer
                contentId={clipId}
                width={super.getPlayerWidth()}
                height={super.getPlayerHeight()}
                playerUrl={super.getPlatformPlayerUrl() as string}/>
        }

        return <div>Error with Multi Platform Player URL</div>


    }

}