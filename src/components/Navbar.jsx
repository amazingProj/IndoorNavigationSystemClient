import React, { useState } from "react";
import MapIcon from "./style/images/map_icon.png";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const manageAccessPoint = "נהל נקודות גישה";

  const handleClick = () => setNav(!nav);

  const handleClose = () => setDropdown(!dropdown);

  return (
    <div className="w-screen h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="object-fill h-8 w-12" alt="icon" src={MapIcon} />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            מפת בניין לעו.
          </h1>
          <ul className="hidden md:flex">
            <div className="relative inline-block text-left mt-4 ml-2 mr-2">
              <div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <div className="mr-1 ml-1">בחר קומה</div>
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className={!dropdown ? "hidden" : "absolute"}>
                <div
                  className="text-right origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1" role="none">
                    <li className="hover:bg-zinc-300 mt-2">
                      <Link to={"/floor3"}>קומה 3</Link>
                    </li>
                    <li className="hover:bg-zinc-300 mt-2">
                      <Link to={"/floor4"}>קומה 4</Link>
                    </li>
                    <li className="hover:bg-zinc-300 mt-2">
                      <Link to={"/floor5"}>קומה 5</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <li className="hover:bg-zinc-300 mt-2">
              <Link to={"/manageUsers"}>נהל משתמשים</Link>
            </li>
            <li className="hover:bg-zinc-300 mt-2">
              <Link to={"/manageAPs"}>{manageAccessPoint}</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
          <Link to={"/floor3"}>קומה 3</Link>
        </li>
        <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
          <Link to={"/floor4"}>קומה 4</Link>
        </li>
        <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
          <Link to={"/floor5"}>קומה 5</Link>
        </li>
        <li className="hover:bg-zinc-300 mt-2">
          <Link to={"/manageUsers"}>נהל משתמשים</Link>
        </li>
        <li className="hover:bg-zinc-300 mt-2">
          <Link to={"/manageAPs"}>{manageAccessPoint}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
