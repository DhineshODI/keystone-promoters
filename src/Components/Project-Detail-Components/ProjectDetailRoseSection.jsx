import AOS from "aos";
import "aos/dist/aos.css";
export default function ProjectDetailRoseSection() {
  return (
    <>
      {/* After-Banner-Section */}

      <div className="afterMainBG">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersectionafterbanner">
            <div className="bannerafterSectionMAIN">
              <div className="firstbannerafterSectionMAIN">
                <div data-aos="fade-left" data-aos-duration="1000">
                  <h4 className="gettknowHeading">Spectra</h4>
                  <h3 className="visitOurOFficetext">
                    SMART HOMES THE LIFESTYLE OF THE FUTURE IS ALREADY HERE.
                  </h3>
                </div>
              </div>
              <div className="seondbannerafterSectionMAIN">
                {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                <img
                  src="/images/project-detail/projectdetail-banner-icon.png"
                  alt=""
                />
              </div>
              <div
                className="thirdbannerafterSectionMAIN"
                data-aos="fade-right"
                data-aos-duration="1100"
              >
                <div style={{ marginTop: "15px" }}>
                  <p className="contactPageAddress">
                    {/* Happy Clients already invested our ongoing projects are your
                    next great oppurtunity. */}
                    Built to meet everyday needs with smart design and quality
                    construction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After-Banner-Section */}
    </>
  );
}
