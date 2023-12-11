import type { Links } from "@/server_types";

interface Props {
    link: Links;
    className?: string;
}
const ImgBlock: React.FC<Props> = ({ link, className }) => {
    return <img src={link.url} className={`rounded-xl shadow-xl mx-auto ${className}`} />;
};

export default ImgBlock;
