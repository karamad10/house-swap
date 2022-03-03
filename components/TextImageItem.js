const TextImageItem = ({ source }) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ minHeight: "10rem" }}
    >
      <img
        src={source.image}
        alt="chair"
        style={{ width: "100%", height: "30rem" }}
      />
      <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
        <div className="flex items-center justify-center flex-col h-full">
          <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">
            {source.title}
          </h2>
          <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
            {source.intro}
          </p>
        </div>
        <div className="px-4 md:w-auto w-full">
          <button
            href={source.buttonUrl}
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            {source.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextImageItem;
