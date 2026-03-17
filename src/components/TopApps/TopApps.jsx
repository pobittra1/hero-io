import { use } from "react";
import EachApp from "../EachApp/EachApp";
import { Link } from "react-router-dom";

const TopApps = ({ appsPromise }) => {
    const appsData = use(appsPromise);
    const apps = appsData.slice(0, 8);

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 capitalize">
                        Trending Apps
                    </h2>
                    <p className="mt-2 text-gray-600 text-base sm:text-lg">
                        Explore all Trending Apps on The Market Developed by us
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.map(app => (
                        <EachApp key={app.id} app={app}></EachApp>
                    ))}
                </div>

            </div>
            <Link to={"/apps"}>  <button className="btn btn-primary block mx-auto mt-4 px-6 font-bold">Show All</button></Link>
        </div>
    );
};

export default TopApps;