import React from "react";
import logo from "../../../public/images/logo.png";
import cart from "../../../public/images/cart.png";
import search from "../../../public/images/Search.png";
import profile from "../../../public/images/profile.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Speelhuisjes</a>
              </li>
              <li>
                <a>Speeltorens</a>
              </li>
              <li>
                <a>Speeltoren met Schommel</a>
              </li>
              <li>
                <a>Speeltoren met Glijbaan</a>
              </li>
              <li>
                <a>Speeltoren met Zandbak</a>
              </li>
              <li>
                <a>Accessoires</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Speelhuisjes</a>
            </li>
            <li>
              <a>Speeltorens</a>
            </li>
            <li>
              <a>Speeltoren met Schommel</a>
            </li>
            <li>
              <a>Speeltoren met Glijbaan</a>
            </li>
            <li>
              <a>Speeltoren met Zandbak</a>
            </li>
            <li>
              <details>
                <summary>Accessoires</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <a href="">
            <img src={search} alt="" />
          </a>
          <a href="">
            <img src={profile} alt="" />
          </a>
          <a href="">
            <img src={cart} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
