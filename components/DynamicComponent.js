import Teaser from "./Teaser";
import Feature from "./Feature";
import FeaturedPosts from "./FeaturedPosts";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import PostsList from "./PostsList";
import Page from "./Page";
import BlogPost from "./BlogPost";
import Text from "./Text";
import Button from "./Button";
import UploadForm from "./UploadForm";
import Hero from "./Hero";
import Gallery from "./Gallery";
import TextImage from "./TextImage";
import SilderGallery from "./SliderGallery";
import Cta from "./Cta";
import Faq from "./Faq";
import ImageHero from "./ImageHero";
import MiniHighlight from "./MiniHighlight";

import Test from "./Test";

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  "featured-posts": FeaturedPosts,
  page: Page,
  post: BlogPost,
  text: Text,
  "selected-posts": PostsList,
  button: Button,
  uploadForm: UploadForm,
  hero: Hero,
  test: Test,
  gallery: Gallery,
  textImage: TextImage,
  sliderGallery: SilderGallery,
  cta: Cta,
  faq: Faq,
  imageHero: ImageHero,
  miniHighlight: MiniHighlight,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
