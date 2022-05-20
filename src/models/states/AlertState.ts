export interface AlertState {

    alertSucceeded: boolean | null
    setAlertSucceeded: (alertSucceeded: boolean) => void

    alertMessage: string | null
    setAlertMessage: (alertMessage: string) => void

    showingAlert: boolean
    setShowingAlert: (showingAlert: boolean) => void

    prettyAlert: (alertMessage: string, alertSucceeded: boolean) => void

}
