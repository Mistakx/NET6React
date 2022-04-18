import React from "react";
import {Platform} from "../Platform";

export interface SearchBarState {

    searchQuery:  React.MutableRefObject<string>

    searchPlatform: Platform
    setSearchPlatform: (searchPlatform: Platform) => void;

}
