import {TwitchClipPlayerProperties} from "../../models/components/players/TwitchClipPlayerProperties";
import React from "react";

export function TwitchClipPlayer(props: TwitchClipPlayerProperties): JSX.Element {

    const parent = "&parent=" + process.env.REACT_APP_HOSTING_URL

    return (

        <iframe
            src={"https://clips.twitch.tv/embed?clip=" + props.contentId + parent + "&autoplay=true"}
            frameBorder={0}
            allowFullScreen={true}
            scrolling={"no"}
            height={props.height}
            width={props.width}
        />
    )

}