import React from "react";
import Image from "next/image";
import { IContact } from "../models";

interface IProps {
  contact: IContact[];
}

const ContactUsSection = ({ contact }: IProps) => {
  return (
    <section id="contributors" className="overflow-hidden py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5 py-4 mt-10">
          contact us
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
