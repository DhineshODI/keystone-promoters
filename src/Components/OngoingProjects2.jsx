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
      projectLink: "/project-detail",
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
        <div className="detailPageBanners">
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
                  <h4 className="gettknowHeading">Ongoing Projects</h4>
                  <h3 className="visitOurOFficetext">
                    Currently Developing your Future Homes
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
                    Happy Clients already invested our ongoing projects are your
                    next great oppurtunity.
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
              {/* <li onClick={() => (window.location.href = "/ongoing-projects")}>
                Apartments
              </li> */}
              <li onClick={() => (window.location.href = "/architecture")}>
                Architecture
              </li>
              <li
                onClick={() => (window.location.href = "/interior")}
                className="activestatus"
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
                  src="/images/ongoing-images/oasis-residential-main-img.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Oasis – Residential</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/globus-main.png" alt="" />
              </div>

              <p className="subHeadingText ">Globus – Commerical</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/keystone-commercial-main.png"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Keystone – Commerical</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/kwalitee-main.png" alt="" />
              </div>

              <p className="subHeadingText ">Kwalitee Showroom</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/aum-residence-mainimg.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Aum – Residence</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/aalaya-residence-mainimg.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Aalaya – Residence</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/dwaraka-main-image.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Dwaraka</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/jairams-institutional-mainimg.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Jairams – Institutional</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/kwalitee-office-main-img.jpg" alt="" />
              </div>

              <p className="subHeadingText ">Kwalitee Office – Commercial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Projects*/}
    </div>
  );
}
