import React, { useState } from "react";
// import "../assets/costum.css"

const defaultData = [
  {
    text: "LISTEN",
    caption: "WE PLAN WITH FUNCTION AND ELEGANCE one",
    img: "/images/homepage/hoverimageone.jpg",
  },
  {
    text: "DESIGN",
    caption: "WE PLAN WITH FUNCTION AND ELEGANCE two",
    img: "/images/homepage/hoverimagetwo.jpg",
  },
  {
    text: "BUILD",
    caption: "WE PLAN WITH FUNCTION AND ELEGANCE three",
    img: "/images/homepage/hoverimageone.jpg",
  },
  {
    text: "DELIVER",
    caption: "WE PLAN WITH FUNCTION AND ELEGANCE four",
    img: "/images/homepage/hoverimageone.jpg",
  },
  {
    text: "SUPPORT",
    caption: "WE PLAN WITH FUNCTION AND ELEGANCE five",
    img: "/images/homepage/hoverimagetwo.jpg",
  },
];

export default function TextImageSection({ items = defaultData }) {
  const [active, setActive] = useState(1); // default highlight (index)

  return (
    <section className="tis-section">
      <div className="container max-w-7xl mx-auto px-4  ">
        <div className="lowconatinersection">
          <div className="texthoverimagetitle">
            <p>
              Our approach transforms every project into a purney ot
              collaboration, creativity, and <br></br>precision-deitverng
              purposeful, lasting spaces.
            </p>
          </div>
          <div className="tis-inner">
            <div className="tis-left">
              <ul className="tis-list" role="list">
                {items.map((it, idx) => {
                  const isActive = idx === active;
                  return (
                    <li
                      key={idx}
                      tabIndex={0}
                      className={`tis-item ${isActive ? "active" : ""}`}
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => setActive(idx)}
                      onMouseLeave={() => setActive(active)}
                      aria-current={isActive ? "true" : "false"}
                    >
                      <span className="big-outline">{it.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="tis-caption">
              <p className="caption-text">{items[active].caption}</p>
            </div>
            <div className="tis-right">
              <div className="tis-images">
                {items.map((it, idx) => (
                  <div
                    key={idx}
                    className={`tis-image-wrap ${
                      idx === active ? "visible" : "hidden"
                    }`}
                    aria-hidden={idx === active ? "false" : "true"}
                  >
                    <img src={it.img} alt={it.text} className="tis-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
