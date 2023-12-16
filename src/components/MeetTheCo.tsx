import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

interface User {
    username: string;
    bio?: string;
    name?: string;
    category: string;
}

const users: User[] = [
    { username: "tommerty", name: "Tommy Lundy", bio: "Founder, Head, Frontend Engineer, Designer, User Experience", category: "Administration" },
    { username: "trent", name: "Trent Hopton", bio: "Co-founder, Chief of Tech, Backend Engineer, React Engineer", category: "Administration" },
    { username: "lady-d-22", name: "Dannielle O'Sullivan", bio: "Chief of Content, Documentation & Blog Author", category: "Support, Docs & Content" },
    { username: "braaimeesterza", category: "Nua Testers" },
    { username: "no-classs", category: "Nua Testers" },
    { username: "ibailzy", category: "Nua Testers" } // Add more users as needed
];

const MeetTheCo: React.FC = () => {
    const [userData, setUserData] = useState<any[]>([]);

    useEffect(() => {
        Promise.all(
            users.map((user) =>
                fetch(`https://api.doras.to/user/${user.username}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => res.json())
            )
        ).then((usersData) => setUserData(usersData));
    }, []);

    const categories = [...new Set(users.map((user) => user.category))];

    return (
        <div className="pt-6 px-3">
            <h1 className="font-black text-center text-4xl text-black pb-3">
                Meet the team who are building <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#fd8583] from-[#fc987b]">Doras.to</span>
            </h1>
            {categories.map((category, index) => (
                <div key={index} className="text-center py-3 my-3 bg-gradient-to-r from-teal-200 to-lime-200 rounded-lg">
                    <h2 className="font-black text-2xl text-black">{category}</h2>
                    <div className="flex flex-wrap gap-3 mx-auto items-center justify-center">
                        {userData
                            .filter((user) => users.find((u) => u.username === user.username)?.category === category)
                            .map((user, index) => (
                                <div key={index} className={`bg-gradient-to-br from-teal-300 to-lime-300 shadow-lg p-1 rounded-xl ${category === "Nua Testers" ? "w-24" : "w-48"} text-center`}>
                                    <div className="flex flex-col items-center text-black">
                                        <img className="rounded-lg w-full h-full" src={user.pic} alt={user.username} />
                                        <div className="flex items-center gap-1">
                                            <h4 className={`items-center font-bold capitalize ${category === "Nua Testers" ? "text-xs" : ""}`}>{users.find((u) => u.username === user.username)?.name || user.displayname}</h4>
                                        </div>
                                        <p className="py-1 text-xs font-semibold text-left px-3">{users.find((u) => u.username === user.username)?.bio}</p>
                                        <div className="px-4 pb-1 w-full">
                                            <a href={"https://doras.to/" + user.username} target="_blank" rel="noreferrer">
                                                {category === "Nua Testers" ? (
                                                    <Button className="h-auto w-auto">
                                                        <Link size={13} />
                                                    </Button>
                                                ) : (
                                                    <Button className="w-full">Profile</Button>
                                                )}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MeetTheCo;
