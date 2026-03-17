import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";
import State from "../State/State";
import { Suspense } from "react";
import TopApps from "../TopApps/TopApps";

const appsPromise = fetch("/apps-data.json")
    .then(res => res.json());


const Hero = () => {
    return (
        <div className="py-4">
            <div className="hero bg-gray-50 shadow-sm text-gray-800 min-h-10/12">
                <div className="hero-content text-center">
                    <div>
                        <div className="max-w-md mx-auto">
                            <h1 className="text-5xl font-bold capitalize">we build <span className="text-primary">productive</span> apps</h1>
                            <p className="py-6">
                                Hero.Io lets you design, launch, and scale mobile & web apps in minutes. Manage tasks, track analytics, and delight your users — all in one platform.
                            </p>
                            <div className="flex gap-2 justify-center">
                                <Link to={"https://play.google.com/"}> <button className="btn btn-outline"><FaGooglePlay /> Google Play</button></Link>
                                <Link to={"https://apps.apple.com/"}> <button className="btn btn-outline"><FaAppStoreIos /> App Store</button></Link>
                            </div>
                            <div className="mt-4">
                                <img src={heroImg} alt="hero image here" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* state section is here */}
            <State></State>
            <Suspense fallback={<span className="text-center loading loading-dots loading-xl"></span>}>
                <TopApps appsPromise={appsPromise}></TopApps>
            </Suspense>
        </div>
    );
};

export default Hero;