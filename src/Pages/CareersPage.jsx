import { Helmet } from "react-helmet-async";
import CareerPageFunction from "../Components/CareerPageComponent";
import ContactPage from "../Components/ContactPage";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CareersPage() {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Real Estate Jobs / Real Estate Careers / Keystone Promoters
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Keystone Promoters offers real estate careers with rewarding real estate jobs, growth opportunities, and a quality-focused work culture."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/careers" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Careers",
              "image": "https://keystonepromoters.com/images/keystone-detailpage-logo.jpg",
              "@id": "",
              "url": "https://keystonepromoters.com/careers",
              "telephone": "99400 08855",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Door No.1, GF-A, Amace Ganga Sarojini Street, Mahalingapuram, Nungambakkam,",
                "addressLocality": "Chennai",
                "postalCode": "600034",
                "addressCountry": "IN"
              } ,
              "sameAs": [
                "https://www.facebook.com/keystonechennai/",
                "https://www.instagram.com/keystone_promoters/",
                "https://www.youtube.com/@KeystonePromoters",
                "https://www.linkedin.com/company/keystone-promoters-pvt-ltd---india?originalSubdomain=in"
              ] 
            }
              `}
        </script>
      </Helmet>

      <h1 style={{ display: "none" }}>Real Estate Jobs</h1>
      <div>
        {/* <Header /> */}
        <CareerPageFunction />
      </div>
    </>
  );
}
