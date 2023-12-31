import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { navLinks } from "../constants";
import logo from "../public/images/logocamperosm.png";
import menu from "../public/images/menu.svg";
import close from "../public/images/close.svg";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-xl`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} height={100} width={100} alt="logo" className="w-14 h-14 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-primary" : "text-secondary"
              } hover:text-primary text-[18px] font-bold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "flex translate-x-[50vw] " : "flex"
            } transform p-6 black-gradient absolute right-0 top-0 min-w[140px] z-10 bg-white h-screen w-[50vw] transition-transform duration-500`}
          >
            <ul className="list-none flex items-start flex-col gap-4 mt-12">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a className="font-bold" href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
