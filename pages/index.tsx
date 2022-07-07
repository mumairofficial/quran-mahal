import type { NextPage } from "next";
import Head from "next/head";

import { siteData } from "../data/data";
import TopContactBanner from "../components/TopContactBanner";
import TopNavigationBar from "../components/TopNavigationBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ContributorsSection from "../components/ContributorsSection";
import ImageGallerySection from "../components/ImageGallerySection";
import ContactUsSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quran Mahal</title>
        <meta name="description" content="Quran Mahal Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopContactBanner contact={siteData.contact} />

        <TopNavigationBar />

        <HeroSection contact={siteData.contact} />

        <AboutSection />

        <ImageGallerySection gallery={siteData.images} />

        <TeamSection team={siteData.founders} />

        <ContributorsSection contributors={siteData.contributors} />

        <ContactUsSection contact={siteData.contact} />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default Home;
