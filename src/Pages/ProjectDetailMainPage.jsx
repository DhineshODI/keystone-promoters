import Header from "../Components/Header";
import ProjectAminities from "../Components/Project-Detail-Components/ProjectAminites";
import ProjectDetailBanner from "../Components/Project-Detail-Components/ProjectDetailBanner";
import ProjectDetailRoseSection from "../Components/Project-Detail-Components/ProjectDetailRoseSection";
import ProjectDetailSectionContent from "../Components/Project-Detail-Components/ProjectDetailSectionContent";
import ProjectLocationHighlights from "../Components/Project-Detail-Components/ProjectLocationHighlights";
import ProjecSpecification from "../Components/Project-Detail-Components/ProjectSpecification";

export default function ProjectDetailMainPage() {
  return (
    <>
      <div className="projectDetailPage">
        <Header />
        <ProjectDetailBanner />
        <ProjectDetailRoseSection />
        <ProjectDetailSectionContent />

        <ProjectAminities />
        <ProjecSpecification />
        <ProjectLocationHighlights />
      </div>
    </>
  );
}
