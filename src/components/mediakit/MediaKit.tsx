import React from "react";
import type { ServerDataItem } from "@/server_types";
import { downloadImageUser } from "@/supabase";
import { MapPin, User } from "lucide-react";
import { Button } from "../ui/button";
import { IconBrandThreads, IconBrandTwitch, IconBrandX, IconBrandYoutube, IconCloud, IconMail } from "@tabler/icons-react";
import CardBasic from "../ui/CardBasic";
import moment from "moment";
import CountUp from "react-countup";
import { Progress } from "../ui/progress";
import Contact from "./Contact";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface Props {
    user: ServerDataItem;
}

const MediaKitRender: React.FC<Props> = ({ user }) => {
    const mediakit = user.mediakit;
    const platforms = mediakit.platforms.platforms;
    let Twitch = platforms.find((e) => e.type == "twitch");
    let Youtube = platforms.find((e) => e.type == "youtube");
    let Twitter = platforms.find((e) => e.type == "twitter");
    let Bluesky = platforms.find((e) => e.type == "bluesky");
    let Threads = platforms.find((e) => e.type == "threads");
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
    let platformList = [
        { name: "YouTube", url: "https://youtube.com/channel/" + Youtube?.channel_id, followers: Youtube?.subscribers, color: "bg-primary-500", Icon: IconBrandYoutube, disabled: Youtube ? false : true },
        { name: "Threads", url: "https://threads.net/" + Threads?.username, followers: Threads?.followers, color: "bg-surface-600", Icon: IconBrandThreads, disabled: Threads ? false : true },
        { name: "Twitch", url: "https://twitch.tv/" + Twitch?.username, followers: Twitch?.followers, color: "bg-[#A970FF]", Icon: IconBrandTwitch, disabled: Twitch ? false : true },
        { name: "Twitter", url: "https://x.com/" + Twitter?.username, followers: Twitter?.followers, color: "bg-[#1E9BF0]", Icon: IconBrandX, disabled: Twitter ? false : true },
        { name: "Bluesky", url: "https://bsky.app/profile/" + Bluesky?.username, followers: Bluesky?.followers, color: "bg-[#0085FF]", Icon: IconCloud, disabled: Bluesky ? false : true }
    ];
    platformList = platformList.filter((e) => !e.disabled);
    const sortedPlatforms = platformList.sort((a, b) => (b.followers || 0) - (a.followers || 0));
    return (
        <div className="w-full">
            <div className={"relative p-3 overflow-hidden rounded-md bg-fill bg-cover bg-center h-full w-full max-w-xl mx-auto "} style={{ color: mediakit.heading.text_colour || "black", backgroundImage: `url(${mediakit.heading.background_image || ""})` }}>
                <div className="flex flex-col gap-3 object-cover max-w-lg mx-auto">
                    <div className="flex gap-3 items-center">
                        <img src={downloadImageUser(user.pic)} alt="Media Kit" className="w-36 rounded-full z-10" />
                        <div className="space-y-2 ">
                            <h1 className="text-5xl font-bold mb-1">{user.displayname}</h1>
                            <div className="w-full flex justify-between">
                                <Button className="pointer-events-none font-black" variant="secondary">
                                    <span className="font-bold mr-1">Total Followers:</span> {formattedTotalFollowers}
                                </Button>
                                <div className="flex gap-1">
                                    <Sheet>
                                        <SheetTrigger>
                                            <Button variant="secondary" className="flex items-center gap-1 bg-primary-500 dark:bg-primary-500 font-black">
                                                <IconMail />
                                                Contact Me
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent side="top" className="max-w-xl mx-auto rounded-xl">
                                            <SheetHeader>
                                                <SheetTitle className="text-white -mb-3">Get in touch</SheetTitle>
                                                <SheetDescription className="text-white dark:text-white pb-6 ">Don't hesitate to reach out to me to discuss anything!</SheetDescription>
                                            </SheetHeader>
                                            <Contact user={user} />
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center max-w-xl gap-3 mx-auto justify-between">
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
                <div className="md:grid grid-cols-3 gap-3 w-full">
                    <CardBasic className="flex-col col-span-2">
                        <h4>Statistics</h4>
                        <p className="text-xs mb-2">Last updated: {moment(mediakit.platforms.updated).format("MMMM Do, h:mm a")}</p>
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
                                            <a href={platform.url} target="_blank" className="font-bold flex items-center gap-1 hover:underline">
                                                <platform.Icon />
                                                {platform.name}
                                            </a>
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
                        <h4 id="contact">Contact Me</h4>
                        <Contact user={user} />
                    </CardBasic>
                </div>
            </div>
        </div>
    );
};

export default MediaKitRender;
