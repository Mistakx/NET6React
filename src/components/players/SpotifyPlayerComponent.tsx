import ReactPlayer from "react-player";
import {MultiPlatformPlayerProperties} from "../../models/components/players/MultiPlatformPlayerProperties";
import {SpotifyPlayerProperties} from "../../models/components/players/SpotifyPlayerProperties";

export function SpotifyPlayerComponent(props: SpotifyPlayerProperties): JSX.Element {

    const playerWidth = props.width + "px";
    const playerHeight = props.height + "px";

    return (

        <div style={{width: playerWidth, height: playerHeight}}>
            <iframe
                src={"https://open.spotify.com/embed/track/" + props.contentId + "?utm_source=generator"}
                width="100%" height="80" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>
    )

}