import { useState } from "react";
import { motion } from "framer-motion";
import type { ServerDataItem } from "@/server_types";
import { getTextColorForBackground } from "@/lib/utils";

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
            <div style={{ backgroundColor: user.theme.button, color: getTextColorForBackground(user.theme.button) }} className="max-w-xl mx-auto flex fixed bottom-0 items-center flex-wrap gap-2 w-full place-content-center py-3 rounded-t-xl">
                {tabs.map((tab) => (
                    <Chip color={getTextColorForBackground(user.theme.button)} key={tab.id} text={tab.name} url={"/" + user.username + tab.url} selected={selected === "/" + user.username + tab.url} onTabClick={handleTabClick} />
                ))}
            </div>
            {loading && <LoadingCircle />}
        </>
    );
};

const Chip = ({ text, color, url, selected, onTabClick }: { text: string; color: string; url: string; selected: boolean; onTabClick: (tabUrl: string, check: boolean) => void }) => {
    const handleClick = () => {
        onTabClick(url, selected);
    };
    return (
        <a href={url} onClick={handleClick} style={{ color: color }} className={`${selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}>
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
