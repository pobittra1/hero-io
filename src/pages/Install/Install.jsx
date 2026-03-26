import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Install = () => {
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
                        1 App Found
                    </h3>

                    <input
                        type="text"
                        placeholder="Sort by size"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 shadow-md transition rounded-xl p-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://via.placeholder.com/80"
                            alt="app"
                            className="w-20 h-20 rounded-xl object-cover"
                        />

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                App Title
                            </h3>

                            <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                <p className="flex text-green-400 items-center justify-center"><FiDownload /> 10k</p>
                                <p className="flex text-orange-300 items-center justify-center gap-1"><FaStar />4.5</p>
                                <p>25 MB</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="mt-4 md:mt-0 bg-green-400 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-500 transition"
                    >
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Install;