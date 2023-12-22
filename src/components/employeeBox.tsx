import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "lucide-react";
import { companyStructure } from "@/lib/companyStructure"; // import the companyStructure

interface EmployeeBoxProps {
    user: string;
}

const EmployeeBox: React.FC<EmployeeBoxProps> = ({ user }) => {
    const [userDetail, setUserDetail] = useState<any | null>(null);
    const [userData, setUserData] = useState<any | null>(null);

    useEffect(() => {
        const detail = companyStructure.find((u) => u.username === user);
        setUserDetail(detail);
    }, [user]);

    useEffect(() => {
        if (userDetail) {
            fetch(`https://api.doras.to/user/${userDetail.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => res.json())
                .then((data) => setUserData(data));
        }
    }, [userDetail]);

    return (
        <div className="">
            {userDetail && userData && (
                <div className="flex flex-col gap-0 items-center text-black">
                    <img className="rounded-lg w-36 my-0" src={userData.pic} alt={`picture of ${userDetail.username}`} />
                    <p className="text-black my-0 font-bold">{userDetail.name}</p>
                    <p className="text-text-700 my-0 font-bold text-lg">{userDetail.bio}</p>
                    <Button>
                        <a href={`https://doras.to/${userDetail.username}`} className="nocss" target="_blank" rel="noreferrer">
                            Profile
                        </a>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default EmployeeBox;
