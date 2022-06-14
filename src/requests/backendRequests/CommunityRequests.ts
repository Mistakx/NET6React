import axios from "axios";
import {UserProfileResponseDto} from "../../models/backendResponses/userRoute/UserProfileResponseDto";
import {GetUsersDto} from "../../models/backendRequests/CommunityRequests/GetUsersDto";

class CommunityRequests {

    static async getUsers(username: string, sessionToken: string) {

        const url = "/Community/getUsers";

        const data: GetUsersDto = {
            username: username,
            sessionToken: sessionToken
        }

        const options = {
            method: 'POST',
            url: url,
            data: data,
        };

        // @ts-ignore
        let response = await axios(options)
        return response.data as UserProfileResponseDto[];
    }

}

export default CommunityRequests;