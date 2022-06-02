import React from "react";
import {MultiPlatformPlayer} from "./MultiPlatformPlayer";
import {GeneralizedResult} from "../../models/apiRequests/GenericResults";
import {TwitchClipPlayer} from "./TwitchClipPlayer";
import {SpotifyPlayer} from "./SpotifyPlayer";

export class PlayerFactory {

    public static createPlayer(item: GeneralizedResult, setPlayerStarted: React.Dispatch<React.SetStateAction<boolean>>) {

        switch (item.playerFactoryName) {

            case "MultiPlatformPlayerFactory":
                return <MultiPlatformPlayer
                    contentId={item.platformId}
                    playerUrl={item.platformPlayerUrl as string}
                    setPlayerStarted={setPlayerStarted}
                />

            case "TwitchClipPlayerFactory":
                return <TwitchClipPlayer
                    contentId={item.platformId}
                    setPlayerStarted={setPlayerStarted}
                />;

            case "SpotifyPlayerFactory":
                return <SpotifyPlayer
                    contentId={item.platformId}
                    thumbnailUrl={item.thumbnailUrl}
                    setPlayerStarted={setPlayerStarted}
                />;


        }


    }

}