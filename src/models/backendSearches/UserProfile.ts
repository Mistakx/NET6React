export interface UserProfile {
    id: string;
    email: string;
    name: string;
    profilePhotoPath: string;
    userPlaylists: UserPlaylist[];
}

interface UserPlaylist {
    id: string;
    title: string;
    visibility: string;
    creationDate: Date;
}



