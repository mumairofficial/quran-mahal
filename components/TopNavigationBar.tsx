import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="top-home z-10 sticky top-0 shadow shadow-slate-300">
      <nav className="bg-slate-100 z-10 sticky top-0 shadow shadow-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center justify-between"
              style={{ width: "100%" }}
            >
              {/* icons */}
              <div className="flex-shrink-0">
                <Image
                  src="/assets/icons/quran-icon.png"
                  alt="logo"
                  width="64"
                  height="64"
                />
              </div>
              {/* menu items */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#top-contact-bar"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#about-us"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#image-gallery"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Gallery
                  </a>

                  <a
                    href="#founders"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Founders
                  </a>

                  <a
                    href="#contributors"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contributors
                  </a>

                  <a
                    href="#contact"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-100"
              >
                <a
                  href="#top-contact-bar"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#about-us"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#image-gallery"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Image Gallery
                </a>

                <a
                  href="#founders"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Founders
                </a>

                <a
                  href="#contributors"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contributors
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Gallery
                </a>

                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </section>
  );
}

export default Nav;
