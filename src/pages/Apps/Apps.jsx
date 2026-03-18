import { useLoaderData } from "react-router-dom";
import EachApp from "../../components/EachApp/EachApp";

const Apps = () => {
    const apps = useLoaderData();


    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-3 text-gray-800">
                    Our App Applications
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Explore all apps on The Market that are developed by us. We code for millions.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

                <p className="text-gray-600 text-2xl">
                    <span className="font-bold text-gray-800">({apps.length})</span> Apps Found
                </p>

                <form className="w-full md:w-auto">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Apps..."
                        className="w-full md:w-72 px-4 py-2 border rounded-lg outline-none"
                    />
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    apps.map(app => <EachApp key={app.id} app={app}></EachApp>)
                }
            </div>
        </div>
    );
};

export default Apps;