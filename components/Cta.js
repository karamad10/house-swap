import Button from "./Button";

const Cta = () => {
  return (
    <>
      <div class="mx-20 container flex justify-center items-center py-24 px-4 sm:px-6 2xl:px-0">
        <div class="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div class="w-80 sm:w-auto flex flex-col justify-start items-start">
            <div>
              <p class="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">
                Renovate your home
              </p>
            </div>
            <div class="mt-4 lg:w-4/5 xl:w-3/5">
              <p class="text-base leading-6 text-gray-600 dark:text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div class="mt-8 w-full">
              <Button href="/" text="Click me" primary />
            </div>
          </div>

          <div class="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
            <div class="">
              <img
                class="hidden lg:block"
                src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png"
                alt="sofa"
              />
              <img
                class="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png"
                alt="sofa"
              />
            </div>
            <div class="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img
                  class="hidden lg:block"
                  src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png"
                  alt="chairs"
                />
                <img
                  class="w-80 sm:w-auto lg:hidden"
                  src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                  alt="chairs"
                />
              </div>
              <div>
                <img
                  class="hidden lg:block"
                  src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                  alt="chairs"
                />
                <img
                  class="w-80 sm:w-auto lg:hidden"
                  src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png"
                  alt="chairs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
