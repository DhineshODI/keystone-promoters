import { useEffect } from "react";
import AboutusFounder from "../Components/AboutUSFounders";
import AboutusSlider from "../Components/AboutusSlider";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  return (
    <>
      <div>
        {/* <Header /> */}
        <div className="aboutuspagesection">
          {/* Banner */}
          <div>
            <div className="detailPageBanners">
              <h5
                className="secondHeadingText"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Building Future
              </h5>
              <h5
                className="secondHeadingText"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                Forward
              </h5>

              {/* <div className="BreadCrumSection">
                <span className="subHeadingText">Home</span>
                <span className="subHeadingText">-</span>
                <span className="subHeadingText">Careers</span>
              </div> */}
              <p
                className="subHeadingText"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Building homes and communities with excellence, integrity and
                vision—transforming spaces into lasting value while shaping
                tomorrow’s living experiences.
              </p>
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
                      <h4 className="gettknowHeading">
                        We are Keystone Promoters
                      </h4>
                      <h3 className="visitOurOFficetext">
                        Beautifully built spaces that inspire, function
                        seamlessly & reflect timeless quality.
                      </h3>
                    </div>
                  </div>
                  <div className="seondbannerafterSectionMAIN">
                    {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                    <img src="/images/aboutus-banner-icon.png" alt="" />
                  </div>
                  <div
                    className="thirdbannerafterSectionMAIN"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <div style={{ marginTop: "15px" }}>
                      <p className="contactPageAddress">
                        Built on 25 Years of Experience
                      </p>
                      <p className="subHeadingText aboutustextcontent">
                        Building quality spaces with trust, innovation and
                        timeless craftsmanship across generations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flexunderaboutsection">
                  <div
                    className="underaboutusection"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <div className="firstunderaboutusection">
                      <p className="subHeadingText">
                        <span>50 + </span> Projects built with enduring quality
                      </p>
                    </div>
                    <p className="subHeadingText numbertext">01</p>
                  </div>
                  <div
                    className="underaboutusection"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="firstunderaboutusection">
                      <p className="subHeadingText">
                        <span>2k +</span> Families chose us with confidence
                      </p>
                    </div>
                    <p className="subHeadingText numbertext">02</p>
                  </div>
                  <div
                    className="underaboutusection"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="firstunderaboutusection">
                      <p className="subHeadingText">
                        <span>1M + </span> Square feet built with care
                      </p>
                    </div>
                    <p className="subHeadingText numbertext">03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After-Banner-Section */}

          <div>
            <div className="shapeusconatiner">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="shapeusflex">
                  {/* <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    src="/images/homepage/bannerVideo.mp4"
                    type="video/mp4"
                  ></video> */}

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                  >
                    <source
                      src="/images/homepage/bannerVideo.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="shapeconatinerflex">
                    <p
                      className="secondHeadingText"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      Shaping lifespaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work With Us Section*/}

          <div className="keystoneuniquesection">
            <div className="container max-w-7xl mx-auto px-4 ">
              <div className="lowconatinersection">
                <p
                  className="mainheadingText"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  We are Keystone Promoters
                </p>
                <div
                  className="unqiuesectionflex"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h5 className="secondHeadingText ">
                    What Makes Keystone Unique?
                  </h5>
                  <p className="subHeadingText ">
                    What sets Keystone apart is our blend of thoughtful
                    planning, modern aesthetics, transparency and a
                    customer-first approach to development.
                  </p>
                </div>

                <div className="unqiuecardsflexc">
                  <div
                    className="unquiecardsection"
                    data-aos="flip-up"
                    data-aos-duration="500"
                  >
                    <img
                      src="/images/about-us/icons/time-delivery.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">Timely Delivery </h3>
                    <p className="subHeadingText ">
                      Every commitment met with precision
                    </p>
                  </div>
                  <div
                    className="unquiecardsection"
                    data-aos="flip-up"
                    data-aos-duration="500"
                  >
                    <img src="/images/about-us/icons/design-led.svg" alt="" />
                    <h3 className="timedelivery">Design Led </h3>
                    <p className="subHeadingText ">Architecture with a soul</p>
                  </div>
                  <div
                    className="unquiecardsection"
                    data-aos="flip-up"
                    data-aos-duration="800"
                  >
                    <img src="/images/about-us/icons/compliment.svg" alt="" />
                    <h3 className="timedelivery">100% Compliant</h3>
                    <p className="subHeadingText ">
                      Legal clarity, clear title
                    </p>
                  </div>
                  <div
                    className="unquiecardsection"
                    data-aos="flip-up"
                    data-aos-duration="800"
                  >
                    <img
                      src="/images/about-us/icons/solid-foundation1.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">Solid Foundations</h3>
                    <p className="subHeadingText ">
                      Structurally sound and aesthetically modern
                    </p>
                  </div>
                  <div
                    className="unquiecardsection"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                  >
                    <img src="/images/about-us/icons/investor.svg" alt="" />
                    <h3 className="timedelivery">Investor Friendly</h3>
                    <p className="subHeadingText ">High appreciation value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="visionmissonrow">
            <div className=" container max-w-7xl mx-auto px-4 ">
              <div className="vissionmissionaboutrow">
                <div className="aboutusvissionmission">
                  <img src="/images/about-us/vissionmissonimage.jpg" alt="" />
                </div>
                <h5
                  data-text="VISION & MISSION"
                  className="vissionmisiontext secondHeadingText line3"
                >
                  VISION & MISSION
                </h5>

                <div
                  className="leftsidecontentsectionabout"
                  data-aos="fade-left"
                  data-aos-duration="1300"
                >
                  <p className="subHeadingText ">
                    To redefine urban living by creating thoughtfully designed
                    spaces that blend innovation, sustainability and
                    elegance—enhancing life styles and building lasting
                    community value.
                  </p>

                  <div className="visiiontexttransperant">
                    <p className="subHeadingText">Vision</p>
                  </div>
                </div>

                <div
                  className="rightsidecontentsectionabout"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  <p className="subHeadingText ">
                    To deliver quality-driven developments through integrity,
                    precision and customer trust, ensuring every project
                    reflects excellence in design and craftsmanship.
                  </p>

                  <div className="visiiontexttransperant">
                    <p className="subHeadingText">Mission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AboutusFounder />

          {/* <AboutusSlider /> */}
        </div>
      </div>
    </>
  );
}
