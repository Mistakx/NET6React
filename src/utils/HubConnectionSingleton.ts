import {HubConnectionBuilder, HttpTransportType, HubConnection, HubConnectionState} from '@microsoft/signalr';
import {GeneralizedResult} from "../models/apiResponses/GenericResults";

export class HubConnectionSingleton {
    private static hubConnectionInstance: HubConnection;

    private constructor() {
    }

    public static getInstance(sessionToken: string) {
        if (!HubConnectionSingleton.hubConnectionInstance) {
            HubConnectionSingleton.hubConnectionInstance = new HubConnectionBuilder().withUrl("hub/?sessionToken=" + sessionToken,
                {
                    transport: HttpTransportType.WebSockets,
                    skipNegotiation: true,
                }).withAutomaticReconnect().build();
        }
        return HubConnectionSingleton.hubConnectionInstance;
    }

    public static async startHub() {
        if (HubConnectionSingleton.hubConnectionInstance && HubConnectionSingleton.hubConnectionInstance.state === HubConnectionState.Disconnected) {
            await HubConnectionSingleton.hubConnectionInstance.start();
        }
    }


    public static async disconnectHub() {
        if (HubConnectionSingleton.hubConnectionInstance) {
            await HubConnectionSingleton.hubConnectionInstance.stop()
        }
    }

    public static async sendCurrentlyPlaying(currentlyPlayingContent: GeneralizedResult | null) {
        if (HubConnectionSingleton.hubConnectionInstance) {
            await HubConnectionSingleton.hubConnectionInstance.send("UpdateCurrentlyPlaying", currentlyPlayingContent);
        }
    }

}