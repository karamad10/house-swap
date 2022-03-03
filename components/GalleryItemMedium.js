export const GalleryItemMedium = ({ source }) => {
  return (
    <div className="bg-indigo-50 dark:bg-indigo-800 p-8">
      <div>
        <h2 className="text-xl leading-tight text-gray-600 dark:text-white mb-8">
          {source.title}
        </h2>
        <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
      </div>
      <div className="flex justify-center items-center mt-28 md:mt-3">
        <img src={source.image} alt="house" role="img" />
      </div>
    </div>
  );
};
