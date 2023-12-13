import type { Links } from "@/server_types";

interface Props {
    link: Links;
}
const ImgBlock: React.FC<Props> = ({ link }) => {
    let size = "w-full";
    if (link.options?.size == 20) {
        size = "w-1/6";
    }
    if (link.options?.size == 40) {
        size = "w-2/6";
    }
    if (link.options?.size == 60) {
        size = "w-4/6";
    }
    if (link.options?.size == 80) {
        size = "w-5/6";
    }
    if (link.options?.size == 100) {
        size = "w-full";
    }
    return <img src={link.url} className={`rounded-xl shadow-xl mx-auto ${size}`} />;
};

export default ImgBlock;
