import React from "react";
import { Button } from "./ui/button";

interface TimelineItem {
    date?: string;
    title: string;
    details: string | React.ReactNode;
    buttontext?: string;
    releaseNotes?: string;
    progress?: "completed" | "upcoming";
}

interface Props {
    items: TimelineItem[];
}

const getStatusColor = (status: TimelineItem["progress"]) => {
    switch (status) {
        case "completed":
            return "border-emerald-500";
        case "upcoming":
            return "border-amber-500";
        default:
            return "border-primary-500";
    }
};

const getStatusBgColor = (status: TimelineItem["progress"]) => {
    switch (status) {
        case "completed":
            return "border-emerald-500";
        case "upcoming":
            return "border-amber-500";
        default:
            return "border-primary-500";
    }
};

const Timeline: React.FC<Props> = ({ items }) => {
    const sortedItems = items.sort((a, b) => {
        if (a.progress === "completed" && b.progress !== "completed") {
            return -1;
        } else if (a.progress !== "completed" && b.progress === "completed") {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <div className="relative">
            {sortedItems.map((item, index) => (
                <div key={index} className={`border-s-0 h-auto space-x-3 ${getStatusColor(item.progress)}`}>
                    <div className="p-2">
                        <div
                            key={index}
                            className={`p-3 rounded-xl border-4 ${getStatusBgColor(item.progress)} shadow-xl text-surface-950`}
                            style={{
                                borderColor: index < sortedItems.length - 1 ? getStatusColor(sortedItems[index + 1].progress) : getStatusColor(item.progress)
                            }}
                        >
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black">{item.title}</h3>
                                <div className="font-bold">{item.details}</div>
                                {item.releaseNotes && (
                                    <a href={item.releaseNotes.toString()} className="mt-3">
                                        <Button className="w-fit">{item.buttontext}</Button>
                                    </a>
                                )}
                                <p className="font-light text-sm mt-3">{item.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const timelineItems: TimelineItem[] = [
    {
        date: "November 2023",
        title: "Waitlist Launch",
        details: "We launched our waitlist and started collecting emails for signups. Users who join the waitlist will be the first to know when we launch and will get closed alpha access in rolling stages. Not all users will be accepted into the closed alpha, and we will be prioritizing users who have been on the waitlist the longest",
        progress: "completed"
    },
    {
        title: "Launch of Closed Alpha",
        details: (
            <div>
                <p>
                    Closed alpha is here for selected users that signed up for the waitlist. Users have access to the following tools:
                    <ul className=" list-disc pl-3">
                        <li>Link in bio</li>
                        <li>Profile designer</li>
                        <li>Analytics</li>
                        <li>Your Story</li>
                    </ul>
                </p>
            </div>
        ),
        date: "November 24th, 2023",
        progress: "completed",
        buttontext: "Read the release notes",
        releaseNotes: "https://doras.to/blog/alpha-launch"
    },
    {
        date: "November 27th 2023",
        title: "Twitch Panel Integration",
        details: "We're adding a feature under the \"Share\" options to generate an image based on your profile to add it to your Twitch panels. It's automatically sized, and is perfect for directing your viewers to your profile.",
        progress: "completed",
        buttontext: "Read the blog post",
        releaseNotes: "/blog/twitch-panel"
    },
    {
        date: "December 22nd 2023",
        title: "Media Kit Launch",
        details: "Mediakit has launched in an alpha state supporting YouTube, Twitch, Twitter, Bluesky & Threads.",
        progress: "completed"
    },
    {
        title: "Launch of Public Beta",
        details: "When we open the floodgates and let all users in!",
        date: "December 2023"
    }
];

export { Timeline, timelineItems };
