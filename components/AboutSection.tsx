import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-blue-600 py-4 sm:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h1 className="text-white text-3xl md:text-4xl text-center font-bold">
            Our Story
          </h1>
          <p className="mt-6 text-lg tracking-tight text-white md: text-center">
            All the information about how Quran Mahal performing and how to get!
          </p>
        </div>
        <div className="text-center tracking-wide text-white mt-10 max-w-4xl mx-auto px-12">
          <p>
            Quran Mahal produce and place collection boxes in various sizes,
            color them and place nation wide.
          </p>

          <p>
            Each day corresponding team collects then pages and empty out in big
            cart. After collection small teams clean up the pages and prepare
            the final bundle. Once all preparation are complete we dispatch
            bundles into dedicated space we call Quran well.
          </p>

          <p className="mt-4">
            You can contribute via money, buying tin box or contributing in
            fuel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
