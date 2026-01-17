import { Helmet } from "react-helmet-async";
import ArchitectureSection from "../Components/ArchitectureSection";
import CurtedLivingSlider from "../Components/CurtedLivingSlider";
import Footer from "../Components/Footer";
import HomepageImageHoverSection from "../Components/HomePage-ImageHover";
import TextImageSection from "../Components/HomePageHover";
import LiveThoughtFul from "../Components/LiveTheThoughtFul";
import OngoingProjects from "../Components/OnGoingProjects";
import ScheduleAvisit from "../Components/ScheduleAVisit";
import TestimonalSlider from "../Components/TestimonalSlider";
import VideoBanner from "../Components/VideoBanner";
import WhatMakesKeyStonesUnique from "../Components/WhatMakesKeyStoneUnqiue";

export default function Homepage() {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Construction Companies in Nungambakkam - Keystone Promoters
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Keystone Promoters is among the trusted construction companies in Nungambakkam, with 25+ years of experience delivering quality homes & earning happy customers."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/ " />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Keystone Promoters",
              "image": "https://keystonepromoters.com/images/keystone-detailpage-logo.jpg",
              "@id": "",
              "url": "https://keystonepromoters.com/",
              "telephone": "9940008855",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Door No.1, GF-A, Amace Ganga Sarojini Street, Mahalingapuram, Nungambakkam,",
                "addressLocality": "Chennai",
                "postalCode": "600034",
                "addressCountry": "IN"
              } ,
              "sameAs": [
                "https://www.instagram.com/keystone_promoters/",
                "https://www.facebook.com/keystonechennai/",
                "https://www.youtube.com/@KeystonePromoters",
                "https://www.linkedin.com/company/keystone-promoters-pvt-ltd---india/about/"
              ] 
            }
              `}
        </script>
      </Helmet>

      <h1 style={{ display: "none"}}>builders in nugambakkam</h1>
      <VideoBanner />
      <WhatMakesKeyStonesUnique />
      <LiveThoughtFul />
      <ArchitectureSection />
      <HomepageImageHoverSection />
      <OngoingProjects />
      <CurtedLivingSlider />
      {/* <TextImageSection/> */}
    </>
  );
}
