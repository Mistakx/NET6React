import React, {useEffect} from "react";
import '../../../../styles/style.css';
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../../models/components/pages/playlistPage/PlaylistItemProperties";
import PlaylistPagePlayerStore from "../../../../stores/players/PlaylistPagePlayerStore";
import GlobalPlayerStore from "../../../../stores/players/GlobalPlayerStore";
import PlaylistContentDropdown from "./PlaylistContentDropdown";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function PlaylistContentItem(props: PlaylistItemProperties): JSX.Element {

    const [itemSizeClass, setItemSizeClass] = React.useState<number>(12);

    const setPlayingGlobalGenericResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    const setPlaylistPlayerGeneralizedResult = PlaylistPagePlayerStore(state => state.setPlaylistPlayerCurrentResult)
    const setPlaylistCurrentResults = PlaylistPagePlayerStore(state => state.setPlaylistCurrentResults)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.generalizedResult.platformId});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(" + props.generalizedResult.thumbnailUrl + ")"
    };

    useEffect(
        () => {
            if (props.showingMyPlaylist && props.draggable) setItemSizeClass(itemSizeClass - 2);
            else if (props.showingMyPlaylist) {
                setItemSizeClass(itemSizeClass - 1);
            }
        }, []
    )

    let draggableButton;
    if (props.draggable) {
        draggableButton = <div className="col-1 align-middle">
            <span className="align-middle"><i className='bx bx-menu h4'></i></span>
        </div>
    }

    let contentDropdown;
    if (props.showingMyPlaylist) {
        contentDropdown = <div className="col-1">
            <div className="btn-group position-absolute top-0 end-0">
                <button type="button" className="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='bx bx-dots-vertical-rounded h4'></i>
                </button>
                <PlaylistContentDropdown
                    playlistId={props.playlistId}
                    genericResult={props.generalizedResult}
                />
            </div>
        </div>
    }



    return (

        <li className="list-group-item"
            key={props.generalizedResult.platformId}
            ref={setNodeRef} style={style} {...attributes} {...listeners}
        >
            <div className="row align-middle">
                {draggableButton}
                <div className={"col-" + itemSizeClass + " p-3 clickable"}
                     onClick={() => {
                         setPlaylistPlayerGeneralizedResult(props.generalizedResult)
                         setPlaylistCurrentResults(props.generalizedResults)
                         setPlayingGlobalGenericResult(null)
                         setSearchCurrentResults(null)
                     }}
                >
                    {/* <i className='bx bx-play h4 position-absolute top-50 start-0 translate-middle'></i> */}
                    <h6 className="fw-bold text-truncate">{props.generalizedResult.title}</h6>
                </div>
                {contentDropdown}
            </div>

        </li>
    )

}

export default PlaylistContentItem;
