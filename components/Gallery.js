import { GalleryItem } from "./GalleryItem";
import { GalleryItemMedium } from "./GalleryItemMedium";

const Gallery = ({ blok }) => {
  const itemsLength = blok.galleryItem.length;
  const itemsLengthMedium = blok.galleryItemMedium.length;

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-4 md:py-12 py-8">
        <div className="relative">
          <h2 className="relative font-serif text-4xl z-10 text-primary">
            {blok.headline}
          </h2>
          <div className="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-indigo-600 dark:bg-white opacity-30" />
        </div>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsLength} gap-6 lg:gap-8 mt-8 md:mt-10`}
      >
        {blok.galleryItem.map((item) => {
          return <GalleryItem key={item} source={item} />;
        })}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsLengthMedium} gap-6 lg:gap-8 mt-8 md:mt-10`}
      >
        {blok.galleryItemMedium.map((item) => {
          return <GalleryItemMedium key={item} source={item} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
