import '../../../styles/SearchPage.css';
import React from "react";
import "aos/dist/aos.css";
import {
    StatisticsModalItemsListProperties
} from "../../../models/components/modals/statisticsModal/StatisticsModalItemsListProperties";


function StatisticsModalList(props: StatisticsModalItemsListProperties): JSX.Element {

    let statisticsList;
    if ("username" in props.showingStatisticsOf) {
        statisticsList = <>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                User Weekly Views: {props.showingStatisticsOf.weeklyViewsAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                User Total Views: {props.showingStatisticsOf.totalViewsAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlists: {props.showingStatisticsOf.viewablePlaylistsAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlists Weekly Views: {props.showingStatisticsOf.playlistsWeeklyViewsAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlists Total Views: {props.showingStatisticsOf.playlistsTotalViewsAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlists Content: {props.showingStatisticsOf.playlistsContentAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Followers: {props.showingStatisticsOf.followersAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Following Users: {props.showingStatisticsOf.followingUsersAmount}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Following Playlists: {props.showingStatisticsOf.followingPlaylistsAmount}
            </li>
        </>

    } else if ("title" in props.showingStatisticsOf) {

        let weeklyViews;
        if (props.showingStatisticsOf.weeklyViewsAmount !== null) {
            weeklyViews = <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlist Weekly Views: {props.showingStatisticsOf.weeklyViewsAmount}
            </li>
        }

        let totalViews;
        if (props.showingStatisticsOf.totalViewsAmount !== null) {
            totalViews = <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlist Total Views: {props.showingStatisticsOf.totalViewsAmount}
            </li>
        }

        let followers;
        if (props.showingStatisticsOf.followersAmount !== null) {
            followers = <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Followers: {props.showingStatisticsOf.followersAmount}
            </li>
        }


        statisticsList = <>
            <li className="list-group-item d-flex justify-content-between align-items-start clickable">
                Playlist Content: {props.showingStatisticsOf.resultsAmount}
            </li>

            {weeklyViews}

            {totalViews}

            {followers}

        </>

    }

    return (
        <div>
            <ul className="list-group">
                {statisticsList}
            </ul>
        </div>
    )
}

export default StatisticsModalList;
