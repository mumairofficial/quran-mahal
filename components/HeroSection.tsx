import React, { PropsWithChildren } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

import { IContact } from "../models";

interface IProps {
  contact: IContact;
}

const HeroSection = ({ contact }: PropsWithChildren<IProps>) => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={"/assets/video/qurran_video.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="absolutue w-full h-full top-0 left-0"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <div className="opacity-20 hover:opacity-100">
          <h1 className="text-black text-3xl md:text-4xl font-bold">
            Qurran Pages Collection
          </h1>
          <h2 className="py-4 text-black text-3xl font-bold">
            Collection of Qurranic Pages from the city
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
