import React, { useState } from "react";
import type { ServerDataItem } from "@/server_types";
import { downloadImageUser, supabase } from "@/supabase";
import { Mail, MapPin, Twitch, Twitter, User } from "lucide-react";
import { Button } from "../ui/button";
import { IconBrandThreads, IconBrandTwitch, IconBrandX, IconBrandYoutube, IconCloud } from "@tabler/icons-react";

interface Props {
    user: ServerDataItem;
}

const MediaKitRender: React.FC<Props> = ({ user }) => {
    const mediakit = user.mediakit;
    let Twitch = mediakit.platforms.platforms.find(e => e.type == "twitch");
    let Youtube = mediakit.platforms.platforms.find(e => e.type == "youtube");
    let Twitter = mediakit.platforms.platforms.find(e => e.type == "twitter");
    let Bluesky = mediakit.platforms.platforms.find(e => e.type == "bluesky");
    let Threads = mediakit.platforms.platforms.find(e => e.type == "threads");
    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative p-3 overflow-hidden rounded-md bg-fill bg-cover bg-center h-full" style={{ backgroundImage: `url(${mediakit.heading.background_image || ""})` }}>
                <div className="flex flex-col gap-3 object-cover max-w-lg mx-auto">
                    <div className="flex gap-3 items-center">
                        <img src={downloadImageUser(user.pic)} alt="Media Kit" className="w-36 rounded-full z-10" />
                        <div className="space-y-2">
                            <h1 className="text-5xl text-text-900 font-bold mb-1">{user.displayname}</h1>
                            <div className="w-full flex justify-between gap-1 mb-3 flex-wrap">
                                <div className="bg-primary-500 p-1 px-2 rounded-full text-white flex items-center gap-1">
                                    <IconBrandYoutube />
                                    {Youtube?.subscribers}
                                </div>
                                <div className="bg-surface-500 p-1 px-2 rounded-full text-white flex items-center gap-1">
                                    <IconBrandThreads />
                                    {Threads?.followers}
                                </div>
                                <div className="bg-[#A970FF] p-1 px-2 rounded-full text-white flex items-center gap-1">
                                    <IconBrandTwitch />
                                    1,234
                                </div>
                                <div className="bg-[#1E9BF0] p-1 px-2 rounded-full text-white flex items-center gap-1">
                                    <IconBrandX />
                                    1,234
                                </div>
                                <div className="bg-[#0085FF] p-1 px-2 rounded-full text-white flex items-center gap-1">
                                    <IconCloud />
                                    1,234
                                </div>
                            </div>
                            <div className="flex flex-row items-center max-w-xl gap-3 mx-auto justify-between dark:text-white">
                                <div className="bg-primary-500 w-fit p-3 rounded-xl shadow-xl text-white">
                                    <h4 className="font-bold">xxxx Total Followers</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center max-w-xl gap-3 mx-auto justify-between dark:text-white">
                    {mediakit.heading.pronouns && (
                        <div className="flex gap-1">
                            <User />
                            <p>{mediakit.heading.pronouns}</p>
                        </div>
                    )}
                    {mediakit.heading.location && (
                        <div className="flex gap-1">
                            <MapPin />
                            <p>{mediakit.heading.location}</p>
                        </div>
                    )}
                    {mediakit.heading.contact_button && (
                        <div className="flex gap-1">
                            <a href={"mailto:" + mediakit.heading.contact_button} target="blank">
                                <Button variant="secondary">Get In Touch</Button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="max-w-xl mx-auto py-9 text-white flex flex-row justify-between gap-3"></div>
        </div>
    );
};

export default MediaKitRender;
