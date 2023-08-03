import { Container, Footer, InterestSection, NavbarLandingpage, Testimonial, TutorialSection } from "@/components";
import FeatureSection from "@/components/home/Feature";
import HeroSection from "@/components/home/Hero";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>WeddingNesia - Undangan pernikahan online gratis</title>
          {/* Meta tags umum */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Meta tags SEO */}
          <meta name="description" content="WeddingNesia: Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda dengan cara yang unik dan menarik. Coba buat undangan pernikahan online gratis sekarang juga!" />
          <meta name="keywords" content="undangan, pernikahan, online, gratis, undangan pernikahan, undangan online, undangan pernikahan gratis, undangan gratis, undangan pernikahan online gratis" />
          <meta name="author" content="Adrian, Didi and Irga" />
          
          {/* Open Graph meta tags */}
          <meta property="og:title" content="WeddingNesia: Platform untuk pembuatan undangan pernikahan online gratis terbaik di Indonesia." />
          <meta property="og:description" content="Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda dengan cara yang unik dan menarik. Coba buat undangan pernikahan online gratis sekarang juga!" />
          <meta property="og:image" content="https://raw.githubusercontent.com/rianmz-genz/weddingnesia/main/public/images/mockuplaptop.jpg" />
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
        <Footer />
      </main>
    </>
  )
}