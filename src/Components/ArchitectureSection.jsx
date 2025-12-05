import AOS from "aos";
import "aos/dist/aos.css";
export default function ArchitectureSection() {
  return (
    <>
      <div className="archiBg">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="MainarchitectureWidth">
            <div
              className="architectureWidth"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img src="/images/homepage/firstimage.png" alt="" />

              <div className="ArchitectureContent">
                <h4 className="secondHeadingText">Architecture</h4>

                <div className="archisecondHeadingText">
                  <p className="subHeadingText">
                    Innovative architecture blending functionality, aesthetics,
                    and sustainability for timeless living environments.
                  </p>

                  <button
                    onClick={() => (window.location.href = "/architecture")}
                    className="subHeadingText knowmorearchibutton"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div
              className="architectureWidth"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img src="/images/homepage/secondmage.png" alt="" />

              <div className="ArchitectureContent">
                <h4 className="secondHeadingText">Apartments</h4>

                <div className="archisecondHeadingText">
                  <p className="subHeadingText">
                    Building with precision, quality, and trust to create
                    lasting, high-value developments.
                  </p>

                  <button
                    onClick={() => (window.location.href = "/ongoing-projects")}
                    className="subHeadingText knowmorearchibutton"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div
              className="architectureWidth"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img src="/images/homepage/thirdmage.png" alt="" />

              <div className="ArchitectureContent">
                <h4 className="secondHeadingText">Interiors</h4>

                <div className="archisecondHeadingText">
                  <p className="subHeadingText">
                    Designing interiors that blend elegance, comfort, and
                    functionality for inspired living spaces.
                  </p>

                  <button
                    onClick={() => (window.location.href = "/interior")}
                    className="subHeadingText knowmorearchibutton"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
