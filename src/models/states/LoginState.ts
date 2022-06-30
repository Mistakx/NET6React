export interface LoginState {

    location: string;
    setLocation: (location: string) => void
    isAuthenticated: boolean;
    setIsAuthenticated: (IsAuthenticated: boolean) => void

}
