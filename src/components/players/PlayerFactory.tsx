import React from "react";
import {MultiPlatformPlayer} from "./MultiPlatformPlayer";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";
import {TwitchClipPlayer} from "./TwitchClipPlayer";
import {SpotifyPlayer} from "./SpotifyPlayer";
import RecommendationRequests from "../../requests/backendRequests/RecommendationRequests";
import {MixcloudPlayer} from "./MixcloudPlayer";

export class PlayerFactory {

    public static createPlayer(item: GeneralizedResult,
                               setNextItem: (playlistPlayerCurrentResult: (GeneralizedResult | null)) => void,
                               autoplay: boolean,
                               items?: GeneralizedResult[] | null) {

        const sessionToken = localStorage.getItem("sessionToken");

        if (sessionToken) {
            RecommendationRequests.saveContentView(item, sessionToken)
        }

        switch (item.playerFactoryName) {

            case "MultiPlatformPlayerFactory":
                return <MultiPlatformPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                    autoplay={autoplay}
                />;

            case "TwitchClipPlayerFactory":
                return <TwitchClipPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                    autoplay={autoplay}
                />;

            case "SpotifyPlayerFactory":
                return <SpotifyPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                    autoplay={autoplay}
                />;

            case "MixcloudPlayerFactory":
                return <MixcloudPlayer
                    currentResult={item}
                    results={items}
                    setNextResult={setNextItem}
                    autoplay={autoplay}
                />;



        }


    }

}