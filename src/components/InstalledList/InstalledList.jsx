import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import notFoundImage from "../../assets/image_not_found.png";
const InstalledList = ({ app, onUninstall }) => {
    console.log(app);
    const { id, image, title, downloads, ratingAvg, size } = app;
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 shadow-md transition rounded-xl p-4 mt-2">
            <div className="flex items-center gap-4">
                <img
                    src={image}
                    alt={title}
                    onError={(e) => {
                        e.currentTarget.src = notFoundImage;
                    }}
                    className="w-20 h-20 rounded-xl object-cover"
                />

                <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                        {title}
                    </h3>

                    <div className="flex gap-4 text-sm text-gray-500 mt-1">
                        <p className="flex text-green-400 items-center justify-center"><FiDownload /><span className="ml-1">{(downloads / 1000000).toFixed(1)}M</span></p>
                        <p className="flex text-orange-300 items-center justify-center gap-1"><FaStar />{ratingAvg}</p>
                        <p>{size} MB</p>
                    </div>
                </div>
            </div>
            <button
                onClick={() => onUninstall(id)}
                className="mt-4 md:mt-0 bg-green-400 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-500 transition"
            >
                Uninstall
            </button>
        </div>
    );
};

export default InstalledList;