import Link from "next/link";
import { sbEditable } from "@storyblok/storyblok-editable";

import Button from "./Button";

const Teaser = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid} className="bg-white-half">
      <div className="pb-2 pt-6 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.headline}
        </h2>
        <div className="pb-2 pt-6 container mx-auto">
          <div>
            <img
              src={blok.image.filename}
              alt={blok.image.alt}
              className="w-full"
            />
          </div>
          {blok.cta && (
            <>
              <div className="flex justify-center mt-8">
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
    </div>
  );
};

export default Teaser;
