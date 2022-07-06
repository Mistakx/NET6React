import {MixcloudPlayerProperties} from "../../models/components/players/MixcloudPlayerProperties";

export function MixcloudPlayer(props: MixcloudPlayerProperties): JSX.Element {

    return (

        <div style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url(" + props.currentResult.thumbnailUrl + ")",
        }}>

            <iframe
                style={{position: "absolute", bottom: 0}}
                src={"https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&autoplay=1&feed=%2F" + props.currentResult.creator + "%2F" + props.currentResult.platformId + "%2F"}
                width="100%"
                height="120"
                frameBorder="0"
                allow="autoplay"
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

        </div>
    )

}