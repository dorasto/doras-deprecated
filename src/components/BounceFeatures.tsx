import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { WindowMockup } from "./WindowMockup";

const user = "doras";

export const BouncyCardsFeatures = () => {
    return (
        <section className="mx-auto text-surface-800">
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard href="#features" className="col-span-12 md:col-span-8 row-span-2 bg-gradient-to-tl from-violet-400 via-pink-300 to-lime-300 shadow-lg">
                    <CardTitle>Link In Bio</CardTitle>
                    <CardDescription>Link in bio is a tool for content creators to share all of their links in one place</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            <WindowMockup user={user} />
                        </span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-gradient-to-br from-rose-400 to-orange-300 shadow-lg">
                    <CardTitle>Brand Accounts</CardTitle>
                    <CardDescription>Brand accounts allow you to manage multiple accounts from one place</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            <img src="./stats-mockup.webp" />
                        </span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-200 via-orange-200 to-yellow-300 shadow-lg">
                    <CardTitle>Link Shortener</CardTitle>
                    <CardDescription>Powerful link shortening tool to help your brand image</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">FEATURE DEMO HERE</span>
                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard href="#features" className="col-span-12 md:col-span-8 bg-gradient-to-r from-teal-200 to-lime-200 shadow-lg">
                    <CardTitle>Things for streamers</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-emerald-50">FEATURE DEMO HERE</span>
                    </div>
                </BounceCard>
                <BounceCard href="#features" className="col-span-12 md:col-span-4 bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg">
                    <CardTitle>Media Kits</CardTitle>
                    <CardDescription>Easily customizable kit to allow you to share your stats with potential sponsors</CardDescription>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-transparent p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-red-50">FEATURE DEMO HERE</span>
                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children, href }: { className: string; href?: string; children: ReactNode }) => {
    return (
        <motion.a href={href} whileHover={{ scale: 0.95, rotate: "-1deg" }} className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}>
            {children}
        </motion.a>
    );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
    return <h3 className="mx-auto text-center text-3xl font-bold">{children}</h3>;
};
const CardDescription = ({ children }: { children: ReactNode }) => {
    return <h3 className="mx-auto text-center text-xl font-semibold max-w-md">{children}</h3>;
};
