import { Helmet } from "react-helmet-async";
import CareerPageFunction from "../Components/CareerPageComponent";
import Header from "../Components/Header";
import JointVentureComponent from "../Components/JointVentureComponent";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JointVentureMainPage() {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Best Joint Venture Builders in Chennai | Keystone Promoters
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Recognised as one of the best joint venture builders in Chennai, Keystone Promoters focuses on balanced planning, market-ready homes and sustainable returns."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/joint-venture" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Joint Venture",
  "image": "https://keystonepromoters.com/images/keystone-detailpage-logo.jpg",
  "@id": "",
  "url": "https://keystonepromoters.com/joint-venture",
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

           <h1 style={{ display: "none"}}>builders for joint ventures in chennai</h1>
      <div>
        {/* <Header /> */}
        <JointVentureComponent />
      </div>
    </>
  );
}
