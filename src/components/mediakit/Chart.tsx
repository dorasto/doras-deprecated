import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import type { ServerDataItem } from "@/server_types";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

interface Props {
    user: ServerDataItem;
}

export const options = {
    indexAxis: "y" as const,
    elements: {
        bar: {
            borderWidth: 2
        }
    },
    responsive: true,
    plugins: {
        legend: {
            position: "right" as const
        },
        title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart"
        }
    }
};

const ReachChart: React.FC<Props> = ({ user }) => {
    const mediakit = user.mediakit;
    let Twitch = mediakit.platforms.platforms.find((e) => e.type == "twitch");
    let Youtube = mediakit.platforms.platforms.find((e) => e.type == "youtube");
    let Twitter = mediakit.platforms.platforms.find((e) => e.type == "twitter");
    let Bluesky = mediakit.platforms.platforms.find((e) => e.type == "bluesky");
    let Threads = mediakit.platforms.platforms.find((e) => e.type == "threads");
    const platformList = [
        { name: "Youtube", data: Youtube?.subscribers || 0 },
        { name: "Threads", data: Threads?.followers || 0 },
        { name: "Twitch", data: Twitch?.followers || 0 },
        { name: "Twitter", data: Twitter?.followers || 0 },
        { name: "Bluesky", data: Bluesky?.followers || 0 }
    ];
    platformList.sort((a, b) => b.data - a.data);

    const data = {
        labels: platformList.map((platform) => platform.name),
        datasets: platformList.map((platform) => ({
            label: platform.name,
            data: [platform.data],
            borderColor: "#fff"
        }))
    };

    return <Bar options={options} data={data} />;
};

export default ReachChart;
