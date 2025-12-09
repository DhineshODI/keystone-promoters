import { useEffect } from "react";
import NriFaq from "../Components/NriFaq";
import OngoingProjects from "../Components/OnGoingProjects";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Thankyoupage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);
  return (
    <>
      <>
        <div className="">
          <div>
            <div className="NriPage thannkyoupage">
              {/* Banner */}
              <div>
                <div className="detailPageBanners NRIbaner">
                  <h5
                    className="secondHeadingText"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    Thankyou
                  </h5>
                  <h5
                    className="secondHeadingText"
                    data-aos="fade-up"
                    data-aos-duration="1250"
                  ></h5>
                  <p
                    className="subHeadingText"
                    data-aos="fade-up"
                    data-aos-duration="1450"
                  >
                    {/* Every detail is designed with intention-Blending
                    functionality, beauty and innovation to create homes that
                    stand the test of time */}
                    Your submission has been received successfully. Our team
                    will connect with you shortly to provide guidance, support,
                    and next steps for a smooth experience.
                  </p>
                </div>
              </div>
              {/* Banner */}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
