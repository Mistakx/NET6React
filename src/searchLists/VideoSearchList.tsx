import {GenericVideoResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import VideoBoostrapItem from "../components/searchPage/searchResults/VideoBootstrapItem";

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

            let genericItemHtml = <VideoBoostrapItem
                item={currentGenericItem}
                playerBuilder={this.playerBuilder}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}