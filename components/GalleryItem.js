export const GalleryItem = ({ source }) => {
  return (
    <>
      <div class="bg-indigo-50 dark:bg-indigo-800 rounded-lg">
        <div class="p-8">
          <h2 class="text-xl font-semibold text-gray-600 dark:text-white">
            {source.title}
          </h2>
          <p class="text-xl text-gray-800 dark:text-white mt-2">
            {source.intro}
          </p>
        </div>
        <div class="flex justify-center items-center mt-2 md:mt-6 ">
          <img class="h-80 w-full" src={source.image} alt="house" role="img" />
        </div>
      </div>
    </>
  );
};
