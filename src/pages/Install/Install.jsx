import { useLoaderData } from "react-router-dom";
import InstalledList from "../../components/InstalledList/InstalledList";
import { useEffect, useState } from "react";
import { getStoredInstalledApp } from "../../utilities/addToDB";

const Install = () => {
    const appsData = useLoaderData();
    console.log(appsData);
    const [installedApps, setInstalledApps] = useState([]);
    console.log(installedApps);


    useEffect(() => {
        const lStorageId = getStoredInstalledApp();
        const numData = lStorageId.map(id => parseInt(id));
        const installedData = appsData.filter(app => numData.includes(app.id));
        setInstalledApps(installedData);
    }, [appsData]);
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                    Your Installed Apps
                </h2>
                <p className="text-gray-500 mt-1">
                    Explore all trending apps on the market developed by us
                </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">
                        {installedApps.length} App Found
                    </h3>

                    <input
                        type="text"
                        placeholder="Sort by size"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
                <div>
                    {
                        installedApps.map(app => <InstalledList key={app.id} app={app}></InstalledList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Install;