import React from "react";

const SliderGalleryItem = ({ source }) => {
  return (
    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
      <img
        src={source.image}
        alt="black chair and white table"
        className="object-cover object-center w-full"
        style={{
          height: "24rem",
        }}
      />
      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
          {source.title}
        </h2>
        <div className="flex h-full items-end pb-6">
          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
            {source.intro}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SliderGalleryItem;
