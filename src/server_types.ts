export interface Theme {
    background: string;
    button: string;
    button_rounded: string;
    inset: boolean;
    font?: {
        family: string;
        font: string;
    };
}
export interface Design {
    profile_pic_shape: string;
}
export interface Links {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    url: string;
    icon: string;
    colour: {
        text: string;
        background: string;
        toggle: boolean;
    };
    type: "link" | "divider" | "textblock" | "twitch" | "youtube" | "youtube_video" | "github_user" | "spotify" | "group" | "img";
    adult: boolean;
    show: boolean;
    message: string;
    group: Links[];
    options?: any;
    clicks: any[];
}
export interface Pages {
    id: string;
    name: string;
    url: string;
    blocks: Links[];
}
export interface ServerDataItem {
    id: string;
    created_at: string;
    updated_at: string;
    username: string;
    displayname: string;
    pic: string;
    bio: string;
    links: Links[];
    account_type: "user" | "premium" | "brand";
    access: "user" | "nua" | "staff" | "admin";
    verified_links?: {
        find: string;
        adult: boolean;
    }[];
    theme: Theme;
    design: Design;
    views: number;
    story: {
        text: string;
        toggle: boolean;
    };
    pages: Pages[];
    users: any[];
    checklist: boolean;
    referer: any[];
    stats: IUserStats;
    badges: {
        name: string;
        icon: string;
    }[];
    // mediakit: { enabled: boolean, data: IMediaKitPlatform[], updated: string };
    mediakit: IMediaKit;
}
export interface IMediaKit {
    enabled: boolean;
    heading: {
        background_image: string;
        pronouns: string;
        location: string;
        contact_button: string;
    };
    contact: {
        email: string;
        discord_username: string;
    };
    platforms: {
        updated: string;
        platforms: IMediaKitPlatform[];
    };
}
export interface IMediaKitPlatform {
    type: "twitch" | "youtube" | "twitter" | "bluesky" | "threads";
    id: string;
    username?: string;
    channel_id?: string;
    enabled?: boolean;
    followers?: number;
    posts?: number;
    follows?: number;
    subscribers?: number;
    videos?: number;
    tweets?: number;
    following?: number;
}
export interface IUniqueViews {
    ip: string;
    date: string;
    country: string;
}
export interface IReferer {
    url: string;
    views: any[];
}
export interface IUserStats {
    unique_views: IUniqueViews[];
    referer: IReferer[];
}
export interface Server {
    error?: string;
    data: ServerDataItem[];
    count?: string;
    status?: number;
    statusText?: string;
}
