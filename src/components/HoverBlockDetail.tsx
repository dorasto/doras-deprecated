import React from "react";
import { motion } from "framer-motion";
import { BounceCard, CardTitle, CardDescription } from "./BounceFeatures";
import Image from "@/components/Image";

interface Props {
    // Define the props for the component here
}

const HoverBlockDetail: React.FC<Props> = (props) => {
    // Define the component logic here

    return (
        <div className="grid gap-4">
            <BounceCard className="bg-gradient-to-br from-rose-400 to-orange-300 shadow-lg pointer-events-none md:pointer-events-auto" whileHover={{ scale: 1, rotate: "0deg" }}>
                <div id="linkinbio" className="grid md:grid-cols-2 gap-4">
                    <div className="text-surface-900">
                        <CardTitle className="!text-left ">Link In Bio - We've done it right</CardTitle>
                        <CardDescription className="!text-left mx-0">Link in bios should be for anyone, and we wanted to capture that! It's designed for content creators, artists, entrepreneurs, and for anybody who just likes to organize their things.</CardDescription>
                    </div>
                    <div className="-z-10">
                        <div className="absolute bottom-0 left-1/2 top-0 -translate-y-0 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:-translate-y-10 group-hover:-rotate-6">
                            <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                <Image src="/blankbackdropyellowgreen.webp" className="w-3/4 group-hover:w-1/2 transition-all duration-700" />
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 top-0 group-hover:-top-10 translate-y-2 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:-translate-y-10 group-hover:-rotate-6">
                            <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                <Image src="/backdropitems1.webp" className="w-3/4 group-hover:w-1/2 transition-all duration-1000" />
                            </span>
                        </div>
                    </div>
                </div>
            </BounceCard>
            <BounceCard className="bg-gradient-to-br from-teal-300 to-lime-300 shadow-lg pointer-events-none md:pointer-events-auto" whileHover={{ scale: 1, rotate: "0deg" }}>
                <div id="story" className="grid md:grid-cols-2 gap-4">
                    <div className="text-surface-900">
                        <CardTitle className="!text-left ">It's more than just clicks</CardTitle>
                        <CardDescription className="!text-left mx-0">Write your story and share who you are with the world. There's also full markdown support to format it however you'd like!</CardDescription>
                    </div>
                    <div className="-z-10">
                        <div className="absolute bottom-0 rotate-6 left-1/2 top-20 group-hover:-top-10 translate-y-2 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:translate-y-40 group-hover:-rotate-3">
                            <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                <Image src="/markdownblock.webp" className="w-3/4 transition-all duration-1000" />
                            </span>
                        </div>
                        <div className="absolute rotate-6 bottom-0 left-1/2 top-0 -translate-y-0 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:-translate-y-5 group-hover:-rotate-6">
                            <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                <Image src="/backdropwithmarkdown.webp" className="w-3/4 group-hover:w-1/2 transition-all duration-700" />
                            </span>
                        </div>
                    </div>
                </div>
            </BounceCard>
            <BounceCard className="bg-gradient-to-br from-indigo-300 to-amber-100 shadow-lg pointer-events-none md:pointer-events-auto" whileHover={{ scale: 1, rotate: "0deg" }}>
                <div id="shorten" className="grid md:grid-cols-2 gap-4">
                    <div className="text-surface-900">
                        <CardTitle className="!text-left ">Shorten any link you want</CardTitle>
                        <CardDescription className="!text-left mx-0">Sometimes you might have a link that's just too long, or you hate how there's no consistency between them. Let's fix that!</CardDescription>
                    </div>
                    <div className="-z-10">
                        <div className="absolute bottom-0 rotate-6 left-1/2 top-20 group-hover:-top-10 translate-y-2 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:translate-y-40 group-hover:-rotate-3">
                            <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                <Image src="/markdownblock.webp" className="w-3/4 transition-all duration-1000" />
                            </span>
                        </div>
                        <div className="absolute rotate-6 bottom-0 left-1/2 top-0 -translate-y-0 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:-translate-y-5 group-hover:-rotate-6">
                            <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                <Image src="/backdropwithmarkdown.webp" className="w-3/4 group-hover:w-1/2 transition-all duration-700" />
                            </span>
                        </div>
                    </div>
                </div>
            </BounceCard>
        </div>
    );
};

export default HoverBlockDetail;
