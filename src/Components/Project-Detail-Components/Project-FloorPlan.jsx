// export default function ProjectFloorPan() {
//   return (
//     <>
//       <div className="projectfloorflex">
//         <div className="floorplanprojectdetail">
//           <div className="fullwidthprojectdetail">
//             <div className="floorplanleft">
//               <h4>Floor Plan</h4>
//               <p className="subHeadingText">
//                 Efficiently designed for space and comfort
//               </p>
//             </div>

//             <ul className="floorplanleftlist">
//               <li>Stlit</li>
//               <li >Block Plan</li>
//               <li >Block A</li>
//               <li className="activefloorstate">Block B</li>
//               <li>Block C</li>
//             </ul>
//           </div>
//         </div>
//         <div>
//           <div>
//             <img src="/images/project-detail/project-floorplan1.jpg" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectFloorPan() {
  // All floor items with label + image
  const floorItems = [
    {
      label: "block-a&b",
      img: "/images/project-detail/floor-plan/block-a&b.jpg",
    },
    {
      label: "block-a&b1",
      img: "/images/project-detail/floor-plan/block-a&b1.jpg",
    },
    {
      label: "block-a-a101-a501",
      img: "/images/project-detail/floor-plan/block-a-a101-a501.jpg",
    },
    {
      label: "block-a-a102-a502",
      img: "/images/project-detail/floor-plan/block-a-a102-a502.jpg",
    },
    {
      label: "block-a-a103-a503",
      img: "/images/project-detail/floor-plan/block-a-a103-a503.jpg",
    },

    {
      label: "block-a-a104-a504",
      img: "/images/project-detail/floor-plan/block-a-a104-a504.jpg",
    },
    {
      label: "block-a-a105-a505",
      img: "/images/project-detail/floor-plan/block-a-a105-a505.jpg",
    },
    {
      label: "block-a-typical-floor-plan",
      img: "/images/project-detail/floor-plan/block-a-typical-floor-plan.jpg",
    },
    {
      label: "block-b-b101-b401",
      img: "/images/project-detail/floor-plan/block-b-b101-b401.jpg",
    },
    {
      label: "block-b-b102-b402",
      img: "/images/project-detail/floor-plan/block-b-b102-b402.jpg",
    },
    {
      label: "block-b-b103-b403",
      img: "/images/project-detail/floor-plan/block-b-b103-b403.jpg",
    },
    {
      label: "block-b-b104-b404",
      img: "/images/project-detail/floor-plan/block-b-b104-b404.jpg",
    },
    {
      label: "block-b-fifth-floor-plan",
      img: "/images/project-detail/floor-plan/block-b-fifth-floor-plan.jpg",
    },
    {
      label: "block-b-typical-floor-plan",
      img: "/images/project-detail/floor-plan/block-b-typical-floor-plan.jpg",
    },
  ];

  // 👉 first li is active automatically
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="projectfloorflex">
      <div className="floorplanprojectdetail">
        <div className="fullwidthprojectdetail">
          <div className="floorplanleft">
            <h4>Floor Plan</h4>
            <p className="subHeadingText">
              Efficiently designed for space and comfort
            </p>
          </div>

          <ul className="floorplanleftlist">
            {floorItems.map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? "activefloorstate" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="floorplanimagewrap">
        <img
          src={floorItems[activeIndex].img}
          alt={floorItems[activeIndex].label}
          className="floorplanimage"
        />
      </div>
    </div>
  );
}
