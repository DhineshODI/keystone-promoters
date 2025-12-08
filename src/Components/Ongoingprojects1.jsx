import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OngoingProjectsPage1() {
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
                    {/* Happy Clients already invested our ongoing projects are your
                    next great oppurtunity. */}
                    Our completed projects reflect the quality, planning, and
                    craftsmanship Keystone is known for.These successful
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
              {/* <li onClick={() => (window.location.href = "/ongoing-projects")}>
                Apartments
              </li> */}
              <li
                onClick={() => (window.location.href = "/architecture")}
                className="activestatus"
              >
                Architecture
              </li>
              <li onClick={() => (window.location.href = "/interior")}>
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
            {/* <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/Spectra-image.png" alt="" />
              </div>

              <p className="subHeadingText ">Spectra</p>
            </div> */}
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/scape-main.png" alt="" />
              </div>

              <p className="subHeadingText ">The Scape</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/random-box-main.png" alt="" />
              </div>

              <p className="subHeadingText ">Random Box</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/groove.jpg" alt="" />
              </div>

              <p className="subHeadingText ">The Grove</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/mannat-main.png" alt="" />
              </div>

              <p className="subHeadingText ">Mannat</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/north-point-mainimg.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">North Point at Chennai</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/edge.jpg" alt="" />
              </div>

              <p className="subHeadingText ">Edge – Commercial</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/child-park-mainimg-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Childrens Park</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/club-house-mainimg-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Club House – Commercial</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/trapezoid-commercial-mainimg-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Trapezoid – Commercial</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/sabari-garden-mainimg-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Sabari Garden Housing</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/library-main-img-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Library – Institutional</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/haritham-residence-mainimg-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Haritham – Residence</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img src="/images/ongoing-images/yoga-768x538.jpg" alt="" />
              </div>

              <p className="subHeadingText ">Yoga Institute Entrance</p>
            </div>
            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/president-park-mainimg-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">The President’s Park</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/dwaraka-residence-main-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Dwaraka – Residence</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/nilaya-residence-main-img-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Nilaya – Residence</p>
            </div>

            <div className="eachprojectcards">
              <div className="imagehoveranimationse">
                <img
                  src="/images/ongoing-images/sri-chaitanya-school-main-img-768x538.jpg"
                  alt=""
                />
              </div>

              <p className="subHeadingText ">Sri Chaitanya School – Karur</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Projects*/}
    </div>
  );
}
