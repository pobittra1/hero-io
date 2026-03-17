import { FaGithub } from "react-icons/fa";
import logoImg from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm font-black dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Apps</a></li>
                            <li><a>Installation</a></li>
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
                <div className="navbar-center text-black hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <NavLink to={"/home"}><li><a>Home</a></li></NavLink>
                        <NavLink to={"/apps"}><li><a>Apps</a></li></NavLink>
                        <NavLink to={"/installation"}><li><a>Installation</a></li></NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">  <FaGithub /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;