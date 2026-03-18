import { AiOutlineDownload } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import notFoundImage from "../../assets/image_not_found.png";

const EachApp = ({ app }) => {
    const { id, image, title, downloads, ratingAvg } = app;
    return (
        <Link to={`/app/${id}`}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center h-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                        e.currentTarget.src = notFoundImage;
                    }}
                />
                <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    {title}
                </p>
                <div className="flex justify-between w-full text-gray-600 mt-auto ">
                    <span className="flex items-center gap-1 text-green-400 bg-gray-100 px-2 rounded-sm">
                        <AiOutlineDownload />
                        {downloads >= 1000000
                            ? (downloads / 1000000).toFixed(1) + "M"
                            : downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 bg-amber-100 text-amber-400 px-2">
                        <FaStar />
                        {ratingAvg.toFixed(1)}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default EachApp;