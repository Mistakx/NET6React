import {SpotifyPlayerProperties} from "../../models/components/players/SpotifyPlayerProperties";

export function SpotifyPlayer(props: SpotifyPlayerProperties): JSX.Element {

    return (

        <div style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url(" + props.thumbnailUrl + ")",
        }}>

            <iframe
                style={{position: "absolute", bottom:0}}
                src={"https://open.spotify.com/embed/track/" + props.contentId + "?utm_source=generator"}
                width="100.1%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                onLoad={() => {
                    props.setPlayerStarted(true)
                }}
            />


        </div>
    )

}