import React, { useEffect, useState } from "react";

interface Partner {
    name: string;
    displayName: string;
    imageUrl: string;
    websiteUrl: string;
}

interface PartnersProps {
    partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
    return (
        <div>
            <h4 className="text-black text-center text-3xl font-black">Our Partners</h4>
            <div className="flex justify-between max-w-xl mx-auto pt-3 gap-3">
                {partners.map((partner, index) => (
                    <a key={index} href={partner.websiteUrl} target="_blank" className="flex flex-col items-center gap-1 group transition-all">
                        <img src={partner.imageUrl} className="w-12 h-12 rounded-full opacity-50 group-hover:opacity-100 duration-500" />
                        <p className="text-black font-black opacity-50 group-hover:opacity-100 duration-500">{partner.displayName}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

const PartnersContainer: React.FC = () => {
    const [partnersData, setPartnersData] = useState<Partner[]>([]);

    useEffect(() => {
        const partnerUsernames = ["desire", "gezel"]; // Add partner usernames as needed

        Promise.all(
            partnerUsernames.map((username) =>
                fetch(`https://api.doras.to/user/${username}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => res.json())
            )
        )
            .then((data) => {
                const partners = data.map((partner: any) => ({
                    name: partner.username,
                    displayName: partner.displayname,
                    imageUrl: partner.pic,
                    websiteUrl: `https://doras.to/${partner.username}`
                }));
                setPartnersData(partners);
            })
            .catch((error) => {
                console.error("Error fetching partner data:", error);
            });
    }, []);

    return <Partners partners={partnersData} />;
};

export default PartnersContainer;
