const State = () => {
    return (
        <div className="bg-linear-to-t from-purple-400 to-purple-600 py-16">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 capitalize">
                        trusted by million's build for you
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-8/12 mx-auto">
                    <div>
                        <p className="capitalize text-gray-50">total downloads</p>
                        <h3 className="text-4xl font-extrabold text-gray-50">23.57M</h3>
                        <p className="mt-2 text-gray-50 capitalize">21% more than last month</p>
                    </div>
                    <div>
                        <p className="capitalize text-gray-50">total reviews</p>
                        <h3 className="text-4xl font-extrabold text-gray-50">527K+</h3>
                        <p className="mt-2 text-gray-50 capitalize">46% more than last month</p>
                    </div>
                    <div>
                        <p className="capitalize text-gray-50">active apps</p>
                        <h3 className="text-4xl font-extrabold text-gray-50">70+</h3>
                        <p className="mt-2 text-gray-50 capitalize">28 more than last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;