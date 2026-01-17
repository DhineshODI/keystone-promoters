import { useEffect } from "react";
import NriFaq from "../Components/NriFaq";
import OngoingProjects from "../Components/OnGoingProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

export default function NriPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>NRI Home Buyers | Keystone Promoters</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Keystone Promoters serves NRI home buyers with thoughtfully planned homes, clear documentation, and reliable project delivery in Chennai."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/nri" />

        {/* Schema Markup */}
      </Helmet>

      <h1 style={{ display: "none" }}>NRI Home Buyers</h1>

      <div className="">
        <div>
          <div className="NriPage">
            {/* Banner */}
            <div>
              <div className="detailPageBanners NRIbaner">
                <h5
                  className="secondHeadingText"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Smart Choices
                </h5>
                <h5
                  className="secondHeadingText"
                  data-aos="fade-up"
                  data-aos-duration="1250"
                >
                  For NRIS
                </h5>
                <p
                  className="subHeadingText"
                  data-aos="fade-up"
                  data-aos-duration="1450"
                >
                  {/* Every detail is designed with intention-Blending
                  functionality, beauty and innovation to create homes that
                  stand the test of time */}
                  Find the right investment with expert assistance, verified
                  information and dependable service that ensures every NRI
                  enjoys a safe, simple and rewarding property-buying
                  experience.
                </p>
              </div>
            </div>
            {/* Banner */}

            <div className="nridiscoversection">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="lowconatinersection">
                  <div>
                    <p
                      className="mainheadingText "
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      We are Keystone Promoters
                    </p>

                    <h5
                      className="secondHeadingText "
                      data-aos="fade-right"
                      data-aos-duration="1300"
                    >
                      Discover Why Real Estate Investment Is Your Smartest
                      Choice
                    </h5>
                  </div>

                  <div className="flexnriimage">
                    <div
                      className="oneflexnriimage"
                      data-aos="fade-right"
                      data-aos-duration="1300"
                    >
                      <img src="/images/nri/nridiscoverimage.jpg" alt="" />
                    </div>
                    <div className="twoflexnriimage">
                      <p
                        className="maincontentnriimage"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        Building Trusted, Innovative and Excellent Homes for
                        Over 25 Years
                      </p>

                      <p
                        className="subHeadingText"
                        data-aos="fade-left"
                        data-aos-duration="1300"
                      >
                        Delivering thoughtfully planned communities with
                        precision, reliability and passion, every project
                        embodies innovation, quality construction, lasting value
                        and exceptional experiences that make us a trusted name.
                      </p>

                      <ul className="nrilist">
                        <li data-aos="fade-left" data-aos-duration="1300">
                          <div className="mainlistul">
                            <p className="firstulnri">
                              <strong> 50 +</strong> Projects built with
                              enduring quality
                            </p>
                            <p className="valuediv">01</p>
                          </div>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1600">
                          <div className="mainlistul">
                            <p className="firstulnri">
                              <strong> 2k +</strong> Families chose us with
                              confidence
                            </p>
                            <p className="valuediv">02</p>
                          </div>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1800">
                          <div className="mainlistul">
                            <p className="firstulnri">
                              <strong> 1M +</strong> Square feet built with care
                            </p>
                            <p className="valuediv">03</p>
                          </div>
                        </li>
                      </ul>

                      <div
                        className="nrilistenquire"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <a href="/contact#form_id">
                          <button className="cursor-pointer">
                            Enquire Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="keystoneuniquesection">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="lowconatinersection">
                  <p
                    className="mainheadingText "
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    We are Keystone Promoters
                  </p>
                  <div className="unqiuesectionflex">
                    <h5
                      className="secondHeadingText "
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      What Makes Keystone Unique?
                    </h5>
                    <p className="subHeadingText ">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscingelit do
                      eius mmporincididunt ut labore et dolore magna uis ipsum
                      suspendisse et dolore magna uis ipsum suspendisse */}
                    </p>
                  </div>

                  <div className="unqiuecardsflexc">
                    <div
                      className="unquiecardsection"
                      data-aos="zoom-in"
                      data-aos-duration="1100"
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
                      data-aos="zoom-in"
                      data-aos-duration="1400"
                    >
                      <img src="/images/about-us/icons/design-led.svg" alt="" />
                      <h3 className="timedelivery">Design Led </h3>
                      <p className="subHeadingText ">
                        Architecture with a soul
                      </p>
                    </div>
                    <div
                      className="unquiecardsection"
                      data-aos="zoom-in"
                      data-aos-duration="1800"
                    >
                      <img src="/images/about-us/icons/compliment.svg" alt="" />
                      <h3 className="timedelivery">100% Compliant</h3>
                      <p className="subHeadingText ">
                        Legal clarity, clear title
                      </p>
                    </div>
                    <div
                      className="unquiecardsection"
                      data-aos="zoom-in"
                      data-aos-duration="1300"
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
                      data-aos="zoom-in"
                      data-aos-duration="1600"
                    >
                      <img src="/images/about-us/icons/investor.svg" alt="" />
                      <h3 className="timedelivery">Investor Friendly</h3>
                      <p className="subHeadingText ">High appreciation value</p>
                    </div>
                  </div>

                  <div className="nricardscontent">
                    <p
                      className="subHeadingText "
                      data-aos="fade-up"
                      data-aos-duration="1100"
                    >
                      What sets Keystone apart is our blend of thoughtful
                      planning, modern aesthetics, transparency and a
                      customer-first approach to development.
                    </p>
                  </div>

                  <div
                    className="NriPagebutton"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  >
                    <a href="/contact#form_id">
                      <button className="cursor-pointer">Enquire Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <OngoingProjects />

            <NriFaq />
          </div>
        </div>
      </div>
    </>
  );
}
