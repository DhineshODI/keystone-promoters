import AOS from "aos";
import "aos/dist/aos.css";
export default function ProjectDetailBanner() {
  return (
    <>
      <div>
        {/* Banner */}
        <div>
          <div className="detailPageBanners spectraproject">
            <h5 className="secondHeadingText">Spectra</h5>

            <div className="projectDetailFlexdiv">
              <div className="projectDetailIconSection">
                <img src="/images/project-detail/location-icon.svg" alt="" />
                <span className="mainheadingText">Keelkattalai, Chennai</span>
              </div>
              <div className="projectDetailIconSection">
                <img src="/images/project-detail/bed-icon.svg" alt="" />
                <span className="mainheadingText">2 & 3 BHK Appartments</span>
              </div>
              <div className="projectDetailIconSection">
                <img src="/images/project-detail/unit-size-icon.svg" alt="" />
                <span className="mainheadingText">1481 - 1159 Unit Size</span>
              </div>
            </div>

            <div className="BreadCrumSection">
              <a href="/" className="subHeadingText  text-hover-underline">
                Home
              </a>
              <span className="subHeadingText">-</span>
              <a
                href="/ongoing-projects"
                className="subHeadingText text-hover-underline"
              >
                Ongoing Projects
              </a>
              <span className="subHeadingText">-</span>
              <span className="subHeadingText text-hover-underline">Spectra</span>
            </div>
          </div>
        </div>
        {/* Banner */}
      </div>
    </>
  );
}
