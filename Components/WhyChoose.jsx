import React from "react";
import Image from "next/image";
import OnlineBanking from "../public/images/icon-online.svg";
import Budgeting from "../public/images/icon-budgeting.svg";
import OnBoarding from "../public/images/icon-onboarding.svg";
import ApiIcon from "../public/images/icon-api.svg";

const WhyChoose = () => {
  return (
    <main className=" bg-[#f4f5f7] pb-24 lg:px-20">
      <div className="text-center py-16 xl:text-left max-w-[360px] mx-auto xl:mx-10 xl:max-w-none">
        <h1 className="text-[#343550] text-5xl">Why choose EasyBank?</h1>
        <p className=" text-[#a2a1a6] text-xl my-10">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center text-center xl:flex-row xl:text-left xl:gap-0">
        <div className="mx-10 flex flex-col items-center gap-6 xl:items-start max-w-[360px]">
          <Image src={OnlineBanking} />
          <h1 className="text-[#343550] text-3xl">Online Banking</h1>
          <p className=" text-[#a2a1a6] text-xl">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="mx-10 flex flex-col items-center gap-6 xl:items-start max-w-[360px]">
          <Image src={Budgeting} />
          <h1 className="text-[#343550] text-3xl">Simple Budgeting</h1>
          <p className=" text-[#a2a1a6] text-xl">
            See exactly where your money goes each month. Receive notifications
            when you're close to your hitting limits.
          </p>
        </div>
        <div className="mx-10 flex flex-col items-center gap-6 xl:items-start max-w-[360px]">
          <Image src={OnBoarding} />
          <h1 className="text-[#343550] text-3xl">Fast Onboarding</h1>
          <p className=" text-[#a2a1a6] text-xl">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="mx-10 flex flex-col items-center gap-6 xl:items-start max-w-[360px]">
          <Image src={ApiIcon} />
          <h1 className="text-[#343550] text-3xl">Open API</h1>
          <p className=" text-[#a2a1a6] text-xl">
            Manage your savings, investments, pension and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </main>
  );
};

export default WhyChoose;
