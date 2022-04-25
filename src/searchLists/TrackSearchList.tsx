import {GenericTrackResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import TrackItemComponent from "../components/searchPage/TrackItemComponent";
import TrackBoostrapItem from "../components/searchPage/TrackBootstrapItem";

export class TrackSearchList extends SearchList {

    private readonly items: GenericTrackResult[];
    private readonly playerUrl: string;
    private readonly playerBuilder: PlayerCreator;

    public constructor(items: GenericTrackResult[], playerUrl: string, playerBuilder: PlayerCreator) {
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

            let genericItemHtml = <TrackBoostrapItem
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