export const GalleryItemMedium = ({ source }) => {
  return (
    <div class="bg-indigo-50 dark:bg-indigo-800 p-8">
      <div>
        <h2 class="text-xl leading-tight text-gray-600 dark:text-white mb-8">
          {source.title}
        </h2>
        <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
      </div>
      <div class="flex justify-center items-center mt-28 md:mt-3">
        <img src={source.image} alt="house" role="img" />
      </div>
    </div>
  );
};
