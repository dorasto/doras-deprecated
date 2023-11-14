import React from "react";
import { Button } from "./ui/button";

interface TimelineItem {
    date?: string;
    title: string;
    details: string | React.ReactNode;
    buttontext?: string;
    releaseNotes?: URL;
    versionName: "idea" | "0.0.1" | "0.1.0";
    progress?: "completed" | "upcoming";
}

interface Props {
    items: TimelineItem[];
}

const getVersion = (versionName: TimelineItem["versionName"]) => {
    const versionTextMap: Record<TimelineItem["versionName"], string> = {
        idea: "Idea",
        "0.0.1": "Closed Alpha",
        "0.1.0": "Public Beta"
    };
    return versionTextMap[versionName];
};

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
    const groupedItems = items.reduce(
        (acc, item) => {
            if (!acc[item.versionName]) {
                acc[item.versionName] = [item];
            } else {
                acc[item.versionName].push(item);
            }
            return acc;
        },
        {} as Record<TimelineItem["versionName"], TimelineItem[]>
    );

    // Sort the items based on their progress status
    const sortedItems = Object.values(groupedItems).map((items) =>
        items.sort((a, b) => {
            if (a.progress === "completed" && b.progress !== "completed") {
                return -1;
            } else if (a.progress !== "completed" && b.progress === "completed") {
                return 1;
            } else {
                return 0;
            }
        })
    );

    return (
        <div className="relative">
            {sortedItems.map((items, index) => (
                <div key={index} className={`border-s-0 h-auto space-x-3 ${getStatusColor(items[0].progress)}`}>
                    <div className="p-3">
                        <h2 className="mb-3 text-xl font-black leading-none text-surface-900 capitalize">{getVersion(items[0].versionName)}</h2>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`my-4 p-3 rounded-xl border-4 ${getStatusBgColor(item.progress)} shadow-xl text-surface-950`}
                                style={{
                                    borderColor: index < items.length - 1 ? getStatusColor(items[index + 1].progress) : getStatusColor(item.progress)
                                }}
                            >
                                <div className="flex flex-col gap-2">
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
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const timelineItems: TimelineItem[] = [
    {
        date: "October 2023",
        title: "First Launch",
        details: "Built the initial development branch and first commits were made",
        versionName: "idea",
        progress: "completed"
    },
    {
        date: "November 2023",
        title: "Waitlist Launch",
        details: "We launched our waitlist and started collecting emails for signups. Users who join the waitlist will be the first to know when we launch and will get closed alpha access in rolling stages. Not all users will be accepted into the closed alpha, and we will be prioritizing users who have been on the waitlist the longest",
        versionName: "idea",
        progress: "completed"
    },
    {
        title: "Link In Bio",
        details: "Link in bio ready for production to allow users to sign in and create a link in bio page",
        versionName: "0.0.1",
        progress: "upcoming"
    },
    {
        title: "Your Story",
        details: "WYSIWYG editor for creating your story page",
        versionName: "0.0.1",
        progress: "upcoming"
    },
    {
        title: "Brand Accounts",
        details: "Brand Accounts section is fully completed and ready for launch",
        versionName: "0.1.0",
        progress: "upcoming"
    }
];

export { Timeline, timelineItems };
