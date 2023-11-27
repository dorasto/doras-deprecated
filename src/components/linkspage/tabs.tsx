import { useState } from "react";
import { motion } from "framer-motion";
import type { ServerDataItem } from "@/server_types";
import { getTextColorForBackground } from "@/lib/utils";
export type ILinksPageTabs = {
    id: number;
    name: string;
    url: string;
    disabled: boolean;
}
interface Props {
    user: ServerDataItem;
    url: string;
    tabs: ILinksPageTabs[];
}

const ChipTabs = ({ user, url, tabs }: Props) => {
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
                {tabs.map((tab) => {
                    if (tab.disabled) {
                        return;
                    }
                    return <Chip color={getTextColorForBackground(user.theme.button)} key={tab.id} text={tab.name} url={"/" + user.username + tab.url} selected={selected === "/" + user.username + tab.url} onTabClick={handleTabClick} />;
                })}
            </div>
        </>
    );
};

const Chip = ({ text, color, url, selected, onTabClick }: { text: string; color: string; url: string; selected: boolean; onTabClick: (tabUrl: string, check: boolean) => void }) => {
    const handleClick = () => {
        onTabClick(url, selected);
    };
    return (
        <a
            href={url}
            onClick={handleClick}
            style={{ color: color }}
            className={`
        ${selected ? "text-white border-b-2 border-b-surface-300" : ""}
        rounded-none border-b-2 border-b-surface-600 text-sm transition-colors font-bold px-2.5 py-0.5 relative`}
        >
            <span className="relative z-10">{text}</span>
        </a>
    );
};

export default ChipTabs;
