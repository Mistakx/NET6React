import {SpotifyPlayerProperties} from "../../models/components/players/SpotifyPlayerProperties";

export function SpotifyPlayer(props: SpotifyPlayerProperties): JSX.Element {

    return (

        <div style={{
            backgroundSize: "cover",
            backgroundImage: "url(" + props.thumbnailUrl + ")",
        }}>

            <iframe style={{position: "relative", top: (props.width - 80) + "px"}}
                    src={"https://open.spotify.com/embed/track/" + props.contentId + "?utm_source=generator"}
                    width="100.1%" height="80" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>

        </div>
    )

}