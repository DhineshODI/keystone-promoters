import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OngoingProjectsPage2() {
  const OnGoingProjectsData = [
    {
      id: 1,
      ProjectTitle: "Spectra",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      units: "41",
      unitSize: "1069 - 1608",
      projectImage: "/images/ongoing-images/project-Iisting-projects-image.jpg",
      projectLink: "/ongoing-projects/spectra",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  return (
    <div className="ongoingProjectsPage ongoingnewpage">
      {/* Banner */}
      <div>
        {/* <div className="detailPageBanners">
          <h5
            className="secondHeadingText"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Live in
          </h5>
          <h5
            className="secondHeadingText"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            Progress
          </h5>

          <div
            className="BreadCrumSection"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <a href="/" className="subHeadingText  text-hover-underline">
              Home
            </a>
            <span className="subHeadingText">-</span>
            <span className="subHeadingText text-hover-underline">
              Ongoing Projects
            </span>
          </div>
        </div> */}
        <div className="detailPageBanners">
          <h5
            className="secondHeadingText"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Crafted to
          </h5>
          <h5
            className="secondHeadingText"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            Completion
          </h5>

          <div
            className="BreadCrumSection"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <a href="/" className="subHeadingText  text-hover-underline">
              Home
            </a>
            <span className="subHeadingText">-</span>
            <span className="subHeadingText text-hover-underline">
              COMPLETED PROJECTS
            </span>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* After-Banner-Section */}

      <div className="afterMainBG">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersectionafterbanner">
            <div className="bannerafterSectionMAIN">
              <div
                className="firstbannerafterSectionMAIN"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div>
                  <h4 className="gettknowHeading">COMPLETED PROJECTS</h4>
                  <h3 className="visitOurOFficetext">
                    {/* Currently Developing your Future Homes */}
                    BUILDING LANDMARKS THAT STAND THE TEST OF TIME
                  </h3>
                </div>
              </div>
              <div className="seondbannerafterSectionMAIN">
                {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                <img src="/images/joint-venture-banner-icon.png" alt="" />
              </div>
              <div
                className="thirdbannerafterSectionMAIN"
                data-aos="fade-right"
                data-aos-duration="1800"
              >
                <div style={{ marginTop: "15px" }}>
                  <p className="contactPageAddress">
                    Our completed projects reflect the quality, planning and
                    craftsmanship Keystone is known for. These successful
                    developments are now cherished spaces for the families and
                    communities who call them home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After-Banner-Section */}

      <div
        className="margintopafterlist"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="ongoingslistflex">
            <ul className="ongoingprojectslist">
              <li onClick={() => (window.location.href = "/apartments")}>
                Apartments
              </li>
              <li onClick={() => (window.location.href = "/architecture")}>
                Architecture
              </li>
              <li
                className="activestatus"
                onClick={() => (window.location.href = "/interior")}
              >
                Interior
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ongoing Projects*/}

      <div
        className="ongoingProjectsDiVMain"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="ongoingnewstyke">
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/keystone-commercial-main.png"
                  alt=""
                />
              </div>

              <p className="subHeadingText text-hover-underline">Keystone Office</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/globus-main.png" alt="" />
              </div>

              <p className="subHeadingText text-hover-underline ">Globus</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/oasis-residential-main-img.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText text-hover-underline">Oasis</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/shub.jpg" alt="" />
              </div>

              <p className="subHeadingText text-hover-underline">Shub</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/varnam.jpg" alt="" />
              </div>

              <p className="subHeadingText text-hover-underline">Varnam</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/aum-residence-mainimg.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText text-hover-underline">Aum</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/kwalitee-main.png" alt="" />
              </div>

              <p className="subHeadingText text-hover-underline">Kwalitee</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/random-box-main.png" alt="" />
              </div>

              <p className="subHeadingText text-hover-underline">Random box</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Projects*/}
    </div>
  );
}
