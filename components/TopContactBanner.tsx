import React, { PropsWithChildren } from "react";
import { IContact } from "../models";

interface IProps {
  contact: IContact;
}

const TopContactBanner = ({ contact }: PropsWithChildren<IProps>) => {
  return (
    <div className="flex justify-center items-center bg-green-900 text-white text-xs py-1">
      <div>
        {contact.address} {contact.city}
      </div>
      <div className="mx-4">
        <a href={contact.facebook}>Facebook</a>
      </div>
      <div>
        <a href={contact.whatsapp}>WhatsApp {contact.contactNo}</a>
      </div>
    </div>
  );
};

export default TopContactBanner;
