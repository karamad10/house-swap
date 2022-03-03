import React from "react";

const MiniHighlight = () => {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex space-x-4">
          <img
            className="dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1.svg"
            alt="Free Shipping"
          />
          <img
            className="hidden dark:block"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1dark.svg"
            alt="Free Shipping"
          />
          <div>
            <p className="text-xl dark:text-white leading-5 font-semibold text-gray-800">
              Free Shipping
            </p>
            <p className="text-base leading-6 dark:text-gray-400 font-normal text-gray-600 mt-3">
              Free shipping on orders above{" "}
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <img
            className="dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2.svg"
            alt="Support 24/7"
          />
          <img
            className="hidden dark:block"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2dark.svg"
            alt="Support 24/7"
          />
          <div>
            <p className="text-xl dark:text-white leading-5 font-semibold text-gray-800">
              Support 24/7
            </p>
            <p className="text-base leading-6 dark:text-gray-400 font-normal text-gray-600 mt-3">
              Contact us 24 hours a day at care@supprt.com
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <img
            className="dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3.svg"
            alt="Money Back Guarantee"
          />
          <img
            className="hidden dark:block"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3dark.svg"
            alt="Money Back Guarantee"
          />
          <div>
            <p className="text-xl dark:text-white leading-5 font-semibold text-gray-800">
              Money Back Guarantee
            </p>
            <p className="text-base leading-6 dark:text-gray-400 font-normal text-gray-600 mt-3">
              You can return the product within 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniHighlight;
