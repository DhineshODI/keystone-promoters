export default function ScheduleAvisit() {
  return (
    <>
      <div className="schudleVisitsection reveal">
        <div className="container max-w-7xl mx-auto px-4 scheduleAvisitrow ">
          <div className="schdeuleMainrowsection">
            <h3 className="text-center mainheadingText textTransform text-bold">
              Schedule A visit | Enquiry
            </h3>

            <div className="sechondHeadingMain">
              <h5
                className="secondHeadingText textTransform text-center"
                style={{ fontWeight: "600", textTransform: "uppercase" }}
              >
                Your Dream home is just a visit away
              </h5>
            </div>

            <div className="sechondHeadingMain">
              <p className="subHeadingText text-center text-[#1d1f22]">
                Come see where craftsmanship meets your vision of dream home.
              </p>
            </div>

            <div className="scheduleaVisitbutton">
              <button>Enquire Now</button>
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
