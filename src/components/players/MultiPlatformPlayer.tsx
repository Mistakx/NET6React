import ReactPlayer from "react-player";
import {MultiPlatformPlayerProperties} from "../../models/components/players/MultiPlatformPlayerProperties";

export function MultiPlatformPlayer(props: MultiPlatformPlayerProperties): JSX.Element {

    return (
        <ReactPlayer url={props.playerUrl + props.contentId} playing={true} controls={true} pip={true} width={props.width} heigth={props.height}/>
    )

}