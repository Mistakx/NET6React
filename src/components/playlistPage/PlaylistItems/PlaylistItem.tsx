import React from "react";
import '../../../styles/style.css';
import "aos/dist/aos.css";
import {PlaylistItemProperties} from "../../../models/components/playlistPage/PlaylistItemProperties";
import PlaylistPagePlayerStore from "../../../stores/PlaylistPagePlayerStore";
import GlobalPlayerStore from "../../../stores/GlobalPlayerStore";
import PlaylistItemDropdown from "./PlaylistItemDropdown";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const setPlayingGlobalGenericResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)

    const setPlaylistPlayerGeneralizedResult = PlaylistPagePlayerStore(state => state.setPlaylistPlayerCurrentResult)
    const setPlaylistCurrentResults = PlaylistPagePlayerStore(state => state.setPlaylistCurrentResults)


    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: props.generalizedResult.platformId});

    const style = {
        // width: "100%",
        // height: "100%",
        // padding: 20,
        // border: '1px solid',
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (

        <li className="list-group-item align-middle"
            key={props.generalizedResult.platformId}
            ref={setNodeRef} style={style} {...attributes} {...listeners}
        >
            <div className="row">
                <div className="col-2">
                    <span className=" align-middle"><i className='bx bx-menu h4'></i></span>
                </div>
                <div className="col-8 p-3 clickable"
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
                     }}
                >
                    <h6 className="fw-bold text-truncate">{props.generalizedResult.title}</h6>
                </div>

                <div className="col-1">
                    <div className="btn-group dropstart">
                        <button type="button" className="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-dots-vertical-rounded h4'></i>
                        </button>
                        <PlaylistItemDropdown
                            playlistId={props.playlistId}
                            genericResult={props.generalizedResult}
                        />
                    </div>
                </div>

            </div>

        </li>
    )

}

export default PlaylistItem;
