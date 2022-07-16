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
      <div className="absolutue w-full h-full top-0 left-0 "></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <div className="bg-blend-normal bg-indigo-50 w-70 opacity-60 rounded-lg drop-shadow-2xl">
          <h1 className="text-black text-3xl md:text-4xl font-bold">
            Quran Mahal
          </h1>
          <h2 className="py-4 text-black text-3xl font-bold">
            Our motive is just <b>Respect the Quran</b>
          </h2>
          <h3 className="text-black">
            To Donate Collection Box or make small contribution{" "}
          </h3>
          <button className="bg-black rounded-lg py-4 px-4">
            Call us at +92-348-6317823
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
