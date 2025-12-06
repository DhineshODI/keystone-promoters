import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectFloorPan() {
  const floorItems = [
    {
      blockLabel: "Car Parking",
      smallname: "",
      images: [
        {
          label: "Ground Floor",
          img: "/images/project-detail/floor-plan/block-a&b.jpg",
        },
      ],
    },
    {
      blockLabel: "Block Plan",
      smallname: "",
      images: [
        {
          label: "Ground Floor",
          img: "/images/project-detail/floor-plan/block-a&b1.jpg",
        },
      ],
    },
    {
      blockLabel: "Typical Plan",
      smallname: "( Block A - 1st to 5th )",
      images: [
        {
          label: "Typical Floor Plan",
          img: "/images/project-detail/floor-plan/block-a-typical-floor-plan.jpg",
        },
      ],
    },

    {
      blockLabel: "Unit Plan",
      smallname: "( Block A )",
      images: [
        {
          label: "A101-A501",
          img: "/images/project-detail/floor-plan/block-a-a101-a501.jpg",
        },
        {
          label: "A102-A502",
          img: "/images/project-detail/floor-plan/block-a-a102-a502.jpg",
        },
        {
          label: "A103-A503",
          img: "/images/project-detail/floor-plan/block-a-a103-a503.jpg",
        },
        {
          label: "A104-A504",
          img: "/images/project-detail/floor-plan/block-a-a104-a504.jpg",
        },
        {
          label: "A105-A505",
          img: "/images/project-detail/floor-plan/block-a-a105-a505.jpg",
        },
      ],
    },
    {
      blockLabel: "Unit Plan",
      smallname: "( Block - B )",
      images: [
        {
          label: "B101-B401",
          img: "/images/project-detail/floor-plan/block-b-b101-b401.jpg",
        },
        {
          label: "B102-B402",
          img: "/images/project-detail/floor-plan/block-b-b102-b402.jpg",
        },
        {
          label: "B103-B403",
          img: "/images/project-detail/floor-plan/block-b-b103-b403.jpg",
        },
        {
          label: "B104-B404",
          img: "/images/project-detail/floor-plan/block-b-b104-b404.jpg",
        },
      ],
    },
    {
      blockLabel: "Typical Plan",
      smallname: "( Block B - 1st to 4th )",
      images: [
        {
          label: "Typical Floor Plan",
          img: "/images/project-detail/floor-plan/block-b-typical-floor-plan.jpg",
        },
      ],
    },
    {
      blockLabel: "Gym & Multipurpose Hall Plan",
      smallname: "( Block B - 5th Floor )",
      images: [
        {
          label: "Floor Plan",
          img: "/images/project-detail/floor-plan/block-b-fifth-floor-plan.jpg",
        },
      ],
    },
  ];
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);

  const activeBlock = floorItems[activeBlockIndex];

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
            {floorItems.map((block, index) => (
              <li
                key={index}
                className={activeBlockIndex === index ? "activefloorstate" : ""}
                onClick={() => setActiveBlockIndex(index)}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              >
                {block.blockLabel} <br />
                <span className="smallname">{block.smallname}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="floorplanimagewrap">
        <div className="floorplansrightsectionflex">
          {activeBlock.images.map((image, index) => (
            <div
              key={index}
              // className="indiviualcardfloorplan"
              className={`indiviualcardfloorplan  ${
                activeBlock.images.length < 2 ? "newcardwidth" : ""
              }`}
            >
              <span
                className="subHeadingText textoftehfloor"
                style={{
                  marginTop: "8px",
                  marginBottom: "12px",
                  fontWeight: "500",
                }}
              >
                {image.label}
              </span>

              {/* Wrap image in anchor pointing to lightbox */}
              <a href={`#lightbox-${activeBlockIndex}-${index}`}>
                <img
                  className="imagefloorplabimage"
                  src={image.img}
                  alt={image.label}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </a>

              {/* Lightbox overlay */}
              <div
                id={`lightbox-${activeBlockIndex}-${index}`}
                className="lightbox-overlay"
              >
                <a href="#_" className="close-btn">
                  &times;
                </a>
                <img src={image.img} alt={image.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
