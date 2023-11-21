import { getTextColorForBackground } from "@/lib/utils";
import type { ServerDataItem } from "@/server_types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface Props {
    user: ServerDataItem;
}
const StoryBlock: React.FC<Props> = ({ user }) => {
    const textColorSolid = getTextColorForBackground(user.theme.background);
    return (
        <div style={{ color: textColorSolid }}>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} className={"prose prose-base"}>
                {user.story.text}
            </Markdown>
        </div>
    );
};
export default StoryBlock;
