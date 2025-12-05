import AOS from "aos";
import "aos/dist/aos.css";
export default function ScheduleAvisit() {
  return (
    <>
      <div className="schudleVisitsection reveal">
        <div className="container max-w-7xl mx-auto px-4 scheduleAvisitrow ">
          <div className="schdeuleMainrowsection">
            <h3 className="text-center mainheadingText textTransform text-bold" data-aos="fade-down"  data-aos-duration="1200">
              Schedule A visit | Enquiry
            </h3>

            <div className="sechondHeadingMain" data-aos="fade-down"  data-aos-duration="1500">
              <h5 
                className="secondHeadingText textTransform text-center mobdesigntext"
                style={{ fontWeight: "600", textTransform: "uppercase" }}
              >
                Your Dream home is just a visit away
              </h5>
            </div>

            <div className="sechondHeadingMain" data-aos="fade-down"  data-aos-duration="1800">
              <p className="subHeadingText text-center text-[#1d1f22] ">
                Come see where craftsmanship meets your vision of dream home.
              </p>
            </div>

            <div className="scheduleaVisitbutton">
              <a className="z-100 " href="/contact#form_id">
                <button className="cursor-pointer">Enquire Now</button>
              </a>
            </div>

            <div className="keystonesectionflexx">
              <div className="onetextkeystone">
                <div class="line1 secondHeadingText " data-text="KeyStone">
                  KeyStone
                </div>
              </div>

              <div className="twotextkeystone">
                <div class="line2 secondHeadingText " data-text="Promoters">
                  Promoters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
