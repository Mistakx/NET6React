import React, {useEffect} from "react";
import '../../styles/style.css';
import "aos/dist/aos.css";
import AOS from "aos";
import {PlaylistItemProperties} from "../../models/components/playlistPage/PlaylistItemProperties";
import PlaylistPagePlayerStore from "../../stores/PlaylistPagePlayerStore";
import GlobalPlayerStore from "../../stores/GlobalPlayerStore";

function PlaylistItem(props: PlaylistItemProperties): JSX.Element {

    const setPlayingGlobalGenericResult = GlobalPlayerStore(state => state.setPlayingGenericResult)

    const setPlayingGenericResult = PlaylistPagePlayerStore(state => state.setPlayingGenericResult)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <span className="badge"><i className='bx bx-menu h4'></i></span>
                </div>
                <div className="col-8 p-3 clickable"
                    style={{backgroundSize: "100% auto", backgroundRepeat: "no-repeat" ,backgroundPosition: "center", backgroundImage: "url(" + props.genericResult.thumbnailUrl + ")"}}
                    onClick={() => {
                        setPlayingGenericResult(props.genericResult)
                        setPlayingGlobalGenericResult(null)
                    }}
                >
                    <h6 className="fw-bold text-truncate">{props.genericResult.title}</h6>
                </div>

                <div className="col-1">
                    <div className="btn-group dropstart">
                        <button type="button" className="btn btn-link"data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-dots-vertical-rounded h4'></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Set as cover</a></li>
                            <li><a className="dropdown-item text-danger" href="#">Remove</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </li>
    )

}

export default PlaylistItem;
