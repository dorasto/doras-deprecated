import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

const StackedCardTestimonials = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className="bg-gradient-to-l from-cyan-500 via-cyan-600 to-indigo-300 py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden rounded-xl text-white">
            <div className="p-4">
                <h3 className="text-5xl font-semibold">Words from our community</h3>
                <p className="my-4">Don't just take our word for it, hear what our community have to say!</p>
                <SelectBtns numTracks={testimonials.length} setSelected={setSelected} selected={selected} />
            </div>
            <Cards testimonials={testimonials} setSelected={setSelected} selected={selected} />
        </section>
    );
};

const SelectBtns = ({ numTracks, setSelected, selected }: { numTracks: number; setSelected: Dispatch<SetStateAction<number>>; selected: number }) => {
    return (
        <div className="flex gap-1 mt-8">
            {Array.from(Array(numTracks).keys()).map((n) => {
                return (
                    <button key={n} onClick={() => setSelected(n)} className="h-1.5 w-full bg-slate-300 relative">
                        {selected === n ? (
                            <motion.span
                                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                                initial={{
                                    width: "0%"
                                }}
                                animate={{
                                    width: "100%"
                                }}
                                transition={{
                                    duration: 5
                                }}
                                onAnimationComplete={() => {
                                    setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                                }}
                            />
                        ) : (
                            <span
                                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                                style={{
                                    width: selected > n ? "100%" : "0%"
                                }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

const Cards = ({ testimonials, selected, setSelected }: { testimonials: Testimonial[]; selected: number; setSelected: Dispatch<SetStateAction<number>> }) => {
    return (
        <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
            {testimonials.map((t, i) => {
                return <Card {...t} key={i} position={i} selected={selected} setSelected={setSelected} />;
            })}
        </div>
    );
};

const Card = ({
    imageSrc,
    description,
    name,
    title,
    position,
    selected,
    link,
    setSelected
}: Testimonial & {
    position: number;
    selected: number;
    setSelected: Dispatch<SetStateAction<number>>;
}) => {
    const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
    const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
    const background = position % 2 ? "black" : "white";
    const color = position % 2 ? "white" : "black";

    return (
        <motion.div
            initial={false}
            style={{
                zIndex: position,
                transformOrigin: "left bottom",
                background,
                color
            }}
            animate={{
                x: `${offset}%`,
                scale
            }}
            whileHover={{
                translateX: position === selected ? 0 : -3
            }}
            transition={{
                duration: 0.25,
                ease: "easeOut"
            }}
            onClick={() => setSelected(position)}
            className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between rounded-3xl"
        >
            <img src={imageSrc} className="w-24 h-24 rounded-full" />
            <p className="text-lg lg:text-xl font-light italic mb-8">"{description}"</p>
            <div>
                <span className="block font-semibold text-lg">{name}</span>
                <span className="block text-sm">{title}</span>
                <a href={`https://doras.to/${link}`}>
                    <Button className="bg-primary-500 hover:bg-primary-600">View Profile</Button>
                </a>
            </div>
        </motion.div>
    );
};

export default StackedCardTestimonials;

interface Testimonial {
    imageSrc?: string;
    title: string;
    name: string;
    description: string;
    link: string;
}

const testimonials = [
    {
        imageSrc: "https://s6.imgcdn.dev/vjeO2.png",
        description: "The features Gezel.io has for streamers and content creators is going make all of their lives so much easier. From Doras.to having all your links in a customisable format you like to having GezelBot do help you with your Discord server. Ultimately, it’s all so easy to use and saves you so much time and we all need time savers so we can create more content!",
        name: "Bongo1986",
        title: "Streamer and TikTok Creator",
        link: "bongo1986"
    },
    {
        imageSrc: "https://img.mystl.ink/profile_pics/045e7ae571c9dd5775d59ea3d3bf6570de681658_profile.png",
        description: "There is nothing better than having everything in the one place! Doras not only does this wonderfully, it has embedded stream features, which allows people to see when I'm live. It also helps my audience to find all my links in the one stunning self-designed, well-organized space! I can't recommend it enough, it's fully customizable, you can embed all your widgets with ease",
        name: "Bradyyy",
        title: "Content Creator",
        link: "brady"
    },
    {
        imageSrc: "https://ugc.production.linktr.ee/RyOCsbgvQn2MplFnBgY7_XQUelTV8YWhNpFud?io=true&size=avatar-v1_0",
        description: "Tools that help you connect with your fanbase are a must need for any streamer. The ability to easily showcase all my social media profiles and other links, while having the ability to control the look and feel of it is unlike any of the alternatives.",
        name: "The Warship",
        title: "Content Creator",
        link: "thewarship"
    }
];
