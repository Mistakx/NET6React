import ReactPlayer from "react-player";
import {MultiPlatformPlayerProperties} from "../../models/components/players/MultiPlatformPlayerProperties";

export function MultiPlatformPlayer(props: MultiPlatformPlayerProperties): JSX.Element {
    
    let url;
    if (props.currentResult.platformPlayerUrl?.includes("soundcloud") || props.currentResult.platformPlayerUrl?.includes("dailymotion")) {
        url = props.currentResult.platformPlayerUrl
    }
    else if(props.currentResult.platformName?.includes("Radio")){
        url = "https://radio.garden/api/ara/content/listen/" + props.currentResult.platformPlayerUrl?.substr(-8) + "/channel.mp3"
    }
    
    else {
        url = props.currentResult.platformPlayerUrl + props.currentResult.platformId
    }
    
    
    return (
        
        <div style={{
            width: "100%",
            height: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: "url(" + props.currentResult.thumbnailUrl + ")",
        }}>
        
        
        <ReactPlayer
            config={{vimeo: {playerOptions: {transparent: false}}}}
            url={url}
            playing={true}
            controls={true}
            pip={true}
            width={"100%"}
            height={"100%"}
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