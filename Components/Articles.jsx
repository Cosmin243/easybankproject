import React from "react";
import Currency from "../public/images/image-currency.jpg";
import Confetti from "../public/images/image-confetti.jpg";
import Plane from "../public/images/image-plane.jpg";
import Restaurant from "../public/images/image-restaurant.jpg";
import Image from "next/image";

const Articles = () => {
  return (
    <main className=" bg-[#fafafa] py-24">
      <h1 className="text-[#32364f] text-center text-3xl pb-10 xl:text-left xl:ml-20">
        Latest Articles
      </h1>
      <div className="flex flex-col justify-center items-center xl:flex-row xl:gap-4 xl:justify-between xl:mx-10 2xl:mx-20">
        <div className="bg-white w-[400px] xl:w-[300px] 2xl:w-[400px] mb-20">
          <Image
            src={Currency}
            className="w-[400px] xl:w-[300px] h-[220px] 2xl:w-[400px] rounded-t-md"
          />
          <div className=" rounded-b-md px-6 py-4">
            <p className=" text-xs text-gray-400 my-2">By Claire Robinson</p>
            <h2 className="text-[#32364fe0] font-semibold text-xl">
              Receive money in any currency with no fees
            </h2>
            <p className=" text-[#a2a1a6] text-md my-2">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single...
            </p>
          </div>
        </div>

        <div className="bg-white w-[400px] xl:w-[300px] 2xl:w-[400px] mb-20">
          <Image
            src={Restaurant}
            className="w-[400px] xl:w-[300px] h-[220px] 2xl:w-[400px] rounded-t-md"
          />
          <div className=" rounded-b-md px-6 py-4">
            <p className=" text-xs text-gray-400 my-2">By Wilson Hutton</p>
            <h2 className="text-[#32364fe0] font-semibold text-xl">
              Treat yourself without worrying about money
            </h2>
            <p className=" text-[#a2a1a6] text-md my-2">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you...
            </p>
          </div>
        </div>

        <div className="bg-white w-[400px] xl:w-[300px] 2xl:w-[400px] mb-20">
          <Image
            src={Plane}
            className="w-[400px] xl:w-[300px] h-[220px] 2xl:w-[400px] rounded-t-md"
          />
          <div className=" rounded-b-md px-6 py-4">
            <p className=" text-xs text-gray-400 my-2">By Wilson Hutton</p>
            <h2 className="text-[#32364fe0] font-semibold text-xl">
              Take your EasyBank card wherever you go
            </h2>
            <p className=" text-[#a2a1a6] text-md my-2">
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you...
            </p>
          </div>
        </div>

        <div className="bg-white w-[400px] xl:w-[300px] 2xl:w-[400px] mb-20">
          <Image
            src={Confetti}
            className="w-[400px] xl:w-[300px] h-[220px] 2xl:w-[400px] rounded-t-md"
          />
          <div className=" rounded-b-md px-6 py-4">
            <p className=" text-xs text-gray-400 my-2">By Claire Robinson</p>
            <h2 className="text-[#32364fe0] font-semibold text-xl">
              Our invite-only Beta accounts are now live!
            </h2>
            <p className=" text-[#a2a1a6] text-md my-2">
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite through the
              site...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
