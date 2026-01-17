import { React, useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AboutusFounder() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const modalRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(1);

  // const handleToggle = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  const handleToggle = (index) => {
  // Only change if clicking different button
  if (activeIndex !== index) {
    setActiveIndex(index);
  }
};



  useEffect(() => {
    if (isOpen) {
      // 1️⃣ Disable body scroll
      document.body.style.overflow = "hidden";

      // 2️⃣ Prevent click outside the modal
      const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          // Do nothing (outside click disabled)
          e.stopPropagation();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup when modal closes
      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }

    if (isOpen1) {
      // 1️⃣ Disable body scroll
      document.body.style.overflow = "hidden";

      // 2️⃣ Prevent click outside the modal
      const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          // Do nothing (outside click disabled)
          e.stopPropagation();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup when modal closes
      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, isOpen1]);
  return (
    <>
      <div className={`foundersbanner ${activeIndex === 2 ? "active" : ""}`}>
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersection aboutusfounders">
            <div className="aboutusfoundermaincontent">
              <h5
                className="secondHeadingText"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Founders
              </h5>
              <p
                className="subHeadingText"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Empowering living through vision, purpose and action.
              </p>
            </div>

            <div className="founderflex">
              <div className="founderflex1">
                <div
                  onClick={() => handleToggle(1)}
                  className={`rectangleone ${
                    activeIndex === 1 ? "active" : "notactive"
                  }`}
                >
                  <div className="founderdetails">
                    <h4 className="secondHeadingText">Dinesh Sellappan</h4>
                    <h5 className="subHeadingText directorname">Director</h5>
                  </div>

                  <img
                    className="founderimagee"
                    src="/images/about-us/founder1.png"
                    alt="Dinesh sellappan"
                  />
                </div>
                <div
                  onClick={() => handleToggle(2)}
                  className={`rectangleone  ${
                    activeIndex === 2 ? "active" : "notactive"
                  }`}
                >
                  <div className="founderdetails">
                    <h4 className="secondHeadingText ">Vaishnava Priya</h4>
                    <h5 className="subHeadingText  directorname">Director</h5>
                  </div>

                  <img
                    className="founderimagee"
                    src="/images/about-us/founder2.png"
                    alt="vaishnava priya"
                  />
                </div>
              </div>

              {activeIndex === 1 && (
                <div className="founderflex2">
                  <div className="founderflexcontentpopup">
                    <h5 className="foundernamepopup">Dinesh Sellappan</h5>
                    <p className="subHeadingText ">Director</p>
                  </div>

                  <hr />

                  <p className="subHeadingText founderwho">
                    Leading with vision, integrity and commitment to excellence
                    in construction
                  </p>

                  <hr />

                  <div className="popupaboutusfounders">
                    <ul>
                      <li onClick={() => setIsOpen(true)}>
                        director's Profile
                      </li>
                      {/* <li>Design Vision & Individual Aesthetic</li>
                      <li>Professional Journey & Industry Standing</li>
                      <li>Landmark Projects & Curated Showcase</li> */}
                    </ul>
                  </div>
                </div>
              )}

              {activeIndex === 2 && (
                <div className="founderflex2">
                  <div className="founderflexcontentpopup">
                    <h5 className="foundernamepopup">Vaishnava Priya</h5>
                    <p className="subHeadingText ">Director</p>
                  </div>

                  <hr />

                  <p className="subHeadingText founderwho">
                    As an architect and designer known for creating thoughtful,
                    client-focused space
                  </p>

                  <hr />

                  <div className="popupaboutusfounders">
                    <ul>
                      <li onClick={() => setIsOpen1(true)}>
                        director's Profile
                      </li>
                      {/* <li>Design Vision & Individual Aesthetic</li>
                      <li>Professional Journey & Industry Standing</li>
                      <li>Landmark Projects & Curated Showcase</li> */}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center z-100000">
            {/* Modal Box */}

            <div className="insidepopupclass">
              <div
                ref={modalRef}
                className="bg-white  rounded-xl shadow-2xl p-6 relative animate-modalPopup insidepopupclasscontent "
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl transition popupclosebuttonabout"
                >
                  ✕
                </button>

                <div className="aboutuspopupstyles">
                  <div>
                    <h5 className="secondHeadingText ">Dinesh Sellappan</h5>
                    <h6 className="mainheadingText ">Director</h6>

                    <div className="insideppupsub">
                      <p className="subHeadingText ">
                        Founder & Managing Director of Keystone Promoters Pvt
                        Ltd holds a Bachelor’s degree in Civil engineering from
                        Government College of Technology, Coimbatore & Masters
                        degree in Construction Engineering and Management from
                        University of Southern California, Los Angeles.
                      </p>
                      <br />
                      <p className="subHeadingText ">
                        He also holds a Masters degree in Real Estate Valuation.
                        Started his professional career as a Project Engineer
                        for Condominiums at Los Angeles & West Hollywood, after
                        which he established Keystone in the year 2012. With
                        vast knowledge in the field of Civil Engineering and
                        with over a decade of experience in construction he is
                        an integral part of Keystone which is primarily in
                        development of Residential and Commercial Properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isOpen1 && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center z-100000">
            {/* Modal Box */}

            <div className="insidepopupclass ">
              <div
                ref={modalRef}
                className="bg-white  rounded-xl shadow-2xl p-6 relative animate-modalPopup insidepopupclasscontent secondpopupvaish"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen1(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl transition popupclosebuttonabout"
                >
                  ✕
                </button>

                <div className="aboutuspopupstyles">
                  <div>
                    <h5 className="secondHeadingText ">Vaishnava Priya</h5>
                    <h6 className="mainheadingText ">Director</h6>

                    <div className="insideppupsub">
                      <p className="subHeadingText ">
                        As an architect and designer known for creating
                        thoughtful, client-focused space, Vaishnava Priya’s work
                        spans residential architecture, interior design and
                        community-focused projects, with a strong emphasis on
                        proportion, detailing and functionality. She integrates
                        native materials with modern aesthetics to craft designs
                        that are both contemporary and timeless.
                      </p>
                      <br />
                      <p className="subHeadingText ">
                        She ensures that every project reflects the client’s
                        needs while carefully evaluating the site and its
                        surroundings. Her portfolio includes custom homes,
                        apartments, interior renovations and small-scale
                        community projects. Vaishnava’s design philosophy is
                        rooted in simplicity, spatial clarity and human comfort,
                        resulting in warm, lived-in spaces that remain timeless.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
