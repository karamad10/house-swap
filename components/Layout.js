import Head from "../components/Head";
import Navigation from "../components/Navigation";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div className="bg-white">
    <Head />
    <Navigation
      locale={locale}
      locales={locales}
      defaultLocale={defaultLocale}
    />
    {children}
  </div>
);

export default Layout;
