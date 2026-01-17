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
        <title>2 & 3 BHK flats in keelkattalai | Keystone Promoters</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="2 & 3 BHK apartments for sale in Keelkattalai at Spectra by Keystone Promoters, with 1069–1608 sq.ft homes offering quality design, open space and smart amenities."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/ongoing-projects/spectra" />

        {/* Schema Markup */}
      </Helmet>

      <h1 style={{ display: "none" }}>apartment for sale in keelkattalai</h1>

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
