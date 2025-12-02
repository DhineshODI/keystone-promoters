import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        // "Global Hospital - 3.2 km",
        // "Apollo Hospital - 5.1 km",
        // "Vijaya Hospital - 4.8 km",
        // "Fortis Malar Hospital - 6.0 km",
        "Kauvery Hospital - 1.1 km",
        "Dr. Kamakshi Memorial Hospital - 2.9 km",
        "Avinash Hospitals - 1.0 km",
        "PCMC Hospital - 4.0 km",
        "Srinivasan Rajalakshmi Memorial Hospital - 3.5 km",
      ],
    },
    {
      title: "Colleges",
      icon: "/images/project-detail/location-college.svg",
      items: [
        // "Madras Christian College - 2.5 km",
        // "SRM Institute of Science & Technology - 4.3 km",
        // "Sathyabama University - 5.0 km",
        // "Loyola College - 7.2 km",
        "Kapi College Of Education - 3.7 km",
        "Vels Institute Of Science and Technology - 3.0 km",
        "Tagore College Of Arts And Science - 6.0 km",
        "The Quaide Milleth College For Men - 4.0 km",
        "Sivet College - 6.0 km",
        "New Prince Shri Bhavani Arts And Science College - 4.5 km",
      ],
    },
    {
      title: "Academy",
      icon: "/images/project-detail/location-academy.svg",
      items: [
        "Aura Badminton Court - 1 km",
        "MCC Sports Academy - 1.5 km",
        "Waves Swim Academy - 1 km",
        "Zeal Wings Academy Institute For Air Hostess - 3.5 km",
      ],
    },
    {
      title: "Travel",
      icon: "/images/project-detail/location-transport.svg",
      items: [
        "Eachangadu Junction - 400 m",
        "Metro Corridor - 400 m",
        "Kilkattalai - 1.3 km",
        "Perumal Nagar - 850 m",
        "Chrompet Railway Station - 5.4 km",
        "Pallavaram Railway Station - 5.2 km",
        "Velachery Railway Station - 5.2 km",
        "Chennai Airport - 8.4 km",
      ],
    },
    {
      title: "Nearby Locations",
      icon: "/images/project-detail/location-location.svg",
      items: [
        "Chrompet - 4 km",
        "Pallavaram - 5 km",
        "Kovilambakkam - 1.2 km",
        "Velachery - 7 km",
        "Neelangarai Beach - 9.5 km",
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
                        className={`accordion-section ${
                          openIndex === index ? "open" : ""
                        }`}
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
