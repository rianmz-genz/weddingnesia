import { Container, InterestSection, NavbarLandingpage, TutorialSection } from "@/components";
import FeatureSection from "@/components/home/Feature";
import HeroSection from "@/components/home/Hero";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>WeddingNesia - Undangan pernikahan online gratis</title>
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
      </main>
    </>
  )
}
