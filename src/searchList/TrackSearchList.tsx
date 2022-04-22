import {GenericTrackResult} from "../models/apiSearches/GenericResults";
import {PlayerBuilder} from "../players/PlayerBuilder";
import {SearchList} from "./SearchList";
import TrackItemComponent from "../components/searchPage/TrackItemComponent";

export class TrackSearchList extends SearchList {

    private readonly items: GenericTrackResult[];
    private readonly playerUrl: string;
    private readonly playerBuilder: PlayerBuilder;

    public constructor(items: GenericTrackResult[], playerUrl: string, playerBuilder: PlayerBuilder) {
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

            let genericItemHtml = <TrackItemComponent
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