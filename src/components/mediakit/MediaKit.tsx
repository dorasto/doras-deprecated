import React, { useState } from "react";
import type { ServerDataItem } from "@/server_types";
import { downloadImageUser, supabase } from "@/supabase";
import { Mail, MapPin, Twitch, Twitter, User } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
    user: ServerDataItem;
}

const MediaKitRender: React.FC<Props> = ({ user }) => {
    const mediakit = user.mediakit
    return (
        <div className="w-full">
            <div className="relative p-3 overflow-hidden rounded-md bg-fill bg-center h-full" style={{ backgroundImage: `url(${mediakit.heading.background_image || "https://s.hdnux.com/photos/26/52/32/5940889/6/rawImage.jpg"})` }}>
                <div className="flex flex-col gap-3 object-cover max-w-lg mx-auto">
                    <div className="flex gap-3 items-center">
                        <img src={downloadImageUser(user.pic)} alt="Media Kit" className="w-48 rounded-full z-10" />
                        <div className="">
                            <h1 className="text-5xl">{user.displayname}</h1>
                            <h5>/{user.username}</h5>
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
            <div className="max-w-xl mx-auto py-9 text-white flex flex-row justify-between gap-3">
            </div>
        </div>
    );
};

export default MediaKitRender;
