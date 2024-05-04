import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const navItems = <>
        <li className="p-2 rounded-lg" ><NavLink to="/">Home</NavLink></li>
        <li className="p-2 rounded-lg" ><NavLink to="/blog">Blog</NavLink></li>
        <li className="p-2 rounded-lg" ><NavLink to="/contact">Contact</NavLink></li>
        <li className="p-2 rounded-lg" ><NavLink to="/bookings">My Bookings</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 lg:h-28 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-3 text-xl">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/" className="btn btn-sm md:btn-md btn-outline bg-[#FF3811] text-white ">Appointment</Link>
                {
                    user?.email ?
                        <Link onClick={handleLogOut} className="btn btn-sm md:btn-md btn-outline bg-[#FF3811] text-white ">Log Out</Link> :

                        <Link to="/login" className="btn btn-sm md:btn-md btn-outline bg-[#FF3811] text-white ">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;