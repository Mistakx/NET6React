import React, {FormEvent, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyAuthenticator from "../hooks/SpotifyAuthenticator";
import SearchResults from "./SearchResults";
import {SearchContent} from 'spotify-types'
import {Platform} from "../models/Platform";
import SearchBar from "./SearchBar";
import SearchResultsStore from "../stores/SearchResultsStore";

function SearchPage(): JSX.Element {

    return (

        <div className="SearchPage">

            <SearchBar/>

            <SearchResults/>

        </div>

    )
}

export default SearchPage;
