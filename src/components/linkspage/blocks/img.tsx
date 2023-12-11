import type { Links } from "@/server_types";

interface Props {
    link: Links
}
const ImgBlock: React.FC<Props> = ({ link }) => {
    return (
        <img src={link.url}></img>
    )
}

export default ImgBlock;