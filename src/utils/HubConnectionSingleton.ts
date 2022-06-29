import {HubConnectionBuilder, HttpTransportType, HubConnection} from '@microsoft/signalr';


export class HubConnectionSingleton {
    private static instance: HubConnection;
    private constructor() { }

    public static createInstance() : HubConnection {
        const hubConnection = new HubConnectionBuilder().withUrl("/hub",
            {
                transport: HttpTransportType.LongPolling  // disable websockets and use longPolling https://stackoverflow.com/questions/9994776/signalr-how-do-i-disable-websockets
            })
            .withAutomaticReconnect()
            .build();
        return hubConnection;
    }

    public static getInstance(): HubConnection {
        if (!HubConnectionSingleton.instance) {
            HubConnectionSingleton.instance = HubConnectionSingleton.createInstance();
        }

        return HubConnectionSingleton.instance;
    }

}