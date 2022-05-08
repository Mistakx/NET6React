import {GenericVideoResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import VideoSearchItem from "../components/searchPage/searchItems/VideoSearchItem";

export class VideoSearchList extends SearchList {

    private readonly items: GenericVideoResult[];
    private readonly playerBuilder: PlayerCreator;

    public constructor(items: GenericVideoResult[], playerBuilder: PlayerCreator) {
        super();
        this.items = items;
        this.playerBuilder = playerBuilder;
    }

    public getPlayerCreator() {
        return this.playerBuilder;
    }

    public getItemsHtml() {

        let htmlItems: JSX.Element[] = []

        for (let currentGenericItem of this.items) {

            let genericItemHtml = <VideoSearchItem
                item={currentGenericItem}
                playerBuilder={this.playerBuilder}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}