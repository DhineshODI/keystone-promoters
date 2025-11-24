import { Link } from "react-router-dom";

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

  return (
    <div className="ongoingProjectsPage">
      {/* Banner */}
      <div>
        <div className="detailPageBanners">
          <h5 className="secondHeadingText">Live in</h5>
          <h5 className="secondHeadingText">Progress</h5>

          <div className="BreadCrumSection">
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
              <div className="firstbannerafterSectionMAIN">
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
              <div className="thirdbannerafterSectionMAIN">
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

      <div className="margintopafterlist">
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

      <div className="ongoingProjectsDiVMain">
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

                  <a href={project.projectLink}>
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
