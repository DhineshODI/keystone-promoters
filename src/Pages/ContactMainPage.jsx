import Header from "../Components/Header";
import ContactPage from "../Components/ContactPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

export default function ContactMainPage() {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Spectra Apartments in Chennai | Keystone Promoters</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Spectra by Keystone Promoters offers premium residential apartments in Chennai with modern amenities, excellent connectivity, and prime location."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://keystonepromoters.com/ongoing-projects/spectra"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Contact Us",
              "image": "https://keystonepromoters.com/images/keystone-detailpage-logo.jpg",
              "@id": "",
              "url": "https://keystonepromoters.com/contact",
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
      <div>
        {/* <Header /> */}
        <ContactPage />
      </div>
    </>
  );
}
