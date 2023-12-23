import type { Links } from "@/server_types";
import React from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "../ui/button";
interface Props {
    id: string;
    text: string;
    href: string;
    bgColor: string;
    textColor?: string;
    Icon: string;
    className: string;
    style: any;
    verifiedData: any;
    link: Links;
}
function ClickButton(id: any, link: any) {
    fetch("/api/update_clicks/" + id + "/" + link.id);
}

const LinksButton: React.FC<Props> = ({ id, text, href, bgColor, textColor, Icon, link, verifiedData, className, style }) => {
    const colorClasses = {
        bgColor: `bg-${bgColor}`,
        textColor: `text-${textColor} dark:text-${textColor}`
    };
    let verified = verifiedData.find((e: any) => link.url?.includes(e.find));
    if (verified && link.adult) {
        return <LinksButtonDialog id={id} title={"18+ Warning Ahead"} className={className} Icon={Icon} style={style} colorClasses={colorClasses} link={link} text={text} />;
    }
    if (link && link.adult) {
        return <LinksButtonDialog id={id} title={"18+ Warning Ahead"} className={className} Icon={Icon} style={style} colorClasses={colorClasses} link={link} text={text} />;
    }
    if (verified && !verified.adult) {
        return (
            <a className="w-full" href={href} target="_blank" onClick={() => ClickButton(id, link)}>
                <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style}>
                    <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                    <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                </button>
            </a>
        );
    }
    if (verified && verified.adult) {
        return <LinksButtonDialog id={id} title={"18+"} className={className} Icon={Icon} style={style} colorClasses={colorClasses} link={link} text={text} />;
    } else {
        return <LinksButtonDialog id={id} title={"This link has not been verified by Doras"} className={className} Icon={Icon} style={style} colorClasses={colorClasses} link={link} text={text} />;
    }
};
interface PropsDialog {
    id: string;
    title: string;
    className: any;
    Icon: any;
    style: any;
    colorClasses: any;
    link: any;
    text: string;
}

const LinksButtonDialog: React.FC<PropsDialog> = ({ id, title, className, Icon, style, colorClasses, link, text }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style}>
                    <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                    <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-surface-800 dark:bg-surface-800 text-white dark:text-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        <a target="_blank" href="https://docs.doras.to/links/#warnings">
                            Learn more
                        </a>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div>
                        <p className="border-2 border-surface-600 px-3 py-1 rounded-xl font-bold text-center">{link.url}</p>
                    </div>
                    <a className="w-full text-center" href={link.url} target="_blank" onClick={() => ClickButton(id, link)}>
                        {/* <button className={`w-full px-1 py-3 text-xl relative`}>
                            <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                            <span className={`block w-full text-center px-6 font-bold`}>{text}</span>
                        </button> */}
                        <Button variant="outline" className="mx-auto">
                            Continue to site
                        </Button>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LinksButton;
