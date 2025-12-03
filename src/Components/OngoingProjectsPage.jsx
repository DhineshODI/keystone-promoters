import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OngoingProjectsPage() {
  const OnGoingProjectsData = [
    
    {
      id: 1,
      ProjectTitle: "Spectras",
      ProjectLocation: "Keelkattalai, Chennai",
      BHKStatus: "2 & 3",
      unitSize: "1159 - 1481",
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
    <div className="ongoingProjectsPage">
      {/* Banner */}
      <div>
        <div className="detailPageBanners">
          <h5 className="secondHeadingText" data-aos="fade-up" data-aos-duration="1000">Live in</h5>
          <h5 className="secondHeadingText" data-aos="fade-up" data-aos-duration="1300">Progress</h5>

          <div className="BreadCrumSection"data-aos="fade-up" data-aos-duration="1500">
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
              <div className="firstbannerafterSectionMAIN" data-aos="fade-left" data-aos-duration="1000">
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
              <div className="thirdbannerafterSectionMAIN" data-aos="fade-right" data-aos-duration="1800">
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

      <div className="margintopafterlist" data-aos="fade-up" data-aos-duration="1000">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="ongoingslistflex">
            <ul className="ongoingprojectslist">
              <li className="activestatus">Apartments</li>
              <li>Architecture</li>
              <li>Interior</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ongoing Projects*/}

      <div className="ongoingProjectsDiVMain" data-aos="fade-up" data-aos-duration="1200">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="FirstmainonGoingProjectsLists">
            {OnGoingProjectsData.map((project, index) => (
              <div className="mainRowonGoingProjectsLists" key={index}>
                <img src={project.projectImage} alt="" />

                <div className="onGoingProjectsLists">
                  <div className="FirstonGoingProjectsLists">
                    <h5>{project.ProjectTitle}</h5>
                    <span>{project.ProjectLocation}</span>
                  </div>
                  <div className="secondonGoingProjectsLists">
                    <h5>
                      {project.BHKStatus}
                      {""} {""}
                      <span>BHK Apartment</span>
                    </h5>
                  </div>
                  <div className="thirdonGoingProjectsLists">
                    <h5>
                      {project.unitSize}
                      {""} {""}
                      <span>UNIT SIZE</span>
                    </h5>
                  </div>

                  <a href={project.projectLink} className="projectbuttonviewmore">
                    <div className="buttononGoingProjectsLists">
                      view project
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ongoing Projects*/}
    </div>
  );
}
