import React from "react";
import Image from "@/components/Image";

interface DiffProps {
    image1: string;
    image2: string;
}

const Diff: React.FC<DiffProps> = ({ image1, image2 }) => {
    return (
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
                <Image src={image1} />
            </div>
            <div className="diff-item-2">
                <Image src={image2} />
            </div>
            <div className="diff-resizer"></div>
        </div>
    );
};

export default Diff;
