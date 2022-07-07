import React from "react";
import Image from "next/image";
import { IGallery } from "../models";

interface IProps {
  gallery: IGallery[];
}

const ImageGallerySection = ({ gallery }: IProps) => {
  return (
    <section id="image-gallery" className="overflow-hidden py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Images Gallery
          </h2>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          {gallery.map(({ imageSrc, label }) => (
            <div key={imageSrc} className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <Image
                  src={imageSrc}
                  alt={label}
                  width={"100%"}
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
