import Header from "../Components/Header";
import ProjectAminities from "../Components/Project-Detail-Components/ProjectAminites";
import ProjectDetailBanner from "../Components/Project-Detail-Components/ProjectDetailBanner";
import ProjectDetailRoseSection from "../Components/Project-Detail-Components/ProjectDetailRoseSection";
import ProjectDetailSectionContent from "../Components/Project-Detail-Components/ProjectDetailSectionContent";
import ProjecSpecification from "../Components/Project-Detail-Components/ProjectSpecification";

export default function ProjectDetailMainPage() {
  return (
    <>
      <div className="projectDetailPage">
        <Header />
        <ProjectDetailBanner />
        <ProjectDetailRoseSection />
        <ProjectDetailSectionContent />
        <ProjecSpecification/>
        <ProjectAminities/>
      </div>
    </>
  );
}
