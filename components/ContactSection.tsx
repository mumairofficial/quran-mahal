import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { IContact } from "../models";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";

interface IProps {
  contact: IContact;
}

const ContactUsSection = ({ contact }: PropsWithChildren<IProps>) => {
  return (
    <section id="contact">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gape-8 text-gray-300">
        <div className="mr-10">
          <h1 className="w-full text-3xl font-bold text-blue-500">
            Qurran Mahal
          </h1>
          <p className="py-4 text-black">
            Address : Post Office Road, Madina Colony Haroon Abad
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              <FaFacebookSquare
                className="hover:cursor-pointer hover:text-blue-500"
                size={38}
              />
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              <FaInstagram
                className="hover:cursor-pointer hover:text-pink-500"
                size={38}
              />
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <FaWhatsapp
                className="hover:cursor-pointer hover:text-green-500"
                size={38}
              />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="text-gray-500">
            <h6 className="font-medium text-gray-700">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">
                <a href="#top-home">Home</a>
              </li>
              <li className="py-2 text-sm">
                <a href="#about-us">About</a>
              </li>
              <li className="py-2 text-sm">
                <a href="#image-gallery">Image Gallery</a>
              </li>
            </ul>
          </div>

          <div className="text-gray-500">
            &nbsp;
            <ul>
              <li className="py-2 text-sm">
                {" "}
                <a href="#founders">Founders</a>{" "}
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="#contributors">Contributors</a>{" "}
              </li>
              <li className="py-2 text-sm">Contact</li>
            </ul>
          </div>
          <div className="text-gray-500">
            <h6 className="font-medium text-gray-700 ">Contact Us</h6>
            <ul>
              <li className="flex py-2 text-sm">
                <BsTelephoneFill /> {contact.contactNo}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
