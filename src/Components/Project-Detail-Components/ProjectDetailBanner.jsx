import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ProjectDetailBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);
  return (
    <>
      <div>
        {/* Banner */}
        <div>
          <div className="detailPageBanners spectraproject">
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Spectra
            </h5>

            <div
              className="projectDetailFlexdiv"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="projectDetailIconSection">
                <img src="/images/project-detail/location-icon.svg" alt="" />
                <span className="mainheadingText">Keelkattalai, Chennai</span>
              </div>
              <div className="projectDetailIconSection">
                <img src="/images/project-detail/bed-icon.svg" alt="" />
                <span className="mainheadingText">
                  41 Units - 2 &amp; 3 BHK
                </span>
              </div>
              <div className="projectDetailIconSection">
                <img src="/images/project-detail/unit-size-icon.svg" alt="" />
                <span className="mainheadingText">1069 - 1608 Unit Size</span>
              </div>
            </div>

            <div
              className="BreadCrumSection"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
              <span className="subHeadingText text-hover-underline">
                Spectra
              </span>
            </div>
          </div>
        </div>
        {/* Banner */}
      </div>
    </>
  );
}
