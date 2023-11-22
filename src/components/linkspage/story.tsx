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
    const pros = textColorSolid == "black" ? "prose prose-base" : "prose prose-light"
    const customProseStyles = `.prose a{
        background-color:${user.theme.button};
        color:${getTextColorForBackground(user.theme.button)};
    }`;
    return (
        <div style={{ color: textColorSolid }}>
            <style>{customProseStyles}</style>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} className={`prose ${pros}`}>
                {user.story.text}
            </Markdown>
        </div>
    );
};
export default StoryBlock;
