import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

const Root = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const loaderTemplate = (
        <div className="flex justify-center items-center h-screen">
            <Circles height="80" width="80" color="#3b82f6" />
        </div>
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            loaderTemplate
        );
    }

    return (
        <div className="max-w-300 m-auto bg-gray-50 shadow-sm text-gray-800">
            <Navbar></Navbar>
            {navigation.state === "loading" ? (
                loaderTemplate
            ) : (
                <Outlet />
            )}

            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;