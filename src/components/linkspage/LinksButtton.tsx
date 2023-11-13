import type { Links } from "@/server_types";
import React from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
interface Props {
    text: string;
    href: string;
    bgColor: string;
    textColor: string;
    Icon: string;
    className: string;
    style: any;
    verifiedData: any;
    link: Links;
}

const LinksButton: React.FC<Props> = ({ text, href, bgColor, textColor, Icon, link, verifiedData, className, style }) => {
    function NotVerified() {
        console.log("NotVerified")
    }
    const colorClasses = {
        bgColor: `bg-${bgColor}`,
        textColor: `text-${textColor} dark:text-${textColor}`
    };
    let verified = verifiedData.find((e: any) => link.url?.includes(e.find))
    console.log('verified: ', verified);
    if (link.adult) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style} onClick={NotVerified}>
                        <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                        <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>18+</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <span>{link.url}</span>
                        <a className="w-full" href={link.url} target="_blank"  >
                            <button className={`w-full px-1 py-3 text-xl relative`}>
                                <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                                <span className={`block w-full text-center px-6 font-bold`}>{text}</span>
                            </button>
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        );
    } else if (verified && !verified.adult) {
        return (
            <a className="w-full" href={href} target="_blank"  >
                <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style}>
                    <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                    <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                </button>
            </a>
        );
    } else if (verified && verified.adult) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style} onClick={NotVerified}>
                        <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                        <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>18+</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <span>{link.url}</span>
                        <a className="w-full" href={link.url} target="_blank"  >
                            <button className={`w-full px-1 py-3 text-xl relative`}>
                                <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                                <span className={`block w-full text-center px-6 font-bold`}>{text}</span>
                            </button>
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        );
    } else {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style} onClick={NotVerified}>
                        <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                        <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Link Not verified</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <span>{link.url}</span>
                        <a className="w-full" href={link.url} target="_blank"  >
                            <button className={`w-full px-1 py-3 text-xl relative`}>
                                <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                                <span className={`block w-full text-center px-6 font-bold`}>{text}</span>
                            </button>
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
};

export default LinksButton;
