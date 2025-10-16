import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextFillAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".letter");

    gsap.to(letters, {
      color: "#995098", // final fill color
      stagger: 0.1, // letter by letter
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  // Split text into spans for each letter
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="letter"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #995098", // initial outline
          display: "inline-block",
        }}
      >
        {char}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      style={{
        fontSize: "80px",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        lineHeight: 1.2,
      }}
    >
      <div>{splitText("KEYSTONE")}</div>
      <div style={{ fontSize: "50px" }}>{splitText("PROMOTORS")}</div>
    </div>
  );
}
