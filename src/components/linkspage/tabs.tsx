import { useState } from "react";
import { motion } from "framer-motion";
import type { ServerDataItem } from "@/server_types";

interface Props {
    user: ServerDataItem;
    url: string;
}

const tabs = [
    {
        id: 0,
        name: "Home",
        url: ""
    },
    {
        id: 1,
        name: "Story",
        url: "/story"
    }
];

const ChipTabs = ({ user, url }: Props) => {
    const [selected, setSelected] = useState(url);
    const [loading, setLoading] = useState(false);

    const handleTabClick = async (tabUrl: string, check: boolean) => {
        if (check) return;
        setLoading(true);
        setSelected(tabUrl);
    };
    return (
        <>
            <div className="max-w-xl mx-auto flex fixed bottom-0 items-center flex-wrap gap-2 bg-red-500 w-full place-content-center py-3 rounded-t-xl">
                {tabs.map((tab) => (
                    <Chip key={tab.id} text={tab.name} url={"/" + user.username + tab.url} selected={selected === "/" + user.username + tab.url} onTabClick={handleTabClick} />
                ))}
            </div>
            {loading && <LoadingCircle />}
        </>
    );
};

const Chip = ({ text, url, selected, onTabClick }: { text: string; url: string; selected: boolean; onTabClick: (tabUrl: string, check: boolean) => void }) => {
    const handleClick = () => {
        onTabClick(url, selected);
    };
    return (
        <a href={url} onClick={handleClick} className={`${selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}>
            <span className="relative z-10">{text}</span>
        </a>
    );
};

const LoadingCircle = () => {
    return (
        <div className="flex items-center ml-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span className="ml-2">Loading...</span>
        </div>
    );
};

export default ChipTabs;
