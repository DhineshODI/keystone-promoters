import { useEffect, useState } from "react";

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
    const projectsEnd = 100;
    const projectsDuration = 1500;
    const projectsStep = projectsDuration / projectsEnd;

    const projectsTimer = setInterval(() => {
      projectsStart += 1;
      setProjects(projectsStart);
      if (projectsStart === projectsEnd) clearInterval(projectsTimer);
    }, projectsStep);

    // FAMILY counter (1 → 50) — example
    let familyStart = 0;
    const familyEnd = 3;
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

  return (
    <>
      <div className="LiveThoughtsBg reveal ">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="liveThoughtsContents">
            <h3 className="text-left mainheadingText textTransform text-[#fff]">
              We are Keystone Promoters
            </h3>

            <div className="LiveKeystonePromoters">
              <h6 className="secondHeadingText">Live the Thoughtful</h6>
              <h6 className="secondHeadingText">Difference</h6>
            </div>
          </div>

          <p className="subHeadingText">
            At Keystone Promoters, we craft spaces where design meets purpose.
            Every project reflects precision, trust, and innovation-creating
            sustainable environments that inspire modern living and long-term
            value for our clients and communities.
          </p>
          <div className="LiveThoughtFlex">
            <div className="LiveThoughtFlexImg">
              <img src="/images/homepage/famil-Pic-Section.png" alt="" />

              <a href="/aboutus">
                <button className="knowMoreButtonImage cursor-pointer">Know More</button>{" "}
              </a>
            </div>

            <div className="mobileliveflex">
              <div className="yearsScrollText">
                <h6 className="secondHeadingText">{years}</h6>
                <span>years & counting</span>
              </div>
              <div className="yearsScrollText projectsScroll">
                <h6 className="secondHeadingText">{projects}</h6>
                <span>Sucessfull Projects</span>
              </div>
              <div className="yearsScrollText projectsScroll">
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
