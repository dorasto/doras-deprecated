import React from "react";

export function WindowMockup({ user }: Props) {
    const [src, Setsrc] = React.useState("/" + user.username);
    addEventListener("message", async function (event) {
        if (event.data.Theme_update) {
            Setsrc("/" + user.username + "?random=" + Math.random());
        }
        if (event.data.Design_update) {
            Setsrc("/" + user.username + "?random=" + Math.random());
        }
        if (event.data.Bio_update) {
            Setsrc("/" + user.username + "?random=" + Math.random());
        }
        if (event.data.DisplayName_update) {
            Setsrc("/" + user.username + "?random=" + Math.random());
        }
    });
    return (
        <div className="mx-auto border-surface-950 bg-transparent border-[10px] rounded-[2.5rem] h-[600px] w-[300px] overflow-y-auto ">
            {/* <LinksRender user={user} /> */}
            <iframe className="w-full h-full" src="https://mystl.ink/mystlink"></iframe>
        </div>
    );
}
