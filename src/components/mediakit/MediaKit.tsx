import React, { useState } from "react";
import type { ServerDataItem } from "@/server_types";
import { downloadImageUser, supabase } from "@/supabase";
import { Mail, MapPin, Twitch, Twitter, User } from "lucide-react";
import { Button } from "../ui/button";
import { IconBrandThreads, IconBrandTwitch, IconBrandX, IconBrandYoutube, IconCloud, IconMail } from "@tabler/icons-react";
import CardBasic from "../ui/CardBasic";
import moment from "moment";
import CountUp from "react-countup";
import { Line } from "react-chartjs-2";
import ReachChart from "./Chart";
import { Progress } from "../ui/progress";

interface Props {
    user: ServerDataItem;
}

const MediaKitRender: React.FC<Props> = ({ user }) => {
    const mediakit = user.mediakit;
    let Twitch = mediakit.platforms.platforms.find((e) => e.type == "twitch");
    let Youtube = mediakit.platforms.platforms.find((e) => e.type == "youtube");
    let Twitter = mediakit.platforms.platforms.find((e) => e.type == "twitter");
    let Bluesky = mediakit.platforms.platforms.find((e) => e.type == "bluesky");
    let Threads = mediakit.platforms.platforms.find((e) => e.type == "threads");
    function formatNumber(num: number) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + "M";
        } else if (num >= 1000) {
            return (num / 1000).toFixed(2) + "K";
        } else {
            return num.toString();
        }
    }
    const totalFollowers = (Twitch?.followers || 0) + (Youtube?.subscribers || 0) + (Twitter?.followers || 0) + (Bluesky?.followers || 0) + (Threads?.followers || 0) || 0;
    const formattedTotalFollowers = formatNumber(totalFollowers);
    const platformList = [
        { name: "Youtube", followers: Youtube?.subscribers, color: "bg-primary-500", Icon: IconBrandYoutube },
        { name: "Threads", followers: Threads?.followers, color: "bg-surface-600", Icon: IconBrandThreads },
        { name: "Twitch", followers: Twitch?.followers, color: "bg-[#A970FF]", Icon: IconBrandTwitch },
        { name: "Twitter", followers: Twitter?.followers, color: "bg-[#1E9BF0]", Icon: IconBrandX },
        { name: "Bluesky", followers: Bluesky?.followers, color: "bg-[#0085FF]", Icon: IconCloud }
    ];

    const sortedPlatforms = platformList.sort((a, b) => (b.followers || 0) - (a.followers || 0));
    return (
        <div className="w-full">
            <div className="relative p-3 overflow-hidden rounded-md bg-fill bg-cover bg-center h-full w-full max-w-xl mx-auto" style={{ backgroundImage: `url(${mediakit.heading.background_image || ""})` }}>
                <div className="flex flex-col gap-3 object-cover max-w-lg mx-auto">
                    <div className="flex gap-3 items-center">
                        <img src={downloadImageUser(user.pic)} alt="Media Kit" className="w-36 rounded-full z-10" />
                        <div className="space-y-2">
                            <h1 className="text-5xl text-text-900 font-bold mb-1">{user.displayname}</h1>
                            <div className="w-full flex justify-between">
                                <Button className="pointer-events-none font-black" variant="secondary">
                                    <span className="font-bold mr-1">Total Followers:</span> {formattedTotalFollowers}
                                </Button>
                                {mediakit.heading.contact_button && (
                                    <div className="flex gap-1">
                                        <a href={"mailto:" + mediakit.heading.contact_button} target="blank">
                                            <Button variant="secondary" className="flex items-center gap-1 bg-primary-500 dark:bg-primary-500 font-black">
                                                <IconMail />
                                                Contact Me
                                            </Button>
                                        </a>
                                    </div>
                                )}
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
                </div>
            </div>
            <div className="pb-9 pt-3 text-white flex flex-row justify-between gap-3 w-full max-w-2xl mx-auto">
                <div className="grid grid-cols-3 gap-3 w-full">
                    <CardBasic className="flex-col col-span-2">
                        <h4>Statistics</h4>
                        <p className="text-xs mb-2">Last updated: {moment(user.mediakit.platforms.updated).format("MMMM Do, h:mm a")}</p>
                        <div className="w-full flex flex-col gap-1 mb-3">
                            <div className="py-3 border-y-2">
                                <h4>Total Reach</h4>
                                <h4>
                                    <CountUp end={totalFollowers} formattingFn={formatNumber} />
                                </h4>
                            </div>
                            <div>
                                <h4>Per Platform</h4>
                                {sortedPlatforms.map((platform, index) => (
                                    <div className="py-1">
                                        <div key={index} className={`w-full text-white flex items-center gap-1`}>
                                            <platform.Icon />
                                            <p className="font-bold">{platform.name}</p>
                                            <div className="flex ml-auto">
                                                <p className="font-bold">
                                                    <CountUp end={platform.followers || 0} formattingFn={formatNumber} />
                                                </p>
                                            </div>
                                        </div>
                                        <Progress className={`w-full`} indicatorClass={`${platform.color} dark:${platform.color}`} value={((platform.followers || 0) / totalFollowers) * 100} />
                                    </div>
                                ))}
                            </div>

                            {/* <ReachChart user={user} /> */}
                        </div>
                    </CardBasic>
                    <CardBasic className="flex-col gap-2">
                        <h4>Contact Me</h4>
                        <Button variant="secondary" className="dark:bg-primary-500 bg-primary-500">
                            Email
                        </Button>
                        <Button variant="secondary" className="dark:bg-primary-500 bg-primary-500">
                            Discord
                        </Button>
                    </CardBasic>
                </div>
            </div>
        </div>
    );
};

export default MediaKitRender;
