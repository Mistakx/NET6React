import React from "react";
import {MultiPlatformPlayer} from "./MultiPlatformPlayer";
import {GenericResult} from "../../models/apiRequests/GenericResults";
import {TwitchClipPlayer} from "./TwitchClipPlayer";
import {SpotifyPlayer} from "./SpotifyPlayer";

export class PlayerFactory {

    public static createPlayer(item: GenericResult, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>) {

        switch (item.playerFactoryName) {

            case "MultiPlatformPlayerFactory":
                return <MultiPlatformPlayer
                    contentId={item.id}
                    playerUrl={item.platformPlayerUrl as string}
                    setPlayerStarted={setPlayerStarted}
                />

            case "TwitchClipPlayerFactory":
                return <TwitchClipPlayer
                    contentId={item.id}
                    setPlayerStarted={setPlayerStarted}
                />;

            case "SpotifyPlayerFactory":
                return <SpotifyPlayer
                    contentId={item.id}
                    thumbnailUrl={item.thumbnailUrl}
                    setPlayerStarted={setPlayerStarted}
                />;


        }


    }

}