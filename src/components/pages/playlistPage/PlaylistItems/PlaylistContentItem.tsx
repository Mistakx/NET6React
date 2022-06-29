import React, {useEffect, useRef} from "react";
import '../../../../styles/style.css';
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../../models/components/pages/playlistPage/PlaylistItemProperties";
import PlaylistPagePlayerStore from "../../../../stores/players/PlaylistPagePlayerStore";
import GlobalPlayerStore from "../../../../stores/players/GlobalPlayerStore";
import PlaylistContentDropdown from "./PlaylistContentDropdown";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function PlaylistContentItem(props: PlaylistItemProperties): JSX.Element {

    const myRef = useRef(null)

    const [itemSizeClass, setItemSizeClass] = React.useState<number>(12);

    const setPlayingGlobalGenericResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const setSearchCurrentResults = GlobalPlayerStore(state => state.setSearchCurrentResults)

    const playlistPlayerCurrentResult = PlaylistPagePlayerStore(state => state.playlistPlayerCurrentResult)
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
    };

    let hasLeftButton = false;
    if (props.draggable || props.generalizedResult === playlistPlayerCurrentResult) hasLeftButton = true;
    let hasRightButton = false;
    if (props.showingMyPlaylist) hasRightButton = true;

    useEffect(() => {
            setItemSizeClass(12);
            if (hasLeftButton && hasRightButton) setItemSizeClass((previousState) => previousState - 2);
            else if (hasLeftButton) setItemSizeClass((previousState) => previousState - 1);
            else if (hasRightButton) setItemSizeClass((previousState) => previousState - 1);
            try {
                // @ts-ignore
                // myRef.current.scrollIntoViewIfNeeded();
            } catch (e) {
                console.log(e)
            }
        }, [playlistPlayerCurrentResult]
    )

    let leftButton;
    if (props.draggable) {
        leftButton = <div className="col-1">
            <span className="align-middle"><i className='bx bx-menu h4'></i></span>
        </div>
    }
    if (props.generalizedResult.platformId === playlistPlayerCurrentResult?.platformId
        && props.generalizedResult.playerFactoryName === playlistPlayerCurrentResult?.playerFactoryName
        && props.generalizedResult.platformPlayerUrl === playlistPlayerCurrentResult?.platformPlayerUrl) {
        console.log("props.generalizedResult === playlistPlayerCurrentResult")
        leftButton = <div className="col-1">
            <span className="align-middle"><i className='bx bx-play h4'></i></span>
        </div>
    }

    let contentDropdown;
    if (props.showingMyPlaylist) {
        contentDropdown = <div className="col-1">
            <div className="btn-group text-end position-absolute top-0 end-0">
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
            <div className="row align-middle" ref={myRef}>
                {leftButton}
                <div className={"col-" + itemSizeClass + " p-3 clickable"}
                     style={{
                         backgroundSize: "100% auto",
                         backgroundRepeat: "no-repeat",
                         backgroundPosition: "center",
                         backgroundImage: "url(" + props.generalizedResult.thumbnailUrl + ")"
                     }}
                     onClick={() => {
                         setPlaylistPlayerGeneralizedResult(props.generalizedResult)
                         setPlaylistCurrentResults(props.generalizedResults)
                         setPlayingGlobalGenericResult(null)
                         setSearchCurrentResults(null)
                     }}
                >
                    <h6 className="fw-bold text-truncate text-center">{props.generalizedResult.title}</h6>
                </div>
                {contentDropdown}
            </div>

        </li>
    )

}

export default PlaylistContentItem;
