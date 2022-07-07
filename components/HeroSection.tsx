import React, { PropsWithChildren } from "react";
import Image from "next/image";

import { IContact } from "../models";

interface IProps {
  contact: IContact;
}

const HeroSection = ({ contact }: PropsWithChildren<IProps>) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 py-8 my-6">
        <div className="flex items-center">
          <div className="md:text-left sm:text-center">
            <div className="text-6xl font-medium font-serif">Quran Mahal</div>
            <div className="text-xl mt-4">
              Our motive is just <strong>Respect the Quran</strong>
            </div>
            <div className="mt-12">
              To a Donate Collection Box or make small contributions
            </div>
            <div className="mt-10">
              <span className="px-7 py-5 bg-yellow-600 text-white text-lg font-medium rounded cursor-pointer">
                Call Us at {contact.contactNo}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Image
            src="/assets/images/hero-image.jpg"
            alt="hero image"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
