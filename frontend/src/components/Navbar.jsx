import React from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Mens</a>
            </li>
            <li>
              <a>Women</a>
            </li>

            <li>
              <a>Kids</a>
            </li>
            <li>
              <a href="">
                <CiUser />
              </a>
            </li>
            <li>
              <a>
                <CiShoppingCart size={18} />
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Pure Wear</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Mens</a>
          </li>
          <li>
            <a>Women</a>
          </li>

          <li>
            <a>Kids</a>
          </li>
          <li>
            <a>
              <CiUser size={18} />
            </a>
          </li>
          <li>
            <a>
              <CiShoppingCart size={18} />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Shop Now!</a>
      </div>
    </div>
  );
};

export default Navbar;
