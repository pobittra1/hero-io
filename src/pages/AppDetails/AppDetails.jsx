import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import notFoundImage from "../../assets/image_not_found.png";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { addToDB, getStoredInstalledApp } from "../../utilities/addToDB";
import { useEffect, useState } from "react";





const AppDetails = () => {
    const app = useLoaderData();
    const { id, image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = app;
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const lStorageData = getStoredInstalledApp();
        const numData = lStorageData.map(id => parseInt(id));
        setInstalledApps(numData);
    }, []);

    const isInstalled = installedApps.includes(id);

    const handleInstalledApp = (id) => {
        addToDB(id);

        setInstalledApps(prev => [...prev, id]);


    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8 bg-white border-b p-6">
                <div className="w-full md:w-1/3">
                    <img
                        src={image}
                        alt={title}
                        onError={(e) => {
                            e.currentTarget.src = notFoundImage;
                        }}
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="border-b pb-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            SmPlan: {title}
                        </h2>
                        <p className="text-gray-500">
                            Developed by{" "}
                            <span className="text-blue-600 font-medium">
                                {companyName}
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-6 my-6">
                        <div className="p-2 text-center">
                            <FiDownload className="text-2xl mx-auto text-green-500 mb-1" />
                            <p className="text-sm text-gray-500">Downloads</p>
                            <h3 className="font-semibold text-lg">
                                {(downloads / 1000000).toFixed(1)}M
                            </h3>
                        </div>
                        <div className="p-2 text-center">
                            <FaStar className="text-2xl mx-auto text-yellow-500 mb-1" />
                            <p className="text-sm text-gray-500">Avg Rating</p>
                            <h3 className="font-semibold text-lg">{ratingAvg}</h3>
                        </div>
                        <div className="p-2 text-center">
                            <MdReviews className="text-2xl mx-auto text-purple-500 mb-1" />
                            <p className="text-sm text-gray-500">Total Reviews</p>
                            <h3 className="font-semibold text-lg">
                                {(reviews / 1000).toFixed(1)}K
                            </h3>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => handleInstalledApp(id)}
                            disabled={isInstalled}
                            className={`w-full md:w-auto px-6 py-3 rounded-xl font-semibold transition ${isInstalled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-400 text-white hover:bg-green-500"}`}> {isInstalled ? "Installed" : "Install Now"} ({size} MB)
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10 pb-16 p-6 border-b">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    App Ratings Overview
                </h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ratings} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis reversed type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#F0B100" animationDuration={800} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-4 p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AppDetails;