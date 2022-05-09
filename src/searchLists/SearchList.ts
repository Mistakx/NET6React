import {PlayerCreator} from "../playerCreators/PlayerCreator";
import React from "react";

export abstract class SearchList {

    public abstract getPlayerCreator(): PlayerCreator

    public abstract getItemsHtml(setPlaylistsModal: React.Dispatch<React.SetStateAction<boolean>>): JSX.Element[]


}
