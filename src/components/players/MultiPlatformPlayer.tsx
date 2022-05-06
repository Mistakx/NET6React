import ReactPlayer from "react-player";
import {MultiPlatformPlayerProperties} from "../../models/components/players/MultiPlatformPlayerProperties";

export function MultiPlatformPlayer(props: MultiPlatformPlayerProperties): JSX.Element {

    return (
        <ReactPlayer
            config={{vimeo: {playerOptions: {transparent: false}}}}
            url={props.playerUrl + props.contentId}
            playing={true}
            controls={true}
            pip={true}
            width={"100%"}
            height={"100%"}
            onReady={() => {
                props.setPlayerStarted(true)
            }}
        />
    )

}