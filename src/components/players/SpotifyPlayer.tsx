import {SpotifyPlayerProperties} from "../../models/components/players/SpotifyPlayerProperties";

export function SpotifyPlayer(props: SpotifyPlayerProperties): JSX.Element {

    return (

        <div style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url(" + props.currentResult.thumbnailUrl + ")",
        }}>

            <iframe
                style={{position: "absolute", bottom:0}}
                src={"https://open.spotify.com/embed/track/" + props.currentResult.platformId + "?utm_source=generator"}
                width="100.1%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                onEnded={() => {
                    let resultBeingPlayedIndex = 0;
                    for (let i = 0; i < props.results.length; i++) {
                        if (props.results[i] == props.currentResult) {
                            resultBeingPlayedIndex = i;
                            break;
                        }
                    }
                    if (props.autoplay) props.setNextResult(props.results[resultBeingPlayedIndex + 1]);
                }}
            />


        </div>
    )

}