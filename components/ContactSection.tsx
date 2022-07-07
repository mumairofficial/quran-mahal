import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { IContact } from "../models";

interface IProps {
  contact: IContact;
}

const ContactUsSection = ({ contact }: PropsWithChildren<IProps>) => {
  return (
    <section
      id="contributors"
      className="overflow-hidden py-4 bg-slate-600 text-white sm:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="pt-4">
            You can reach us for donations or any information at following:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 py-4 mt-6">
          <div>
            <div className="font-medium text-slate-300">Phone</div>
            <div className="text-lg">{contact.contactNo}</div>
          </div>
          <div>
            <div className="font-medium text-slate-300">Address</div>
            <div className="text-lg">
              {contact.address}, {contact.city}
            </div>
          </div>
          <div>
            <div className="text-lg">
              WhatsApp: <a href={contact.whatsapp}>{contact.contactNo}</a>
            </div>
            <div className="text-lg">
              <a href={contact.facebook}>Facebook: Follow US</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
