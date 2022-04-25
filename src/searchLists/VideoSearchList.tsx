import {GenericVideoResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import VideoItemComponent from "../components/searchPage/VideoItemComponent";
import VideoBoostrapItem from "../components/searchPage/VideoBootstrapItem";

export class VideoSearchList extends SearchList {

    private readonly items: GenericVideoResult[];
    private readonly playerUrl: string;
    private readonly playerBuilder: PlayerCreator;

    public constructor(items: GenericVideoResult[], playerUrl: string, playerBuilder: PlayerCreator) {
        super();
        this.items = items;
        this.playerUrl = playerUrl;
        this.playerBuilder = playerBuilder;
    }

    public getPlayerBuilder() {
        return this.playerBuilder;
    }

    public getItemsHtml() {

        let htmlItems: JSX.Element[] = []

        for (let currentGenericItem of this.items) {

            let genericItemHtml = <VideoBoostrapItem
                item={currentGenericItem}
                playerUrl={this.playerUrl}
                playerWidth={super.getPlayerWidth()}
                playerHeight={super.getPlayerWidth()}
                playerBuilder={this.playerBuilder}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}