import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import ProjectFloorPan from "../Components/Project-Detail-Components/Project-FloorPlan";
import ProjectAminities from "../Components/Project-Detail-Components/ProjectAminites";
import ProjectConstructionUpdates from "../Components/Project-Detail-Components/ProjectConstructionUpdates";
import ProjectDetailBanner from "../Components/Project-Detail-Components/ProjectDetailBanner";
import ProjectDetailRoseSection from "../Components/Project-Detail-Components/ProjectDetailRoseSection";
import ProjectDetailSectionContent from "../Components/Project-Detail-Components/ProjectDetailSectionContent";
import ProjectLocationHighlights from "../Components/Project-Detail-Components/ProjectLocationHighlights";
import ProjecSpecification from "../Components/Project-Detail-Components/ProjectSpecification";

export default function ProjectDetailMainPage() {
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
                "name": "Spectra",
                "image": "https://keystonepromoters.com/images/keystone-detailpage-logo.jpg",
                "@id": "",
                "url": "https://keystonepromoters.com/ongoing-projects/spectra",
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

      <div className="projectDetailPage">
        {/* <Header /> */}
        <ProjectDetailBanner />
        <ProjectDetailRoseSection />
        <ProjectDetailSectionContent />

        <ProjectAminities />
        <ProjecSpecification />
        <ProjectLocationHighlights />

        <ProjectFloorPan />

        {/* <ProjectConstructionUpdates /> */}
      </div>
    </>
  );
}
