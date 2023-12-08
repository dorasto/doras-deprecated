import BioCheck from "./bio";
import type { ServerDataItem } from "@/server_types";
import * as lucide from "lucide-react";
import Image from "@/components/Image";
import { Tooltip } from "react-tooltip";

interface Props {
    img: string;
    user: ServerDataItem;
    textColorSolid: string;
}
//mask-circle
//mask-squircle
//mask-hexagon
//mask-hexagon-2
const BioBlock: React.FC<Props> = ({ img, user, textColorSolid }) => {
    fetch("https://speed.cloudflare.com/meta").then(json => json.json()).then(info => {
        fetch("https://api.doras.to/unique_views", {
            method: "POST", body: JSON.stringify({
                user_id: user.id,
                info: info
            })
        })
    })
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={img} className={"w-44 h-44 object-cover mask " + user.design.profile_pic_shape} />
            <div className="flex items-center mx-auto text-center">
                <h2 className="flex items-center text-4xl font-black" style={{ color: textColorSolid }}>
                    {user.displayname}
                    {user.badges.find(badge => badge.name == "verified") && user.account_type != "premium" && (
                        <div>
                            <lucide.BadgeCheck className="ml-1" data-tooltip-id="badgetooltips" data-tooltip-content="Verified" />
                        </div>
                    )}
                    {user.account_type == "premium" && (
                        <div>
                            <lucide.BadgeCheck className="ml-1" data-tooltip-id="badgetooltips" data-tooltip-content="Verified" />
                        </div>
                    )}
                    {user.access == "staff" && (
                        <div>
                            <lucide.Shield className="ml-1" data-tooltip-id="badgetooltips" data-tooltip-content="Doras staff" />
                        </div>
                    )}
                    {user.access == "admin" && (
                        <div>
                            <lucide.ShieldCheck className="ml-1" data-tooltip-id="badgetooltips" data-tooltip-content="Doras administrator" />
                        </div>
                    )}
                </h2>
                <Tooltip id="badgetooltips" className="text-sm font-bold px-3 rounded-full bg-surface-900 text-text-50" disableStyleInjection />
            </div>
            <BioCheck color={textColorSolid} bio={user?.bio || ""} />
        </div>
    );
};
export default BioBlock;
