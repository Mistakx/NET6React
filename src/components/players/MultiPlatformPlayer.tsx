import ReactPlayer from "react-player";
import {MultiPlatformPlayerProperties} from "../../models/components/players/MultiPlatformPlayerProperties";

export function MultiPlatformPlayer(props: MultiPlatformPlayerProperties): JSX.Element {

    console.log(props.currentResult.platformPlayerUrl)
    let url;
    if (props.currentResult.platformPlayerUrl?.includes("soundcloud") || props.currentResult.platformPlayerUrl?.includes("dailymotion")) {
        url = props.currentResult.platformPlayerUrl
        console.log(url)
    }
    
    else {
        url = props.currentResult.platformPlayerUrl + props.currentResult.platformId
        console.log(url)
    }
    
    
    
    return (
        <ReactPlayer
            config={{vimeo: {playerOptions: {transparent: false}}}}
            url={url}
            playing={true}
            controls={true}
            pip={true}
            width={"100%"}
            height={"100%"}
            onEnded={() => {
                let resultBeingPlayedIndex = 0;
                for (let i = 0; i < props.results.length; i++) {
                    if (props.results[i] == props.currentResult) {
                        resultBeingPlayedIndex = i;
                        break;
                    }
                }
                props.setNextResult(props.results[resultBeingPlayedIndex + 1]);
            }}
        />
    )

}