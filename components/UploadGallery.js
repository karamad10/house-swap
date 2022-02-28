import { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

let count = 0;
let slideInterval;

const UploadGallery = ({
  featuredImages = [
    "https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1.jpg",
    "https://media.istockphoto.com/photos/panorama-of-dawn-at-sea-tunisia-picture-id1173935255?s=612x612",
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const slideRef = useRef();

  const handleOnNextClick = () => {
    console.log("s");
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  return (
    <div className="mb-24 w-full">
      <div className="max-w-screen-xxl m-auto">
        <div className="w-full relative select-none" ref={slideRef}>
          <div className="aspect-w-16 aspect-h-6">
            <img src={featuredImages[currentIndex]} alt="" />
          </div>
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button
              onClick={handleOnPrevClick}
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            >
              <AiOutlineVerticalRight size={35} />
            </button>
            <button
              onClick={handleOnNextClick}
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            >
              <AiOutlineVerticalLeft size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadGallery;
