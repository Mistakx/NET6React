import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import VideoSearchItem from "../../../components/searchPage/searchItems/VideoSearchItem";
import React from "react";

export class VideoSearchList extends SearchList {

    private readonly items: GenericVideoResult[];
    private readonly playerCreator: PlayerCreator;

    public constructor(items: GenericVideoResult[], playerBuilder: PlayerCreator) {
        super();
        this.items = items;
        this.playerCreator = playerBuilder;
    }

    public getPlayerCreator() {
        return this.playerCreator;
    }

    public getSearchItems() {

        let htmlItems: JSX.Element[] = []

        for (let currentGenericItem of this.items) {

            let genericItemHtml = <VideoSearchItem
                item={currentGenericItem}
                playerCreator={this.playerCreator}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}