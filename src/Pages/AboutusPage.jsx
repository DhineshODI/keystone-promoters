import AboutusFounder from "../Components/AboutUSFounders";
import Header from "../Components/Header";

export default function AboutUsPage() {
  return (
    <>
      <div>
        <Header />
        <div className="aboutuspagesection">
          {/* Banner */}
          <div>
            <div className="detailPageBanners">
              <h5 className="secondHeadingText">Building Future</h5>
              <h5 className="secondHeadingText">Forward</h5>

              {/* <div className="BreadCrumSection">
                <span className="subHeadingText">Home</span>
                <span className="subHeadingText">-</span>
                <span className="subHeadingText">Careers</span>
              </div> */}
              <p className="subHeadingText">
                Every detail is designed with intention-Blending functionality,
                beauty, and innovation to create homes that stand the test of
                time
              </p>
            </div>
          </div>
          {/* Banner */}

          {/* After-Banner-Section */}

          <div className="afterMainBG">
            <div className="container max-w-7xl mx-auto px-4 ">
              <div className="bannerafterSectionMAIN">
                <div className="firstbannerafterSectionMAIN">
                  <div>
                    <h4 className="gettknowHeading">
                      We are Keystone Promoters
                    </h4>
                    <h3 className="visitOurOFficetext">
                      Beautifully built spaces that inspire, function
                      seamlessly, & reflect timeless quality.
                    </h3>
                  </div>
                </div>
                <div className="seondbannerafterSectionMAIN"></div>
                <div className="thirdbannerafterSectionMAIN">
                  <div style={{ marginTop: "15px" }}>
                    <p className="contactPageAddress">
                      Built on 25 Years of Experience
                    </p>
                    <p className="subHeadingText aboutustextcontent">
                      Building quality spaces with trust, innovation, and
                      timeless craftsmanship across generations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flexunderaboutsection">
                <div className="underaboutusection">
                  <div className="firstunderaboutusection">
                    <p className="subHeadingText">
                      <span>100 + </span> Projects built with enduring quality
                    </p>
                  </div>
                  <p className="subHeadingText numbertext">01</p>
                </div>
                <div className="underaboutusection">
                  <div className="firstunderaboutusection">
                    <p className="subHeadingText">
                      <span>3k +</span> Families chose us with confidence
                    </p>
                  </div>
                  <p className="subHeadingText numbertext">02</p>
                </div>
                <div className="underaboutusection">
                  <div className="firstunderaboutusection">
                    <p className="subHeadingText">
                      <span>5M + </span> Square feet built with care
                    </p>
                  </div>
                  <p className="subHeadingText numbertext">03</p>
                </div>
              </div>
            </div>
          </div>

          {/* After-Banner-Section */}

          <div>
            <div className="shapeusconatiner">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="shapeusflex">
                  <img src="/images/about-us/abboutus-shapingus.jpg" alt="" />
                  <div className="shapeconatinerflex">
                    <p className="secondHeadingText">Shaping lifespaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work With Us Section*/}

          <div className="keystoneuniquesection">
            <div className="container max-w-7xl mx-auto px-4 ">
              <div className="lowconatinersection">
                <p className="mainheadingText ">We are Keystone Promoters</p>
                <div className="unqiuesectionflex">
                  <h5 className="secondHeadingText ">
                    What Makes Keystone Unique?
                  </h5>
                  <p className="subHeadingText ">
                    Lorem ipsum dolor sit amet, consectetur adipiscingelit do
                    eius mmporincididunt ut labore et dolore magna uis ipsum
                    suspendisse et dolore magna uis ipsum suspendisse
                  </p>
                </div>

                <div className="unqiuecardsflexc">
                  <div className="unquiecardsection">
                    <img
                      src="/images/about-us/icons/time-delivery.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">Timely Delivery </h3>
                    <p className="subHeadingText ">Every commitment met with precision</p>
                  </div>
                      <div className="unquiecardsection">
                    <img
                      src="/images/about-us/icons/design-led.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">Design Led </h3>
                    <p className="subHeadingText ">Architecture with a soul</p>
                  </div>
                      <div className="unquiecardsection">
                    <img
                      src="/images/about-us/icons/compliment.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">100%  Compliant</h3>
                    <p className="subHeadingText ">Legal clarity, clear title</p>
                  </div>
                      <div className="unquiecardsection">
                    <img
                      src="/images/about-us/icons/compliment.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">Solid Foundations</h3>
                    <p className="subHeadingText ">Structurally sound and  aesthetically modern</p>
                  </div>
                      <div className="unquiecardsection">
                    <img
                      src="/images/about-us/icons/investor.svg"
                      alt=""
                    />
                    <h3 className="timedelivery">Investor Friendly</h3>
                    <p className="subHeadingText ">High appreciation value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <AboutusFounder/>
        </div>
      </div>
    </>
  );
}
