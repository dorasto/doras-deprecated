"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../../components/ui/navigation-menu";
import { Crown } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Link In Bio",
        href: "#linkinbio",
        description: "Build the most customizable link in bio! Include your socials, videos, livestreams, music, and more."
    },
    {
        title: "Story",
        href: "#story",
        description: "Write a full article about yourself will full markdown support to showcase on your link in bio."
    },
    {
        title: "Link Shortener",
        href: "#linkshortener",
        description: "Create easy to remember links for any site to keep your brand in the spotlight."
    },
    {
        title: "Brand Accounts",
        href: "#brandaccounts",
        description: "Create multiple accounts and give access to your team to help manage your links."
    },
    {
        title: "Streamer Tools",
        href: "#streamertools",
        description: "A suite of tools to help streamers grow their audience and make money."
    },
    {
        title: "Media Kits",
        href: "#mediakits",
        description: "Create a media kit to showcase your brand and make it easy for sponsors to work with you."
    }
];

export function NavMenuDesktop() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Open By Design</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="#pricing">
                                        <Crown className="w-12 h-12 mb-2 text-accent" />
                                        <div className="mb-2 text-lg font-black">Doras Pro</div>
                                        <p className="text-sm font-bold leading-tight text-muted-foreground">The Ultimate tools for the Ultimate users</p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="#introduction" title="Introduction">
                                We've built tools for creators, streamers, and brands to help them grow their audience and make money.
                            </ListItem>
                            <ListItem href="https://blog.doras.to/our-story" title="The Story Behind">
                                Learn more about us, and why we've built Doras.
                            </ListItem>
                            <ListItem href="#opensource" title="Community Driven">
                                Fully open source, and built with the community in mind.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Incredible Tools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem key={component.title} title={component.title} href={component.href}>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="https://docs.doras.to/">
                        <NavigationMenuLink className={`hover:text-surface-900 ${navigationMenuTriggerStyle()}`}>Documentation</NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-400 hover:text-white focus:bg-accent focus:text-white", className)} {...props}>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
