import Header from "../Components/Header";
import ProjectDetailBanner from "../Components/Project-Detail-Components/ProjectDetailBanner";
import ProjectDetailRoseSection from "../Components/Project-Detail-Components/ProjectDetailRoseSection";
import ProjectDetailSectionContent from "../Components/Project-Detail-Components/ProjectDetailSectionContent";

export default function ProjectDetailMainPage() {
  return (
    <>
      <div className="projectDetailPage">
        <Header />
        <ProjectDetailBanner />
        <ProjectDetailRoseSection />
        <ProjectDetailSectionContent />
      </div>
    </>
  );
}
