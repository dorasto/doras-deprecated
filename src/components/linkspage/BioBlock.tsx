import { downloadImageUser } from "@/supabase";
import BioCheck from "./bio";
import type { ServerDataItem } from "@/server_types";
import * as lucide from "lucide-react";
import Image from "@/components/Image";

interface Props {
    user: ServerDataItem;
    textColorSolid: string;
}
const BioBlock: React.FC<Props> = ({ user, textColorSolid }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image src={downloadImageUser(user.pic)} className={"w-44 h-44 object-cover mask " + user.design.profile_pic_shape} />
            <div className="flex items-center mx-auto text-center">
                <h2 className="flex items-center text-4xl font-black" style={{ color: textColorSolid }}>
                    {user.displayname}
                    {user.account_type == "premium" && (
                        <div className="tooltip" data-tip="Premium">
                            <lucide.BadgeCheck className="ml-1" />
                        </div>
                    )}
                    {user.account_type == "staff" && (
                        <div className="tooltip tooltip-primary tooltip-left z-50" data-tip="Staff">
                            <lucide.ShieldCheck className="ml-1" />
                        </div>
                    )}
                </h2>
            </div>
            <BioCheck color={textColorSolid} bio={user?.bio || ""} />
        </div>
    );
};
export default BioBlock;
