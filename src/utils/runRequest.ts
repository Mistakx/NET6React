// Runs a request and displays the appropriate alert
export function alertRequestException(request: Function, prettyAlert: Function) {

    let response;
    try {
        response = request();
        prettyAlert(response, true);
    } catch (e: any) {
        response = e.response?.data;
        prettyAlert(response, false);
    }

}