import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ProjectConstructionUpdates() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
    { src: "/images/project-detail//aminites1.jpg" },
  ];
  return (
    <>
      <div className="projectconstructionupdates">
        <div className="container max-w-7xl mx-auto px-4">
          <div>
            <div className="conatinerprojectconstructionupdates">
              <h5 className="secondHeadingText textTransform text-center">
                Construction Updates
              </h5>
              <p className="subHeadingText text-center text-[#636465]">
                We keep you updated with consistent progress reports and key
                construction milestones every step of the way.
              </p>
            </div>
          </div>

          <div className="py-10 galleryconatiner">
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto">
              {slides.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden  cursor-pointer group"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Lightbox Viewer */}
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={slides}
              index={index}
              on={{
                view: ({ index }) => setIndex(index),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
