import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { WindowMockup } from "./WindowMockup";

export const BouncyCardsFeatures = () => {
    return (
        <section className="mx-auto text-surface-800">
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 bg-gradient-to-br from-teal-300 to-lime-300 shadow-lg pointer-events-none md:pointer-events-auto">
                    <div id="linkinbio" className="grid md:grid-cols-2 gap-4">
                        <div className="text-surface-900 mx-0 text-left">
                            <CardTitle className="!text-left ">For the dreamers and the doers</CardTitle>
                            <CardDescription className="!text-left">Social management platforms should be for anyone, and we wanted to capture that! It's designed for content creators, artists, entrepreneurs, and for anybody who just likes to organize their things.</CardDescription>
                        </div>
                        <div className="-z-10">
                            <div className="absolute bottom-0 left-1/2 top-0 -translate-y-0 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:-translate-y-10 group-hover:-rotate-6">
                                <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                    <img src="/blankbackdropyellowgreen.webp" className="w-3/4 group-hover:w-1/2 transition-all duration-700" />
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-1/2 top-0 group-hover:-top-10 translate-y-2 rounded-t-2xl bg-transparent p-4 transition-all duration-700 group-hover:-translate-y-10 group-hover:-rotate-6">
                                <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                                    <img src="/backdropitems1.webp" className="w-3/4 group-hover:w-1/2 transition-all duration-1000" />
                                </span>
                            </div>
                        </div>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 row-span-2 bg-gradient-to-tl from-violet-400 via-pink-300 to-lime-300 shadow-lg">
                    <CardTitle>Link In Bio</CardTitle>
                    <CardDescription>Link in bio is a tool for content creators to share all of their links in one place</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-20 -z-10 translate-y-8 scale-75 rounded-t-2xl bg-transparent p-4 transition-transform duration-700 group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            <WindowMockup />
                        </span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-gradient-to-br from-rose-400 to-orange-300 shadow-lg">
                    <CardTitle>Brand Accounts</CardTitle>
                    <CardDescription>Brand accounts allow you to manage multiple accounts from one place</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-28 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-500 group-hover:translate-y-2 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            <img src="/stats-mockup.webp" />
                        </span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-200 via-orange-200 to-yellow-300 shadow-lg">
                    <CardTitle>Link Shortener</CardTitle>
                    <CardDescription>Powerful link shortening tool to help your brand image</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-28 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-500 group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center w-full font-semibold text-indigo-50">
                            <img src="/linkshortener.webp" />
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-4 right-4 top-14 translate-y-24 rounded-t-2xl bg-transparent p-4 transition-transform duration-700 group-hover:translate-y-2 group-hover:rotate-[2deg]">
                        <span className="block text-center w-full font-semibold text-indigo-50">
                            <img src="/linkshortenerbutton.webp" />
                        </span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-gradient-to-r from-teal-200 to-lime-200 shadow-lg">
                    <CardTitle>Streamers</CardTitle>
                    <CardDescription>Helping streamers showcase their livestreams, no matter the platform</CardDescription>
                    <div className="absolute left-4 right-4 top-0 translate-y-2 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:-translate-y-2 group-hover:rotate-[2deg] -z-10">
                        <span className="block text-center w-full font-semibold text-indigo-50">
                            <img src="/livestreambackdrop.webp" />
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-4 right-4 top-14 translate-y-24 rounded-t-2xl bg-transparent p-4 transition-transform duration-700 group-hover:translate-y-16 group-hover:rotate-[2deg]">
                        <span className="block text-center w-full font-semibold text-indigo-50">
                            <img src="/livenowasset.webp" />
                        </span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg">
                    <div>
                        <CardTitle className="">Media Kits</CardTitle>
                        <CardDescription>Easily customizable kit to allow you to share your stats with potential sponsors</CardDescription>
                    </div>
                    <div className="absolute -z-10 bottom-0 left-4 right-4 top-16 translate-y-2 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:-translate-y-2 group-hover:rotate-[-2deg]">
                        <span className="block text-center w-full font-semibold text-indigo-50">
                            <img src="/mediakitbackdrop.webp" />
                        </span>
                    </div>
                    <div className="absolute bottom-0 right-36 top-36 scale-90 translate-y-20 rounded-t-2xl bg-transparent p-4 transition-transform duration-700 group-hover:translate-y-2 group-hover:rotate-6">
                        <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                            <img src="/twittercard.webp" />
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-36 top-36 scale-75 translate-y-20 rounded-t-2xl bg-transparent p-4 transition-transform duration-700 group-hover:translate-y-2 group-hover:-rotate-6">
                        <span className=" mx-auto text-center w-full font-semibold text-indigo-50">
                            <img src="/youtubecard.webp" />{" "}
                        </span>
                    </div>
                </BounceCard>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4"></div>
        </section>
    );
};

export const BounceCard = ({ className, children, href, whileHover = { scale: 0.95, rotate: "-1deg" } }: { className: string; href?: string; children: ReactNode; whileHover?: any }) => {
    return (
        <motion.a href={href} whileHover={whileHover !== "false" ? whileHover : undefined} className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}>
            {children}
        </motion.a>
    );
};

export const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <h3 className={`mx-auto text-center text-4xl font-black ${className}`}>{children}</h3>;
};

export const CardDescription = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <h3 className={` text-center text-xl font-semibold max-w-md ${className}`}>{children}</h3>;
};
