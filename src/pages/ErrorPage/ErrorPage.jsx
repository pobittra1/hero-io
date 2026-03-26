import pageNotFound from "../../assets/error-404.png";
const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="text-center animate-fadeIn p-8">
                <img src={pageNotFound} alt="Page Not Found !" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Oops, Page Not Found!
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    The page your are looking for in not availabe.
                </p>
                <div>
                    <a href="/" className="btn btn-primary btn-lg">
                        Go Back!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;