export interface Theme {
    background: string;
    button: string;
    button_rounded: string;
    inset: boolean;
}
export interface Design {
    profile_pic_shape: string;
}
export interface Links {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    url?: string;
    message?: string;
    icon?: string;
    colour?: {
        text: string;
        background: string;
    };
    type: "link" | "divider" | "textblock" | "twitch" | "youtube" | "kofi" | "soundcloud" | "group";
    adult: boolean;
    show: boolean;
    group?: Links[];
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
    account_type: "user" | "premium" | "staff";
    verified_links?: {
        find: string;
        adult: boolean;
    }[];
    theme: Theme;
    design: Design;
}

export interface Server {
    error?: string;
    data: ServerDataItem[];
    count?: string;
    status?: number;
    statusText?: string;
}
