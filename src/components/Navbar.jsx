import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthProvider";
import Login from "./login";
import Logout from "./Logout";

const Navbar = () => {
  const [authUser, setauthUser] = useAuth();
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <Link to='/'><li><a className="text-lg md:text-xl font-bold px-3 py-2 text-black hover:text-blue-400 dark:text-white">HOME</a></li></Link>
      <Link to='/about'><li><a className="text-lg md:text-xl font-bold px-3 py-2 text-black hover:text-blue-400 dark:text-white">ABOUT US</a></li></Link>
      <Link to='/list'><li><a className="text-lg md:text-xl font-bold px-3 py-2 text-black hover:text-blue-400 dark:text-white">PET LISTINGS</a></li></Link>
      <Link to='/profile'><li><a className="text-lg md:text-xl font-bold px-3 py-2 text-black hover:text-blue-400 dark:text-white">PET PROFILE</a></li></Link>
    </>
  );

  return (
    <div className={`max-w-screen-2xl bg-white text-black dark:bg-black dark:text-white container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-black bg-opacity-60 duration-300 transition-all ease-in-out" : ""}`}>
      <div className="navbar text-black dark:text-white">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case dark:text-white text-black text-2xl font-extrabold tracking-wide">
            Pawsitivity
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {/* Theme Toggle */}
          <label className="swap swap-rotate dark:text-white text-black mx-10">
            <input type="checkbox" className="theme-controller" value="synthwave" readOnly />
            {/* Sun Icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => settheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon Icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => settheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Login/Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <button
                className="btn btn-outline btn-sm text-black dark:text-white hover:bg-white hover:text-black dark:hover:text-white dark:hover:bg-black transition-all duration-300"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </div>
          )}

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-80 text-white rounded-box w-52">
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
