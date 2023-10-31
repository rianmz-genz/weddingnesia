import GetAllPackage from "../api/integrations/package/GetAllPackage";
import {
  ActionSection,
  Container,
  Footer,
  InterestSection,
  NavbarLandingpage,
  PriceSection,
  Testimonial,
  TutorialSection,
} from "@/components";
import ScrollToTopButton from "@/components/globals/ScrollToTopButton";
import FeatureSection from "@/components/home/Feature";
import HeroSection from "@/components/home/Hero";
import Layout from "@/components/layout/Layout";
import MyLog from "@/utils/MyLog";
import Head from "next/head";
import Script from "next/script";
export default function Home({ pageProps }) {
  return (
    <>
      <Head>
        <title>WeddingNesia - Undangan pernikahan online gratis</title>
        {/* Meta tags umum */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta tags SEO */}
        <meta
          name="description"
          content="WeddingNesia: Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda dengan cara yang unik dan menarik. Coba buat undangan pernikahan online gratis sekarang juga!"
        />
        <meta
          name="keywords"
          content="undangan, pernikahan, online, gratis, undangan pernikahan, undangan online, undangan pernikahan gratis, undangan gratis, undangan pernikahan online gratis"
        />
        <meta name="author" content="Adrian, Didi and Irga" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="WeddingNesia: Platform untuk pembuatan undangan pernikahan online gratis terbaik di Indonesia."
        />
        <meta
          property="og:description"
          content="Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda dengan cara yang unik dan menarik. Coba buat undangan pernikahan online gratis sekarang juga!"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/rianmz-genz/weddingnesia/main/public/images/mockuplaptop.jpg"
        />
        <meta property="og:url" content="https://weddingnesia.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="googlebot" content="index,follow" />
        <meta name="robots" content="index,follow" />
        {/* Favicon */}
        <link rel="icon" href="/images/wn.png" />
      </Head>
      <main className="overflow-hidden">
        <Container>
          <NavbarLandingpage />
          <HeroSection />
          <InterestSection />
        </Container>
        <FeatureSection />
        <Container>
          <TutorialSection />
        </Container>
        <Testimonial />
        <PriceSection packages={pageProps.packages} />
        <ActionSection />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const hit = await GetAllPackage();
    // Misalnya, jika Anda ingin mengurutkan berdasarkan urutan: Freemium, Premium, Eksklusif, Pro, Elegant
    if (!hit)
      return {
        props: {
          packages: [],
        },
      };
    // Misalnya, jika Anda ingin mengurutkan berdasarkan urutan: Freemium, Premium, Eksklusif, Pro, Elegant
    const packages = hit.sort((a, b) => {
      const order = ["Freemium", "Premium", "Eksklusif", "Pro", "Elegant"];
      return order.indexOf(a.name) - order.indexOf(b.name);
    });
    return {
      props: {
        packages,
      },
    };
  } catch (error) {
    console.error("Error fetching packages:", error.message);
    return {
      props: {
        packages: [],
      },
    };
  }
}
