// // import { useState } from "react";

// // export default function HomepageImageHoverSection() {
// //   const [activeImage, setActiveImage] = useState(
// //     "/images/homepage/hoverimageone.jpg"
// //   );
// //   const [activeText, setActiveText] = useState("");

// //   const images = {
// //     Listen: "/images/homepage/hoverimagetwo.jpg",
// //     Design: "/images/homepage/hoverimageone.jpg",
// //     Build: "/images/homepage/hoverimagetwo.jpg",
// //     Deliver: "/images/homepage/hoverimageone.jpg",
// //     Support: "/images/homepage/hoverimagetwo.jpg",
// //   };

// //   const texts = {
// //     Listen: "We carefully understand your needs",
// //     Design: "We plan with function and  elegance",
// //     Build: "Turning ideas into reality",
// //     Deliver: "Delivering with precision and quality",
// //     Support: "Support continues even after delivery",
// //   };

// //   const list = ["Listen", "Design", "Build", "Deliver", "Support"];

// //   return (
// //     <>
// //       <div className="OurSignatureApproach">
// //         <div className="container max-w-7xl mx-auto px-4">
// //           <div className="lowconatinersectionafterbanner">
// //             <div className="oursignatureflex">
// //               {/* LEFT SIDE */}
// //               <div className="oursignarureleftside">
// //                 <div className="oursignaturecontents">
// //                   <ul>
// //                     {list.map((item, index) => (
// //                       <li
// //                         key={index}
// //                         onMouseEnter={() => {
// //                           setActiveImage(images[item]);
// //                           setActiveText(texts[item]);
// //                         }}
// //                         onMouseLeave={() => {
// //                           setActiveImage("/images/homepage/hoverimagetwo.jpg");
// //                           setActiveText("");
// //                         }}
// //                       >
// //                         <span className="main-text">{item}</span>

// //                         {/* Side text on hover */}
// //                         {activeText && activeText === texts[item] && (
// //                           <span className="side-text">{texts[item]}</span>
// //                         )}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>

// //               {/* RIGHT SIDE IMAGE */}
// //               <div className="oursignarurerightside">
// //                 <img src={activeImage} alt="" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// import { useState } from "react";

// export default function HomepageImageHoverSection() {
//   const images = {
//     Listen: "/images/homepage/hoverimagetwo.jpg",
//     Design: "/images/homepage/hoverimageone.jpg",
//     Build: "/images/homepage/hoverimagetwo.jpg",
//     Deliver: "/images/homepage/hoverimageone.jpg",
//     Support: "/images/homepage/hoverimagetwo.jpg",
//   };

//   const texts = {
//     Listen: "We carefully understand your needs",
//     Design: "We plan with function and elegance",
//     Build: "Turning ideas into reality",
//     Deliver: "Delivering with precision and quality",
//     Support: "Support continues even after delivery",
//   };

//   const list = ["Listen", "Design", "Build", "Deliver", "Support"];

//   // ⭐ Default active is the first item "Listen"
//   const [activeItem, setActiveItem] = useState(list[0]);
//   const [activeImage, setActiveImage] = useState(images[list[0]]);
//   const [activeText, setActiveText] = useState(texts[list[0]]);

//   return (
//     <div className="OurSignatureApproach">
//       <div className="container max-w-7xl mx-auto px-4">
//         <div className="lowconatinersectionafterbanner">
//           <div className="oursignatureflex">

//             {/* LEFT SIDE LIST */}
//             <div className="oursignarureleftside">
//               <div className="oursignaturecontents">
//                 <ul>
//                   {list.map((item, index) => (
//                     <li
//                       key={index}
//                       className={activeItem === item ? "active-li" : ""}
//                       onMouseEnter={() => {
//                         setActiveItem(item);
//                         setActiveImage(images[item]);
//                         setActiveText(texts[item]);
//                       }}
//                       onMouseLeave={() => {}}
//                     >
//                       <span className="main-text">{item}</span>

//                       {/* Show text only for active item */}
//                       {activeItem === item && (
//                         <span className="side-text">{texts[item]}</span>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* RIGHT SIDE IMAGE */}
//             <div className="oursignarurerightside">
//               <img src={activeImage} alt="" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

export default function HomepageImageHoverSection() {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const images = {
    Listen: "/images/homepage/listen.jpg",
    Design: "/images/homepage/design.jpg",
    Build: "/images/homepage/build.jpg",
    Deliver: "/images/homepage/deliver.jpg",
    Support: "/images/homepage/support.jpg",
  };

  const texts = {
    Listen: "We hear your needs before we begin",
    Design: "We craft spaces that elevate lifestyle",
    Build: "With foundation of trust lifetime",
    Deliver: "We complete the promise with precision",
    Support: "Place where you can count on us forever",
  };

  const list = ["Listen", "Design", "Build", "Deliver", "Support"];

  const [activeItem, setActiveItem] = useState(list[0]);
  const [activeImage, setActiveImage] = useState(images[list[0]]);
  const [activeText, setActiveText] = useState(texts[list[0]]);
  const [hoverItem, setHoverItem] = useState(null); // ⭐ hover state

  return (
    <div className="OurSignatureApproach">
      <div class="marquee-loop">
        <div class="track">
          <span>Our Signature Approach - </span>
          <span>Our Signature Approach - </span>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="lowconatinersectionafterbanner">
          <div>
            <p
              className="subHeadingText newtextsection1"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Our approach transforms every project into a journey of
              collaboration, creativity, and precision-delivering purposeful,
              lasting spaces.
            </p>
          </div>
          <div className="oursignatureflex fordesktophoversection">
            {/* LEFT SIDE */}
            <div
              className="oursignarureleftside"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="oursignaturecontents">
                <ul>
                  {list.map((item, index) => (
                    <li
                      key={index}
                      className={`
                        ${activeItem === item ? "active-li" : ""}
                        ${hoverItem === item ? "hover-li" : ""}
                      `}
                      onMouseEnter={() => {
                        setHoverItem(item);
                        setActiveItem(item);
                        setActiveImage(images[item]);
                        setActiveText(texts[item]);
                      }}
                      onMouseLeave={() => {
                        setHoverItem(null);
                      }}
                    >
                      <span className="main-text">{item}</span>

                      {activeItem === item && (
                        <span className="side-text">{texts[item]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div
              className="oursignarurerightside"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img className="active-image" src={activeImage} alt="" />
            </div>
          </div>

          <div className="formobilehoversection">
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            className={`mobile-accordion-item ${
              activeItem === item ? "active" : ""
            }`}
          >
            <div
              className="mobile-accordion-header"
              onClick={() =>
                setActiveItem(activeItem === item ? null : item)
              }
            >
              <span
                className={`main-text secondHeadingText ${
                  activeItem === item ? "active-color" : ""
                }`}
                data-text={item}
              >
                {item}
              </span>

              <span className="plusminus">
                {activeItem === item ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {activeItem === item && (
                <motion.div
                  className="mobile-accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className="subHeadingText">{texts[item]}</p>
                  <img
                    src={images[item]}
                    alt={item}
                    className="mobile-accordion-img"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
        </div>
      </div>
    </div>
  );
}
