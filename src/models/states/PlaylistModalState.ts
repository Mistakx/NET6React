export interface PlaylistModalState {

    contentToAddId: string | null
    setContentToAddId: (contentToAddId: string) => void

    contentToAddTitle: string | null
    setContentToAddTitle: (contentToAddTitle: string) => void

    showingPlaylistsModal: boolean
    setShowingPlaylistsModal: (showingPlaylistsModal: boolean) => void

}
