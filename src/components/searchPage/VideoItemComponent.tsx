import React from 'react';
import {VideoItemComponentProperties} from "../../models/components/searchPage/VideoItemComponentProperties";
import {GenericVideoResult} from "../../models/apiSearches/GenericResults";
import PlayerStore from "../../stores/PlayerStore";

function VideoItemComponent(props: VideoItemComponentProperties): JSX.Element {

    const setCurrentPlayer = PlayerStore(state => state.setCurrentPlayer)

    function setCurrentPlayerToClickedItem(item: GenericVideoResult) {

        setCurrentPlayer(props.playerBuilder.buildComponent(item.id, props.playerWidth, props.playerHeight, props.playerUrl));

    }

    return (

            <li key={props.item.id} onClick={() => {setCurrentPlayerToClickedItem(props.item)}}>
                <div>{props.item.title}</div>
                <div>Channel title: {props.item.creator}</div>
                <div>Duration: {props.item.duration}</div>
                <div>Views: {props.item.views}</div>
                <div>Creation date: {props.item.createdAt}</div>
                <img alt="" height={200} width={200} src={props.item.thumbnailUrl}/>
            </li>

    )

}

export default VideoItemComponent;
