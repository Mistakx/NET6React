import ReactPlayer from "react-player";
import {MultiPlatformPlayerProperties} from "../../models/components/players/MultiPlatformPlayerProperties";

export function MultiPlatformPlayer(props: MultiPlatformPlayerProperties): JSX.Element {

    return (
        <ReactPlayer
            config={{vimeo: {playerOptions: {transparent: false}}}}
            url={props.currentResult.platformPlayerUrl + props.currentResult.platformId}
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