// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function VideoBanner() {
//   const titleRef = useRef(null);
//   const paraRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       }
//     );

//     gsap.fromTo(
//       paraRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         delay: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: paraRef.current,
//           start: "top 90%",
//         },
//       }
//     );

//     ScrollTrigger.refresh();
//   }, []);
//   return (
//     <>
//       <div className="videoBannermainContainer">
//         <div className="videoBannerVideoFILE">
//           <video
//             autoPlay
//             muted
//             loop
//             src="/images/homepage/bannerVideo.mp4"
//           ></video>

//           <div className="contentHeadingBanner">
//             <h5 ref={titleRef} className="secondHeadingText">
//               CRAFTSMANSHIP
//             </h5>
//             <h6 ref={titleRef} className="withTextContent">
//               with
//             </h6>
//             <h5 ref={titleRef} className="secondHeadingText">
//               Purpose
//             </h5>
//             <p ref={paraRef} className="subHeadingText">
//               Every detail is designed with intention-Blending functionality,
//               beauty and innovation to create hom ffthat stand the test of time
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoBanner() {
  const headingRefs = useRef([]);
  const paraRef = useRef(null);

  // function to push elements into ref array
  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useEffect(() => {
    // animate all heading items with stagger
    gsap.fromTo(
      headingRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.18,
        delay: 0.5,
        scrollTrigger: {
          trigger: headingRefs.current[0],
          start: "top 85%",
        },
      }
    );

    // animate paragraph
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.5,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 90%",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="videoBannermainContainer">
      <div className="videoBannerVideoFILE">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          src="/images/homepage/bannerVideo.mp4"
        ></video> */}

        <video autoPlay muted loop playsInline webkit-playsinline="true">
          <source src="/images/homepage/bannerVideo.mp4" type="video/mp4" />
        </video>

        <div className="contentHeadingBanner">
          <h5 ref={addToRefs} className="secondHeadingText">
            CRAFTSMANSHIP
          </h5>
          <h6 ref={addToRefs} className="withTextContent">
            with
          </h6>
          <h5 ref={addToRefs} className="secondHeadingText">
            Purpose
          </h5>

          <p ref={paraRef} className="subHeadingText">
            Every detail is designed with intention — blending functionality,
            beauty and innovation to create homes that stand the test of time.
          </p>
        </div>
      </div>
    </div>
  );
}
