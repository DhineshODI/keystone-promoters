import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ContactPage() {
  gsap.registerPlugin(ScrollTrigger);

  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    gsap.to(el, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        scrub: true, // smooth scroll effect
      },
    });
  }, []);
  return (
    <>
      {/* Banner */}
      <div ref={heroRef}>
        <div className="detailPageBanners">
          <h5 className="secondHeadingText">Connect &</h5>
          <h5 className="secondHeadingText">Collaborate</h5>

          <div className="BreadCrumSection">
            <span className="subHeadingText">Home</span>
            <span className="subHeadingText">-</span>
            <span className="subHeadingText">Contact US</span>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* After-Banner-Section */}

      <div className="afterMainBG">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="bannerafterSectionMAIN">
            <div className="firstbannerafterSectionMAIN">
              <div>
                <h4 className="gettknowHeading">Get to know us</h4>
                <h3 className="visitOurOFficetext">
                  Visit us at our office location
                </h3>
              </div>

              <div style={{ marginTop: "15px" }}>
                <h4 className="gettknowHeading">Address</h4>
                <p className="contactPageAddress">
                  Door No.1, GF-A, Amace Ganga Sarojini Street, Mahalingapuram,
                  Nungambakkam, Chennai 600 034
                </p>
              </div>
            </div>
            <div className="seondbannerafterSectionMAIN"></div>
            <div className="thirdbannerafterSectionMAIN">
              <div style={{ marginTop: "15px" }}>
                <h4 className="gettknowHeading">Phone</h4>
                <p className="contactPageAddress">+91 7092879022</p>
              </div>
              <div style={{ marginTop: "15px" }}>
                <h4 className="gettknowHeading">MOBILE</h4>
                <p className="contactPageAddress">+91 7092879022</p>
              </div>
              <div style={{ marginTop: "15px" }}>
                <h4 className="gettknowHeading">Email</h4>
                <p className="contactPageAddress">info@keystonepromoters.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After-Banner-Section */}

      <div className="contactPageBgPadding">
        <div className="contactUsBannerPageBg">
          <div className="formContactUsSection">
            <div className="formContactUsSectionFlex">
              <h5 className="secondHeadingText ">Begin Your Journey</h5>
              <p className="subHeadingText">
                Contact us with your question we'll make sure your concerns are
                addressed quickly and efficiently
              </p>

              <div className="formMainStyleContactPage">
                <div className="contactFormInputEach">
                  <label className="subHeadingText " htmlFor="">
                    Name <sup>*</sup>
                  </label>
                  <br />
                  <input type="text" />
                </div>
                <div className="contactFormInputEach">
                  <label className="subHeadingText " htmlFor="">
                    Name <sup>*</sup>
                  </label>
                  <br />
                  <input type="text" />
                </div>
                <div className="contactFormInputEach">
                  <label className="subHeadingText " htmlFor="">
                    Name <sup>*</sup>
                  </label>
                  <br />
                  <input type="text" />
                </div>
                <div className="contactFormInputEach">
                  <label className="subHeadingText " htmlFor="">
                    Name <sup>*</sup>
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
    </>
  );
}
