import { useLoaderData } from "react-router-dom";

const AppDetails = () => {
    const app = useLoaderData();

    return (
        <div>
            <p>{app.title}</p>
        </div>
    );
};

export default AppDetails;