import Header from "../Components/Header";
import ContactPage from "../Components/ContactPage";
import OngoingProjectsPage from "../Components/OngoingProjectsPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

export default function OngoingProjectsMainPage() {
  return (
    <>
      <div>
        <Helmet>
          {/* Page Title */}
          <title>Apartments in keelkattalai | Flats for Sale in keelkattalai</title>

          {/* Meta Description */}
          <meta
            name="description"
            content="Keystone Promoters presents well-crafted apartments in Keelkattalai, combining smart design, quality construction, and a convenient residential location."
          />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href="/ongoing-projects"
          />

          {/* Schema Markup */}
          <script type="application/ld+json">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "RealEstateAgent",
                  "name": "Ongoing Projects",
                  "image": "https://keystonepromoters.com/images/keystone-detailpage-logo.jpg",
                  "@id": "",
                  "url": "https://keystonepromoters.com/ongoing-projects",
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
     <h1 style={{ display: "none"}}>flats for sale in keelkattalai</h1>
        
        <OngoingProjectsPage />
      </div>
    </>
  );
}
