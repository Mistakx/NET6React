import React from "react";
import {MultiPlatformPlayer} from "./MultiPlatformPlayer";
import {GeneralizedResult} from "../../models/apiRequests/GenericResults";
import {TwitchClipPlayer} from "./TwitchClipPlayer";
import {SpotifyPlayer} from "./SpotifyPlayer";

export class PlayerFactory {

    public static createPlayer(item: GeneralizedResult,
                               items: GeneralizedResult[],
                               setNextItem: (playlistPlayerCurrentResult: (GeneralizedResult | null)) => void)
    {

        switch (item.playerFactoryName) {

            case "MultiPlatformPlayerFactory":
                return <MultiPlatformPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                />

            case "TwitchClipPlayerFactory":
                return <TwitchClipPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                />;

            case "SpotifyPlayerFactory":
                return <SpotifyPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                />;


        }


    }

}