import { useState } from "react";

export default function ProjectLocationHighlights() {
  const locationData = [
    {
      title: "Nearby Locations",
      icon: "/images/project-detail/location-school.svg",
      items: [
        "Arul Jothy Public School - 1.8 km",
        "Dhaya Jothy Matriculation School - 2.8 km",
        "Velachery Main Road - 1.2 km",
        "Tambaram Railway Station - 3.6 km",
        "Arul Jothy Public School - 1.8 km",
        "Dhaya Jothy Matriculation School - 2.8 km",
        "Velachery Main Road - 1.2 km",
        "Tambaram Railway Station - 3.6 km",
      ],
    },
    {
      title: "Hospitals",
      icon: "/images/project-detail/location-hospitals.svg",
      items: [
        "Global Hospital - 3.2 km",
        "Apollo Hospital - 5.1 km",
        "Vijaya Hospital - 4.8 km",
        "Fortis Malar Hospital - 6.0 km",
      ],
    },
    {
      title: "Colleges",
      icon: "/images/project-detail/location-college.svg",
      items: [
        "Madras Christian College - 2.5 km",
        "SRM Institute of Science & Technology - 4.3 km",
        "Sathyabama University - 5.0 km",
        "Loyola College - 7.2 km",
      ],
    },
    {
      title: "Academy",
      icon: "/images/project-detail/location-academy.svg",
      items: [
        "Aakash Coaching Centre - 2.0 km",
        "TIME Institute - 2.7 km",
        "FIITJEE Academy - 3.4 km",
        "Veta English Academy - 1.9 km",
      ],
    },
    {
      title: "Travel",
      icon: "/images/project-detail/location-transport.svg",
      items: [
        "Airport Metro Station - 5.5 km",
        "Chennai International Airport - 6.2 km",
        "Guindy Bus Depot - 4.8 km",
        "Central Railway Station - 10.5 km",
      ],
    },
    {
      title: "Nearby Locations",
      icon: "/images/project-detail/location-location.svg",
      items: [
        "Arul Jothy Public School - 1.8 km",
        "Dhaya Jothy Matriculation School - 2.8 km",
        "Velachery Main Road - 1.2 km",
        "Tambaram Railway Station - 3.6 km",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="projectlocationshighlights">
        <div className="widthprojectlocationshighlights">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div>
              <div>
                <h5 class="secondHeadingText textTransform text-center">
                  Location Highlights
                </h5>
                <p class="subHeadingText text-center text-[#636465]">
                  Every Element is carefully selected to meet industry standards
                  and elevate your daily living experience
                </p>
              </div>

              <div className="locationadvantageflex">
                <div className="locationimageside">
                  <img
                    src="/images/project-detail/project-location-image.png"
                    alt=""
                  />

                  <div className="overlayimageprojectdetail">
                    <div className="seocndoverlayimageprojectdetail">
                      <button className="subHeadingText text-hover-underline">
                        Location Map View
                      </button>
                      <div className="subHeadingText"> | </div>
                      <button className="subHeadingText text-hover-underline">
                        Google Map View
                      </button>
                    </div>
                  </div>
                </div>

                <div className="locationcontentside">
                  <div>
                    {locationData.map((section, index) => (
                      <div
                        key={index}
                        className={`accordion-section ${openIndex === index ? "open" : ""}`}
                      >
                        <div
                          className="locationadvantagesicon"
                          onClick={() => toggleAccordion(index)}
                        >
                          <img src={section.icon} alt={section.title} />
                          <p className="nearbyloactions">{section.title}</p>
                        </div>

                        <ul>
                          {section.items.map((item, i) => {
                            const [place, distance] = item.split(" - ");
                            return (
                              <li key={i}>
                                {place}{" "}
                                <span className="distance"> - {distance}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
