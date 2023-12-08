export interface Theme {
    background: string;
    button: string
    button_rounded: string;
    inset: boolean;
    font?: {
        family: string;
        font: string;
    };
}
export interface Design {
    profile_pic_shape: string
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
    type: "link" | "divider" | "textblock" | "twitch" | "youtube" | "youtube_video" | "github_user" | "spotify" | "group";
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
    links: Links[],
    account_type: "user" | "premium" | "brand",
    access: "user" | "staff" | "admin",
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
