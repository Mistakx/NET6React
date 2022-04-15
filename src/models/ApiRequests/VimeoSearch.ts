export interface VimeoSearch {
    total: number;
    page: number;
    per_page: number;
    paging: Paging;
    data: VimeoVideo[];
}

interface Paging {
    next: string | null;
    previous: string | null;
    first: string;
    last: string;
}

interface Live {
    streaming: boolean;
    archived: boolean;
}

interface StaffPick {
    normal: boolean;
    best_of_the_month: boolean;
    best_of_the_year: boolean;
    premiere: boolean;
}

interface Badges {
    hdr: boolean;
    live: Live;
    staff_pick: StaffPick;
    vod: boolean;
    weekend_challenge: boolean;
}

interface Embed {
    html: string;
    badges: Badges;
}

interface Privacy {
    view: string;
    embed: string;
    download: boolean;
    add: boolean;
    comments: string;
}

interface Size {
    width: number;
    height: number;
    link: string;
    link_with_play_button: string;
}

interface Pictures {
    uri: string;
    active: boolean;
    type: string;
    base_link: string;
    sizes: Size[];
    resource_key: string;
    default_picture: boolean;
}

interface Videos {
    uri: string;
    options: string[];
    total: number;
}

interface Connections {
    videos: Videos;
}

interface Metadata {
    connections: Connections;
}

interface Tag {
    uri: string;
    name: string;
    tag: string;
    canonical: string;
    metadata: Metadata;
    resource_key: string;
}

interface Stats {
    plays?: any;
}

interface Size2 {
    width: number;
    height: number;
    link: string;
    link_with_play_button: string;
}

interface Pictures2 {
    uri: string;
    active: boolean;
    type: string;
    base_link: string;
    sizes: Size2[];
    resource_key: string;
    default_picture: boolean;
}

interface Parent {
    uri: string;
    name: string;
    link: string;
}

interface Channels {
    uri: string;
    options: string[];
    total: number;
}

interface Groups {
    uri: string;
    options: string[];
    total: number;
}

interface Users {
    uri: string;
    options: string[];
    total: number;
}

interface Videos2 {
    uri: string;
    options: string[];
    total: number;
}

interface Connections2 {
    channels: Channels;
    groups: Groups;
    users: Users;
    videos: Videos2;
}

interface Metadata2 {
    connections: Connections2;
}

interface Size3 {
    width: number;
    height: number;
    link: string;
}

interface Icon {
    uri: string;
    active: boolean;
    type: string;
    base_link: string;
    sizes: Size3[];
    resource_key: string;
    default_picture: boolean;
}

export interface Category {
    uri: string;
    name: string;
    link: string;
    top_level: boolean;
    is_deprecated: boolean;
    pictures: Pictures2;
    last_video_featured_time: Date;
    parent: Parent;
    metadata: Metadata2;
    subcategories: any[];
    icon: Icon;
    resource_key: string;
}

export interface Size4 {
    width: number;
    height: number;
    link: string;
}

interface Pictures3 {
    uri: string;
    active: boolean;
    type: string;
    base_link: string;
    sizes: Size4[];
    resource_key: string;
    default_picture: boolean;
}

interface Uploader {
    pictures: Pictures3;
}

interface Comments {
    uri: string;
    options: string[];
    total: number;
}

interface Credits {
    uri: string;
    options: string[];
    total: number;
}

interface Likes {
    uri: string;
    options: string[];
    total: number;
}

interface Pictures4 {
    uri: string;
    options: string[];
    total: number;
}

interface Texttracks {
    uri: string;
    options: string[];
    total: number;
}

interface Related {
    uri: string;
    options: string[];
}

interface Recommendations {
    uri: string;
    options: string[];
}

interface Connections3 {
    comments: Comments;
    credits: Credits;
    likes: Likes;
    pictures: Pictures4;
    texttracks: Texttracks;
    related: Related;
    recommendations: Recommendations;
}

interface Report {
    uri: string;
    options: string[];
    reason: string[];
}

interface Interactions {
    report: Report;
}

interface Metadata3 {
    connections: Connections3;
    interactions: Interactions;
    is_vimeo_create: boolean;
    is_screen_record: boolean;
}

interface Capabilities {
    hasLiveSubscription: boolean;
    hasEnterpriseLihp: boolean;
    hasSvvTimecodedComments: boolean;
}

interface Size5 {
    width: number;
    height: number;
    link: string;
}

interface Pictures5 {
    uri: string;
    active: boolean;
    type: string;
    base_link: string;
    sizes: Size5[];
    resource_key: string;
    default_picture: boolean;
}

interface Website {
    uri: string;
    name: string;
    link: string;
    type: string;
    description: string;
}

interface Albums {
    uri: string;
    options: string[];
    total: number;
}

interface Appearances {
    uri: string;
    options: string[];
    total: number;
}

interface Channels2 {
    uri: string;
    options: string[];
    total: number;
}

interface Feed {
    uri: string;
    options: string[];
}

interface Followers {
    uri: string;
    options: string[];
    total: number;
}

interface Following {
    uri: string;
    options: string[];
    total: number;
}

interface Groups2 {
    uri: string;
    options: string[];
    total: number;
}

interface Likes2 {
    uri: string;
    options: string[];
    total: number;
}

interface Membership {
    uri: string;
    options: string[];
}

interface ModeratedChannels {
    uri: string;
    options: string[];
    total: number;
}

interface Portfolios {
    uri: string;
    options: string[];
    total: number;
}

interface Videos3 {
    uri: string;
    options: string[];
    total: number;
}

interface Shared {
    uri: string;
    options: string[];
    total: number;
}

interface Pictures6 {
    uri: string;
    options: string[];
    total: number;
}

interface FoldersRoot {
    uri: string;
    options: string[];
}

interface Teams {
    uri: string;
    options: string[];
    total: number;
}

interface PermissionPolicies {
    uri: string;
    options: string[];
    total: number;
}

interface Connections4 {
    albums: Albums;
    appearances: Appearances;
    channels: Channels2;
    feed: Feed;
    followers: Followers;
    following: Following;
    groups: Groups2;
    likes: Likes2;
    membership: Membership;
    moderated_channels: ModeratedChannels;
    portfolios: Portfolios;
    videos: Videos3;
    shared: Shared;
    pictures: Pictures6;
    folders_root: FoldersRoot;
    teams: Teams;
    permission_policies: PermissionPolicies;
}

interface Metadata4 {
    connections: Connections4;
}

interface LocationDetails {
    formatted_address: string;
    latitude?: number;
    longitude?: number;
    city: string;
    state: string;
    neighborhood?: any;
    sub_locality?: any;
    state_iso_code?: any;
    country: string;
    country_iso_code: string;
}

interface Skill {
    uri: string;
    name: string;
}

interface User {
    uri: string;
    name: string;
    link: string;
    capabilities: Capabilities;
    location: string;
    gender: string;
    bio: string;
    short_bio: string;
    created_time: Date;
    pictures: Pictures5;
    websites: Website[];
    metadata: Metadata4;
    location_details: LocationDetails;
    skills: Skill[];
    available_for_hire: boolean;
    can_work_remotely: boolean;
    resource_key: string;
    account: string;
}

interface Play {
    status: string;
}

interface App {
    name: string;
    uri: string;
}

export interface VimeoVideo {
    uri: string;
    name: string;
    description: string;
    type: string;
    link: string;
    player_embed_url: string;
    duration: number;
    width: number;
    language: string;
    height: number;
    embed: Embed;
    created_time: Date;
    modified_time: Date;
    release_time: Date;
    content_rating: string[];
    content_rating_class: string;
    rating_mod_locked: boolean;
    license: string;
    privacy: Privacy;
    pictures: Pictures;
    tags: Tag[];
    stats: Stats;
    categories: Category[];
    uploader: Uploader;
    metadata: Metadata3;
    user: User;
    play: Play;
    app: App;
    status: string;
    resource_key: string;
    upload?: any;
    transcode?: any;
    is_playable: boolean;
    has_audio: boolean;
}


