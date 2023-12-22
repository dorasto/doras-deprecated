import React from "react";

export function WindowMockup() {
    return (
        <div className="mx-auto border-surface-950 bg-transparent border-[10px] rounded-[2.5rem] h-[600px] w-[300px] overflow-y-auto ">
            {/* <LinksRender user={user} /> */}
            <iframe className="w-full h-full" src="/doras"></iframe>
        </div>
    );
}
