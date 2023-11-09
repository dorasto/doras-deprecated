import { Cloud, CreditCard, Github, BookCheck, LifeBuoy, LogIn, LayoutPanelTop, ExternalLink, Activity, Film, Crown, User, UserPlus, Users } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDownCircle } from "lucide-react";

const items = [
    {
        icon: LayoutPanelTop,
        label: "Link In Bio",
        url: "⇧⌘P"
    },
    {
        icon: ExternalLink,
        label: "Link Shortener"
    },
    {
        icon: Activity,
        label: "Media Kits"
    },
    {
        icon: Film,
        label: "For Streamers"
    },
    {
        icon: Users,
        label: "Brand Accounts"
    },
    {
        separator: true
    },
    {
        icon: Crown,
        label: "Doras Pro"
    },
    {
        separator: true
    },
    {
        icon: BookCheck,
        label: "Support"
    },
    {
        icon: LifeBuoy,
        label: "Documentation"
    },
    {
        icon: LogIn,
        label: "Login/Signup"
    }
];

export function DropdownMenuNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <ChevronDownCircle />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto bg-gradient-to-br from-primary-300 to-primary-200">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.separator && <DropdownMenuSeparator />}
                        {item.label && (
                            <DropdownMenuItem disabled={item.disabled}>
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.label}</span>
                            </DropdownMenuItem>
                        )}
                        {item.subItems && (
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    <span>{item.label}</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <DropdownMenuItem key={subIndex}>
                                                <subItem.icon className="mr-2 h-4 w-4" />
                                                <span>{subItem.label}</span>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        )}
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
