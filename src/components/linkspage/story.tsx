import type { ServerDataItem } from "@/server_types"; import Markdown from "react-markdown";
;

interface Props {
    user: ServerDataItem;
}
const StoryBlock: React.FC<Props> = ({ user }) => {
    return (
        <Markdown className={""}>{user.story.text}</Markdown>

    );
};
export default StoryBlock;
