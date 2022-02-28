import React from "react";

const TextImage = () => {
  return (
    <div class="2xl:mx-auto 2xl:container lg:py-16 md:py-12 py-9">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-gray-800 dark:text-gray-50">
          Latest Blog
        </h1>
        <p class="text-base leading-6 text-center text-gray-600 dark:text-white sm:w-96 md:w-9/12 lg:w-5/12 mt-4">
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
        <div class="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/kqt7S1z/img-1.png"
            alt="chair"
            style={{ width: "100%" }}
          />
          <div class="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div class="flex items-center justify-center flex-col h-full">
              <h2 class="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white">
                The history of wood
              </h2>
              <p class="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div class="px-4 md:w-auto w-full">
              <button class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div class="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/w04zsMJ/img-2.png"
            alt="chair"
            style={{ width: "100%" }}
          />
          <div class="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div class="flex items-center justify-center flex-col h-full">
              <h2 class="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-white">
                Minimimalism and modern day architecture
              </h2>
              <p class="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div class="px-4 md:w-auto w-full">
              <button class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div class="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/3ctkDMB/img-3.png"
            alt="chair"
            style={{ width: "100%" }}
          />
          <div class="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div class="flex items-center justify-center flex-col h-full">
              <h2 class="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">
                Layout setting and mood
              </h2>
              <p class="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div class="px-4 md:w-auto w-full">
              <button class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
