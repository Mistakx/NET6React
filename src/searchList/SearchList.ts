import {PlayerBuilder} from "../players/PlayerBuilder";

export abstract class SearchList {

    private playerWidth = 400
    private playerHeight = 400

    public  getPlayerWidth() {
        return this.playerWidth;
    }

    public getPlayerHeight() {
        return this.playerHeight;
    }

    public abstract getPlayerBuilder(): PlayerBuilder

    public abstract getItemsHtml(): JSX.Element[]


}
