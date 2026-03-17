const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="text-center animate-fadeIn">
                <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/" className="btn btn-primary btn-lg">
                        Go Home
                    </a>
                    <a href="/contact" className="btn btn-outline btn-lg">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;