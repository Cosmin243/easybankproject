import React from "react";
import BgIntroMobile from "../public/images/bg-intro-mobile.svg";
import BgIntroDesktop from "../public/images/bg-intro-desktop.svg";
import Mockups from "../public/images/image-mockups.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="lg:bg-[#fafafa] pb-24">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-0 xl:gap-32 2xl:gap-72 lg:max-h-[480px] lg:justify-center xl:justify-between xl:px-20">
        <div className="overflow-hidden relative lg:w-[430px] xl:w-[460px]">
          <Image
            src={BgIntroMobile}
            className="w-full h-[430px] block lg:hidden"
          />
          <Image src={BgIntroDesktop} className="hidden lg:block w-[460px]" />
          <Image
            src={Mockups}
            className=" absolute -top-36 lg:bottom-0 left-[50%] -translate-x-[50%] w-[400px] lg:w-[460px]"
          />
        </div>
        <div className="flex flex-col gap-10 items-center lg:items-start mx-12 text-center lg:text-left lg:max-w-[438px] lg:my-20">
          <h1 className="text-[#343550] text-5xl">
            Next generation digital banking
          </h1>
          <p className=" text-[#a2a1a6] text-xl">
            Take your financial life online. Your EasyBank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <Link href="#">
            <h1
              className=" bg-gradient-to-r from-green-400 to-blue-400 hover:gradient-to-r hover:from-green-300 hover:to-blue-300 rounded-full py-4 px-10 hover:cursor-pointer
           text-white font-bold text-lg"
            >
              Request Invite
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
