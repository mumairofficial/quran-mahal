import React, { PropsWithChildren } from "react";
import { IContact } from "../models";

interface IProps {
  contact: IContact;
}

const TopContactBanner = ({ contact }: PropsWithChildren<IProps>) => {
  return (
    <section
      id="top-contact-bar"
      className="flex justify-center items-center bg-blue-700 text-white text-xs py-1"
    >
      <div>
        {contact.address} {contact.city}
      </div>
      <div className="mx-4">
        <a href={contact.facebook}>Facebook</a>
      </div>
      <div>
        <a href={contact.whatsapp}>WhatsApp {contact.contactNo}</a>
      </div>
    </section>
  );
};

export default TopContactBanner;
