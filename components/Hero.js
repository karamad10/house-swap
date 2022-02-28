import Button from "./Button";

const Hero = ({ blok }) => {
  return (
    <div class="container mx-auto py-9 md:py-12">
      <div class="flex justify-between bg-indigo-50 dark:bg-indigo-900 items-stretch flex-row">
        <div class="flex items-center bg-indigo-600 dark:bg-white justify-center">
          <p class="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white dark:text-gray-800">
            {blok.sideText}
          </p>
        </div>
        <div class="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5 ">
          <div>
            <p class="text-3xl xl:text-4xl font-semibold leading-9 text-grey-800 dark:text-white">
              {blok.headline}
            </p>
          </div>
          <div class="xl:mt-4 mt-2">
            <p class="text-base xl:text-xl leading-7 text-gray-600 dark:text-white pr-4">
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
        <div class="hidden md:block h-44 md:h-60 xl:h-72">
          <img
            class="hidden h-full xl:block"
            src={blok.src}
            alt="headline-image"
          />
          <img
            class="xl:hidden h-full"
            src={blok.src}
            alt="pexels-dmitry-zvolskiy-2082090-1-1"
          />
        </div>
      </div>
      <div class="md:hidden mt-6 w-full">
        <img src={blok.src} alt="headline-image" class="w-full" />
      </div>
    </div>
  );
};

export default Hero;
