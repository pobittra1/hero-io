import { FaGithub } from "react-icons/fa";
import logoImg from "../../assets/logo.png"
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-50 shadow-sm sticky top-0 z-1000">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 stroke-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu text-gray-50 menu-sm dropdown-content bg-base-100 rounded-box z-999 mt-3 w-52 p-2 shadow-lg">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>
                                Home
                            </NavLink>
                            <NavLink to="/apps" className={({ isActive }) => isActive ? "text-primary" : ""}>
                                Apps
                            </NavLink>
                            <NavLink to="/install" className={({ isActive }) => isActive ? "text-primary" : ""}>
                                Installation
                            </NavLink>
                        </ul>
                    </div>
                    <NavLink to={"/"}>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img
                                className="w-8 h-8 object-contain"
                                src={logoImg}
                                alt="Logo image here"
                            />

                            <p className="text-xl font-bold text-green-400">
                                Hero<span className="text-primary">.Io</span>
                            </p>
                        </div>
                    </NavLink>
                </div>
                <div className="navbar-center text-gray-800 hidden lg:flex">
                    <ul className="flex gap-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-800"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/apps"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-800"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/install"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-800"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"https://github.com/pobittra1"}><a className="btn btn-primary">  <FaGithub /> Contribute</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;