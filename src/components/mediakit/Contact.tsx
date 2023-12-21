import React, { useState } from "react";
import type { ServerDataItem } from "@/server_types";
import { Button } from "../ui/button";
import { IconBrandDiscord, IconMail } from "@tabler/icons-react";

interface Props {
    user: ServerDataItem;
}

const Contact: React.FC<Props> = ({ user }) => {
    const [emailText, setEmailText] = useState<string>("Email");
    const [discordText, setDiscordText] = useState<string>("Discord");

    const handleClick = async (text: string, setText: React.Dispatch<React.SetStateAction<string>>) => {
        if (text === "Email") {
            setText(user.mediakit.contact.email);
        } else if (text === "Discord") {
            setText(user.mediakit.contact.discord_username);
        } else {
            try {
                await navigator.clipboard.writeText(text);
                setText("Copied to clipboard!");

                setTimeout(() => {
                    setText(text); // Reset the text back to its original value
                }, 5000); // Wait for 5 seconds (5000 milliseconds)
            } catch (error) {
                console.error("Failed to copy text to clipboard:", error);
            }
        }
    };
    return (
        <div className="flex flex-col gap-2">
            <Button variant="secondary" className="dark:bg-primary-500 bg-primary-500 flex gap-1" onClick={() => handleClick(emailText, setEmailText)}>
                <IconMail />
                <p>{emailText}</p>
            </Button>
            <Button variant="secondary" className="dark:bg-primary-500 bg-primary-500 flex gap-1" onClick={() => handleClick(discordText, setDiscordText)}>
                <IconBrandDiscord />
                <p>{discordText}</p>
            </Button>
        </div>
    );
};

export default Contact;
