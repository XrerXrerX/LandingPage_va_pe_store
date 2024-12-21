/** @format */

"use client";
import { motion } from "framer-motion";
import DateDisplay from "./DateDisplay";
import InfoSlider from "./InfoSlider";
import DeliveryInfo from "./DeliveryInfo";
import SocialLinks from "./SocialLinks";

export default function TopBanner() {
  return (
    <div className="bg-black text-white text-sm">
      <div className="2xl:w-11/12 xl:w-full lg:w-11/12 md:11/12 sm:11/12 xs:w-full  mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <DateDisplay />
          {/* <div className="hidden lg:block md:block sm:block xs:block"> */}
          <InfoSlider />
          {/* </div> */}
          <div className="flex items-center gap-4">
            <DeliveryInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
