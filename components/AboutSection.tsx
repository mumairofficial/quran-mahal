import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-blue-600 py-4 sm:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            About Quran Mahal
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            All the information about how Quran Mahal performing and how to get!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-4">
          <div className="flex">
            <div>icon</div>
            <div>
              <div>title</div>
              <div>description</div>
            </div>
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
