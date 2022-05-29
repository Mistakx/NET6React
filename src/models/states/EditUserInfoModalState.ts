export interface EditUserInfoModalState {

    name: string | null
    setName: (name: string | null) => void

    email: string | null
    setEmail: (email: string | null) => void

    username: string | null
    setUsername: (username: string | null) => void

    showingEditUserInfoModal: boolean;
    setShowingEditUserInfoModal: (showingEditUserInfoModal: boolean) => void;

}