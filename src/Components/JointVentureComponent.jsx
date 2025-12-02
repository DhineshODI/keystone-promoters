import AOS from "aos";
import "aos/dist/aos.css";
export default function JointVentureComponent() {
  return (
    <>
      <div className="JointVenturePage">
        {/* Banner */}
        <div>
          <div className="detailPageBanners">
            <h5 className="secondHeadingText">Build On</h5>
            <h5 className="secondHeadingText">Commitment</h5>

            <div className="BreadCrumSection">
              <a href="/" className="subHeadingText  text-hover-underline">
                Home
              </a>
              <span className="subHeadingText">-</span>
              <span className="subHeadingText text-hover-underline">
                Joint Venture
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
                    <h4 className="gettknowHeading">Grow with Us</h4>
                    <h3 className="visitOurOFficetext">
                      Let's Build <br /> Sucess Through <br /> Joint Ventures.
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
                      Partner with Keystone Spaces to unlock profitable
                      development opportunities, shared growth, and long-term
                      value through trusted, transparent collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Banner-Section */}

        {/* Work With Us Section*/}

        <div className="worthwithUsSection">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="mainSectionFormWithUs">
              <div className="formContactUsSectionFlex">
                <h5 className="secondHeadingText ">Joint Venture</h5>
                <p className="subHeadingText">
                  Partner with Keystone Promoters to create valuable,
                  high-quality developments that redefine urban living and
                  inspire mutual growth.
                </p>

                <div className="formMainStyleContactPage">
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name of the Company <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Email <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Phone Number <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Location of the Property <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Land Extent <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Remarks
                    </label>
                    <br />
                    <input type="text" />
                  </div>

                  <div className="contactFormInputEach">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work With Us Section*/}
      </div>
    </>
  );
}
