import { getTextColorForBackground } from "@/lib/utils";
import type { ServerDataItem } from "@/server_types"; import Markdown from "react-markdown";
;

interface Props {
    user: ServerDataItem;
}
const StoryBlock: React.FC<Props> = ({ user }) => {
    const textColorSolid = getTextColorForBackground(user.theme.background);
    return (
        <div style={{ color: textColorSolid }}>
            <Markdown className={""}>{user.story.text}</Markdown>
        </div>

    );
};
export default StoryBlock;