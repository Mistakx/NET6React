import axios from "axios";
import {SaveContentView} from "../../models/backendRequests/RecommendationsRoute/SaveContentView";
import {GeneralizedResult} from "../../models/apiResponses/GenericResults";
import {ViewAmounts} from "../../models/backendRequests/RecommendationsRoute/ViewAmounts";
import {GetContentViews} from "../../models/backendRequests/RecommendationsRoute/GetContentViews";
import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {SavePlaylistView} from "../../models/backendRequests/RecommendationsRoute/SavePlaylistView";
import {GetTrendingPlaylists} from "../../models/backendRequests/RecommendationsRoute/GetTrendingPlaylists";
import {GetPlaylistViews} from "../../models/backendRequests/RecommendationsRoute/GetPlaylistViews";
import {SaveUserView} from "../../models/backendRequests/RecommendationsRoute/SaveUserView";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {GetTrendingUsersDto} from "../../models/backendRequests/RecommendationsRoute/GetTrendingUsersDto";
import {GetTrendingContentDto} from "../../models/backendRequests/RecommendationsRoute/GetTrendingContentDto";

class RecommendationRequests {

    //! Content
    static async saveContentView(generalizedResult: GeneralizedResult, sessionToken: string) {

        const url = "/Recommendations/saveContentView";

        const data: SaveContentView = {
            content: generalizedResult,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as string
    }

    static async getTrendingMonthlyContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingMonthlyContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }


    // Trending recomendations by platform
    static async getTrendingWeeklyYoutubeContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyYoutubeContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyVimeoContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyVimeoContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklySpotifyTrackAndAlbumContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklySpotifyTrackAndAlbumContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklySpotifyPodcastContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklySpotifyPodcastContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklySoundCloudContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklySoundCloudContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyMixcloudContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyMixcloudContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyDailymotionContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyDailymotionContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyTwitchLivestreamContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyTwitchLivestreamContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async GetTrendingWeeklyTwitchClipContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/GetTrendingWeeklyTwitchClipContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyTwitchVideoContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyTwitchVideoContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }

    static async getTrendingWeeklyRadioContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingWeeklyRadioContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }



    static async getTrendingDailyContent(page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingDailyContent";

        const data: GetTrendingContentDto = {
            limit: limit,
            pageNumber: page,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as GeneralizedResult[]
    }


    static async getContentViews(platformId: string, playerFactoryName: string, platformPlayerUrl?: string) {

        const url = "/Recommendations/getContentViews";

        const data: GetContentViews = {
            platformId: platformId,
            playerFactoryName: playerFactoryName,
            platformPlayerUrl: platformPlayerUrl
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as ViewAmounts
    }

    // Playlist
    static async savePlaylistView(playlistId: string, sessionToken: string) {

        const url = "/Recommendations/savePlaylistView";

        const data: SavePlaylistView = {
            playlistId: playlistId,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as string
    }

    static async getTrendingPlaylists(beginningOfPlaylistName: string, page: number, limit: number, sessionToken: string) {

        const url = "/Recommendations/getTrendingPlaylists";

        const data: GetTrendingPlaylists = {
            playlistName: beginningOfPlaylistName,
            sessionToken: sessionToken,
            pageNumber: page,
            limit: limit
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as PlaylistDto[]
    }

    static async getPlaylistViews(playlistId: string, sessionToken: string) {

        const url = "/Recommendations/getContentViews";

        const data: GetPlaylistViews = {
            playlistId: playlistId,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as ViewAmounts
    }

    // User
    static async saveUserView(username: string, sessionToken: string) {

        const url = "/Recommendations/saveUserView";

        const data: SaveUserView = {
            username: username,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as string
    }

    static async getTrendingUsers(beginningOfUsername: string, page: number, limit: number, accessToken: string) {

        const url = "/Recommendations/getTrendingUsers";

        const data: GetTrendingUsersDto = {
            username: beginningOfUsername,
            sessionToken: accessToken,
            pageNumber: page,
            limit: limit
        }

        const options = {
            method: 'POST',
            url: url,
            data: data
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as UserProfileDto[]
    }

    static async getUserViews(userId: string) {

        const url = "/Recommendations/getUserViews";

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as ViewAmounts
    }

}

export default RecommendationRequests;