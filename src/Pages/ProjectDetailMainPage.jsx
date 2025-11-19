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
      <div className="projectDetailPage">
        {/* <Header /> */}
        <ProjectDetailBanner />
        <ProjectDetailRoseSection />
        <ProjectDetailSectionContent />

        <ProjectAminities />
        <ProjecSpecification />
        <ProjectLocationHighlights />

        <ProjectFloorPan/>

        <ProjectConstructionUpdates/>
      </div>
    </>
  );
}
