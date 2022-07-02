import {HubConnectionBuilder, HttpTransportType, HubConnection} from '@microsoft/signalr';
import {ConnectToHubDto} from "../models/backendRequests/HubConnections/ConnectToHubDto";


export class HubConnectionSingleton {
    private static hubConnectionInstance: HubConnection;

    private constructor() {
    }

    public static getInstance(): HubConnection {
        if (!HubConnectionSingleton.hubConnectionInstance) {
            HubConnectionSingleton.hubConnectionInstance = new HubConnectionBuilder().withUrl("/hub",
                {
                    transport: HttpTransportType.LongPolling  // disable websockets and use longPolling https://stackoverflow.com/questions/9994776/signalr-how-do-i-disable-websockets
                }).withAutomaticReconnect().build();
        }

        return HubConnectionSingleton.hubConnectionInstance;
    }

    public static async connectToHub(sessionToken: string) {
        await HubConnectionSingleton.hubConnectionInstance.start()
        try {

            console.log("Connection started");
            console.log(HubConnectionSingleton.hubConnectionInstance.connectionId)

            let request: ConnectToHubDto = {
                sessionToken: sessionToken,
                hubConnectionId: HubConnectionSingleton.hubConnectionInstance.connectionId
            }

            await HubConnectionSingleton.hubConnectionInstance.send("UserHasConnected", request);
        } catch (e) {
            console.log(e)
        }
    }

    public static async disconnectHub(sessionToken: string) {
        let request: ConnectToHubDto = {
            sessionToken: sessionToken,
            hubConnectionId: HubConnectionSingleton.hubConnectionInstance.connectionId
        }

        await HubConnectionSingleton.hubConnectionInstance.send("UserHasDisconnected", request);
        await HubConnectionSingleton.hubConnectionInstance.stop()
    }

}