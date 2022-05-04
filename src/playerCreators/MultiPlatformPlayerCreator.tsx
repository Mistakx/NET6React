import {PlayerCreator} from "./PlayerCreator";
import React from "react";
import {MultiPlatformPlayer} from "../components/players/MultiPlatformPlayer";

export class MultiPlatformPlayerCreator extends PlayerCreator {

    public create(clipId: string, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>) {

        return <MultiPlatformPlayer
            contentId={clipId}
            playerUrl={super.getPlatformPlayerUrl() as string}
            setPlayerStarted={setPlayerStarted}
        />
    }

}