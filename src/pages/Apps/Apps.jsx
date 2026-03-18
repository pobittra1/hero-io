import { useLoaderData } from "react-router-dom";
import EachApp from "../../components/EachApp/EachApp";
import { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Apps = () => {
    const apps = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const filteredApps = apps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));


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
                    <span className="font-bold text-gray-800">({filteredApps.length})</span> Apps Found
                </p>

                <form className="w-full md:w-auto">
                    <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => {
                            setLoading(true)
                            setSearch(e.target.value)
                            setTimeout(() => {
                                setLoading(false);
                            }, 500);
                        }}
                        placeholder="Search Apps..."
                        className="w-full md:w-72 px-4 py-2 border rounded-lg outline-none"
                    />
                </form>
            </div>
            {
                loading ? (
                    <div className="text-center mt-20 flex justify-center">
                        <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="magnifying-glass-loading"
                            wrapperStyle={{}}
                            wrapperClass="magnifying-glass-wrapper"
                            glassColor="#c0efff"
                            color="#e15b64"
                        />
                    </div>
                ) :
                    filteredApps.length > 0 ?
                        (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {
                                    filteredApps.map(app => <EachApp key={app.id} app={app}></EachApp>)
                                }
                            </div>
                        )
                        :
                        (
                            <div className="text-center text-gray-400 mt-20 text-3xl font-bold">
                                No App Found !
                            </div>
                        )
            }
        </div>
    );
};

export default Apps;