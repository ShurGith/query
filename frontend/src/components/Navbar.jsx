
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-sky-600 p-4 w-full flex justify-between items-center text-white">
        <div className="w-1/5 flex items-center justify-center">
                <NavLink to="/" >
                    <Icon icon="simple-icons:react" className="text-5xl" />
                </NavLink>
            </div>
            <ul className="w-3/5 flex items-center justify-center gap-12 px-1 text-sky-200
             font-semibold">
                <li>
                    <NavLink to="/products" 
                        className={({ isActive }) => isActive ? "text-white" : "text-sky-200"}>
                        Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? "text-white" : "text-sky-200"}>
                        Home</NavLink>
                </li>
            </ul>
            <div className="w-1/5 flex items-center justify-center">
                <button className="">
                    <Icon icon="mdi:account-circle" className="text-5xl" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;