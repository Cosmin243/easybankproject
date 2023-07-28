import React, { use, useState } from "react";
import Logo from "../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <main className="mx-10 md:mx-20 xl:mx-40 my-6">
      <div className="hidden lg:flex justify-between items-center">
        <Image src={Logo} />
        <ul className=" hidden lg:flex gap-6 text-gray-400 text-xl font-semibold">
          <li className="hover:text-black hover:cursor-pointer">Home</li>
          <li className="hover:text-black hover:cursor-pointer">About</li>
          <li className="hover:text-black hover:cursor-pointer">Contact</li>
          <li className="hover:text-black hover:cursor-pointer">Blog</li>
          <li className="hover:text-black hover:cursor-pointer">Careers</li>
        </ul>
        <Link href="#">
          <h1
            className=" bg-gradient-to-r from-green-400 to-blue-400 hover:gradient-to-r hover:from-green-300 hover:to-blue-300 rounded-full py-4 px-10 hover:cursor-pointer
           text-white font-bold text-lg hidden lg:block"
          >
            Request Invite
          </h1>
        </Link>
      </div>

      <div className="block lg:hidden fixed z-20 w-full bg-white top-0 left-0 p-10">
        <div className="flex justify-between items-center">
          <Image src={Logo} />
          {nav ? (
            <AiOutlineMenu
              className="block lg:hidden hover:cursor-pointer"
              size={30}
              onClick={handleNav}
            />
          ) : (
            <AiOutlineClose
              className="block lg:hidden hover:cursor-pointer"
              size={30}
              onClick={handleNav}
            />
          )}
          {!nav ? (
            <div className="fixed top-[8%] left-0 bg-white w-full text-center py-10 rounded-lg">
              <ul className="flex flex-col gap-6 text-[#343550] font-semibold text-lg">
                <li>
                  <h1 className="hover:cursor-pointer hover:text-gray-400">
                    Home
                  </h1>
                </li>
                <li>
                  <h1 className="hover:cursor-pointer hover:text-gray-400">
                    About
                  </h1>
                </li>
                <li>
                  <h1 className="hover:cursor-pointer hover:text-gray-400">
                    Contact
                  </h1>
                </li>
                <li>
                  <h1 className="hover:cursor-pointer hover:text-gray-400">
                    Blog
                  </h1>
                </li>
                <li>
                  <h1 className="hover:cursor-pointer hover:text-gray-400">
                    Careers
                  </h1>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
