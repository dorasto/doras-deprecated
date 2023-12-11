import type { Links, ServerDataItem } from "@/server_types";

interface Props {
    user: ServerDataItem;
    link: Links
}
const ImgBlock: React.FC<Props> = ({ user, link }) => {
    console.log('link: ', link);
    return (
        <img src={link.url}></img>
    )
}

export default ImgBlock;