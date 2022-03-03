import Button from "./Button";

const Hero = ({ blok }) => {
  return (
    <div className="container mx-auto py-9 md:py-12">
      <div className="flex justify-between bg-indigo-50 dark:bg-indigo-900 items-stretch flex-row">
        <div className="flex items-center bg-indigo-600 dark:bg-white justify-center">
          <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white dark:text-gray-800">
            {blok.sideText}
          </p>
        </div>
        <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5 ">
          <div>
            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-grey-800 dark:text-white">
              {blok.headline}
            </p>
          </div>
          <div className="xl:mt-4 mt-2">
            <p className="text-base xl:text-xl leading-7 text-gray-600 dark:text-white pr-4">
              {blok.intro}
            </p>
            {blok.cta && (
              <>
                <div className="flex justify-start mt-8">
                  <div className="mr-2">
                    <Button
                      href={blok.cta[0].href}
                      text={blok.cta[0].text}
                      primary
                    />
                  </div>
                  <Button href={blok.cta[1].href} text={blok.cta[1].text} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="hidden md:block h-44 md:h-60 xl:h-72">
          <img
            className="hidden h-full xl:block"
            src={blok.src}
            alt="headline-image"
          />
          <img
            className="xl:hidden h-full"
            src={blok.src}
            alt="pexels-dmitry-zvolskiy-2082090-1-1"
          />
        </div>
      </div>
      <div className="md:hidden mt-6 w-full">
        <img src={blok.src} alt="headline-image" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
