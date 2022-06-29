import {TwitchClipPlayerProperties} from "../../models/components/players/TwitchClipPlayerProperties";
import React from "react";

export function TwitchClipPlayer(props: TwitchClipPlayerProperties): JSX.Element {

    const parent = "&parent=" + process.env.REACT_APP_HOSTING_URL

    return (
        
        <iframe
            src={"https://clips.twitch.tv/embed?clip=" + props.currentResult.platformId + parent + "&autoplay=true"}
            frameBorder={0}
            allowFullScreen={true}
            scrolling={"no"}
            height={"100%"}
            width={"100%"}
            onEnded={() => {
                if (props.autoplay && props.results && props.setNextResult) {
                    let resultBeingPlayedIndex = 0;
                    for (let i = 0; i < props.results.length; i++) {
                        if (props.results[i] == props.currentResult) {
                            resultBeingPlayedIndex = i;
                            break;
                        }
                    }
                    props.setNextResult(props.results[resultBeingPlayedIndex + 1]);
                }
            }}
        />
    )

}