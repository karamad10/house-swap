import TextImageItem from "./TextImageItem";

const TextImage = ({ blok }) => {
  return (
    <div className="2xl:mx-auto 2xl:container lg:py-16 md:py-12 py-9">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9 text-gray-800 dark:text-gray-50">
          {blok.headline}
        </h1>
        <p className="text-base leading-6 text-center text-gray-600 dark:text-white sm:w-96 md:w-9/12 lg:w-5/12 mt-4">
          {blok.intro}
        </p>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-${blok?.items?.length} lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6`}
      >
        {blok.items.map((item) => {
          return <TextImageItem key={item} source={item} />;
        })}
      </div>
    </div>
  );
};

export default TextImage;
