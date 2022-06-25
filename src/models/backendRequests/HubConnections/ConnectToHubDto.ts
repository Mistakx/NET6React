import {HubConnection} from '@microsoft/signalr';

export interface ConnectToHubDto {
    sessionToken: string,
    hubConnectionId: string | null
}
