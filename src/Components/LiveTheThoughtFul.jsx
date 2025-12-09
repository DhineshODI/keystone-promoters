import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LiveThoughtFul() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [family, setFamily] = useState(0);
  useEffect(() => {
    // YEARS counter (1 → 25)
    let yearsStart = 0;
    const yearsEnd = 25;
    const yearsDuration = 1500; // 1s
    const yearsStep = yearsDuration / yearsEnd;

    const yearsTimer = setInterval(() => {
      yearsStart += 1;
      setYears(yearsStart);
      if (yearsStart === yearsEnd) clearInterval(yearsTimer);
    }, yearsStep);

    // PROJECTS counter (1 → 100)
    let projectsStart = 0;
    const projectsEnd = 50;
    const projectsDuration = 1500;
    const projectsStep = projectsDuration / projectsEnd;

    const projectsTimer = setInterval(() => {
      projectsStart += 1;
      setProjects(projectsStart);
      if (projectsStart === projectsEnd) clearInterval(projectsTimer);
    }, projectsStep);

    // FAMILY counter (1 → 50) — example
    let familyStart = 0;
    const familyEnd = 2;
    const familyDuration = 1500;
    const familyStep = familyDuration / familyEnd;

    const familyTimer = setInterval(() => {
      familyStart += 1;
      setFamily(familyStart);
      if (familyStart === familyEnd) clearInterval(familyTimer);
    }, familyStep);

    // Cleanup on unmount
    return () => {
      clearInterval(yearsTimer);
      clearInterval(projectsTimer);
      clearInterval(familyTimer);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  return (
    <>
      <div className="LiveThoughtsBg reveal ">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="liveThoughtsContents">
            <h3 className="text-left mainheadingText textTransform text-[#fff]" data-aos="fade-up" >
              We are Keystone Promoters
            </h3>

            <div className="LiveKeystonePromoters" data-aos="fade-up" data-aos-delay="200">
              <h6 className="secondHeadingText">Live the Thoughtful</h6>
              <h6 className="secondHeadingText">Difference</h6>
            </div>
          </div>

          <p className="subHeadingText" data-aos="fade-up" data-aos-delay="400">
            At Keystone Promoters, we craft spaces where design meets purpose.
            Every project reflects precision, trust and innovation-creating
            sustainable environments that inspire modern living and long-term
            value for our clients and communities.
          </p>
          <div className="LiveThoughtFlex" >
            <div className="LiveThoughtFlexImg" data-aos="fade-right"   data-aos-duration="1000">
              <img src="/images/homepage/famil-Pic-Section.png" alt="" />

              <a href="/brand">
                <button  data-aos="fade-up" data-aos-duration="1000" className="knowMoreButtonImage cursor-pointer">
                  Know More
                </button>{" "}
              </a>
            </div>

            <div className="mobileliveflex">
              <div className="yearsScrollText" data-aos="fade-left" data-aos-duration="1000">
                <h6 className="secondHeadingText">{years}</h6>
                <span>years & counting</span>
              </div>
              <div className="yearsScrollText projectsScroll" data-aos="fade-left" data-aos-duration="800">
                <h6 className="secondHeadingText">{projects}</h6>
                <span>Successful Projects</span>
              </div>
              <div className="yearsScrollText projectsScroll" data-aos="fade-left" data-aos-duration="500">
                <h6 className="secondHeadingText">{family}K</h6>
                <span>Families Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
