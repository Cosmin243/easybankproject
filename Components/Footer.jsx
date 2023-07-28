import React from "react";
import Logo from "../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <main className="bg-[#2d314e] py-10 px-20 lg:px-36">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center text-[#b4b3b8] font-semibold gap-4">
        <div>
          <div className="mb-12">
            <Image src={Logo} className=" inline-block w-[180px]" />
            <h1 className="inline-block text-white font-bold -m-[105px] text-xl">
              easybank
            </h1>
          </div>
          <ul className="flex gap-3 items-center">
            <li>
              <AiFillFacebook
                size={25}
                className="text-white hover:text-[#2dc893] hover:cursor-pointer"
              />
            </li>
            <li>
              <BsYoutube
                size={25}
                className="text-white hover:text-[#2dc893] hover:cursor-pointer"
              />
            </li>
            <li>
              <AiOutlineTwitter
                size={25}
                className="text-white hover:text-[#2dc893] hover:cursor-pointer"
              />
            </li>
            <li>
              <BsPinterest
                size={20}
                className="text-white hover:text-[#2dc893] hover:cursor-pointer"
              />
            </li>
            <li>
              <AiFillInstagram
                size={25}
                className="text-white hover:text-[#2dc893] hover:cursor-pointer"
              />
            </li>
          </ul>
        </div>

        <ul className="text-center flex flex-col gap-2">
          <li className="hover:text-[#2dc893] hover:cursor-pointer">
            About Us
          </li>
          <li className="hover:text-[#2dc893] hover:cursor-pointer">Contact</li>
          <li className="hover:text-[#2dc893] hover:cursor-pointer">Blog</li>
        </ul>

        <ul className="text-center flex flex-col gap-2">
          <li className="hover:text-[#2dc893] hover:cursor-pointer">Careers</li>
          <li className="hover:text-[#2dc893] hover:cursor-pointer">Support</li>
          <li className="hover:text-[#2dc893] hover:cursor-pointer">
            Privacy Policy
          </li>
        </ul>

        <div className="text-center">
          <Link href="#">
            <h1
              className=" bg-gradient-to-r from-green-400 to-blue-400 hover:gradient-to-r hover:from-green-300 hover:to-blue-300 rounded-full py-4 px-10 hover:cursor-pointer
           text-white font-bold text-md md:text-lg"
            >
              Request Invite
            </h1>
          </Link>
          <p className="text-[#a2a1a6a4] text-sm mt-10">
            &copy; EasyBank. All Rights Reserved
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
