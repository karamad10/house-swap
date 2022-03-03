export const GalleryItem = ({ source }) => {
  return (
    <>
      <div className="bg-indigo-50 dark:bg-indigo-800 rounded-lg">
        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-white">
            {source.title}
          </h2>
          <p className="text-xl text-gray-800 dark:text-white mt-2">
            {source.intro}
          </p>
        </div>
        <div className="flex justify-center items-center mt-2 md:mt-6 ">
          <img
            className="h-80 w-full"
            src={source.image}
            alt="house"
            role="img"
          />
        </div>
      </div>
    </>
  );
};
