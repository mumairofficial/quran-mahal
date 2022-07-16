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
          <h1 className="text-black text-3xl md:text-4xl font-bold">
            Images Gallery
          </h1>
        </div>
        <div className=" mt-16 grid lg:grid-cols-2 gape-20  ">
          <div className="flex flex-wrap m-1 mr-5 md:-m-2">
            {gallery.map(({ imageSrc, label }) => (
              <div key={imageSrc} className="flex flex-wrap w-1/6">
                <div className="w-full p-1 md:p-2">
                  <Image
                    src={imageSrc}
                    alt={label}
                    width={"100%"}
                    height={"120px"}
                    layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}

            {/* refactor this into side by side grid */}
          </div>
          <iframe
            className="items-center"
            src="http://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/%D9%82%D8%B1%D8%A2%D9%86-%D9%85%D8%AD%D9%84-100651729373242&width=600&colorscheme=dark&show_faces=light&border_color&stream=true&header=true&height=435"
            scrolling="yes"
            style={{
              marginLeft: "50px",
              border: "none",
              overflow: "hidden",
              width: "600px",
              height: "430px",
              background: "white",
              float: "left",
            }}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
