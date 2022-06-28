import {HubConnection} from '@microsoft/signalr';

export interface ConnectToHubDto {
    sessionToken: string | null,
    hubConnectionId: string | null
}
