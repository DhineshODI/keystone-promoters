import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ProjecSpecification() {
  // const projectSpecs = [
  //   {
  //     icon: "/images/project-detail/specifications/builind-icon-pink.svg",
  //     title: "Structure",
  //     list: ["RCC Framed", "Structure (Stit + 5 Floors)", "With brick work"],
  //   },
  //   {
  //     icon: "/images/project-detail/specifications/builind-icon-pink.svg",
  //     title: "Kitchen",
  //     list: [
  //       "Vitrified tile flooring 2' high-glazed",
  //       "Tile dado Granite countertop",
  //       "Stainless steel sink",
  //     ],
  //   },
  //   {
  //     icon: "/images/project-detail/specifications/builind-icon-pink.svg",
  //     title: "Painting",
  //     list: [
  //       "<span>Internal -</span> 2 coats of Putty, 1 coat primer and 2 coats emulsion",
  //       "<span>External -</span> 2 coats of Exterior emulsion over 1 coat primer",
  //     ],
  //   },
  // ];

  const projectSpecs = [
    {
      icon: "/images/project-detail/specifications/Structure.svg",
      title: "Structure",
      list: ["RCC framed structure (Stilt + 5 Floors)", "With brick work"],
    },
    {
      icon: "/images/project-detail/specifications/Wall finish.svg",
      title: "Wall Finish",
      list: [
        "<span class='projects-text-highlight'>Internal -</span> 2 coats of Putty, 1 coat of primer and 2 coats of interior emulsion",
        "<span class='projects-text-highlight'>External -</span> 2 coats of Exterior emulsion paint over 1 coat of primer",
      ],
    },
    {
      icon: "/images/project-detail/specifications/Joineries.svg",
      title: "Joineries",
      list: [
        "<span class='projects-text-highlight'>Main door -</span> Teak wood frame with door",
        "<span class='projects-text-highlight'>Other doors -</span> Country wood frames & flush doors with laminate",
      ],
    },
    {
      icon: "/images/project-detail/specifications/Windows.svg",
      title: "Windows",
      list: ["UPVC windows with grills"],
    },
    {
      icon: "/images/project-detail/specifications/Flooring.svg",
      title: "Flooring",
      list: ["Vitrified tiles for all rooms"],
    },
    {
      icon: "/images/project-detail/specifications/Kitchen.svg",
      title: "Kitchen",
      list: [
        "Vitrified tile flooring",
        "2’ high-glazed tile dado",
        "Granite countertop",
        "Stainless steel sink",
      ],
    },
    {
      icon: "/images/project-detail/specifications/Toilet.svg",
      title: "Toilet",
      list: [
        "Ceramic tile flooring",
        // "Glazed tile dado till roof height",
        "Sanitary wares - Parryware / Hindware or equivalent",
        "CP fittings - Jaquar or equivalent",
        // "Geyser points will be provided in all toilets",
      ],
    },
    {
      icon: "/images/project-detail/specifications/Electrical.svg",
      title: "Electrical",
      list: [
        "Wiring - Finolex / Polycab or equivalent",
        "Switches - Honeywell / Crabtree or equivalent",
        "MCB - Distribution board with 3-phase",
      ],
    },
    {
      icon: "/images/project-detail/specifications/ac.svg",
      title: "Air Conditioner",
      list: ["A/C provision will be provided in all bedrooms"],
    },
  ];

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div class="projectspecifiationclass">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div>
            <div>
              <h5 className="secondHeadingText  textTransform text-center">
                specifications
              </h5>
              <p className="subHeadingText text-center text-[#636465]">
                Every Element is carefully to meet industry standards and
                elevate your daily living experience
              </p>
            </div>
          </div>

          {/* <div className="lowconatinersection"> */}
          {/* <div className="projectsspccards">
            <Slider ref={sliderRef} className="" {...settings}>
              <div>
                <div className="projectspecificationcard">
                  <div>
                    <img
                      className="projectspecicon"
                      src="/images/project-detail/specifications/builind-icon-pink.svg"
                      alt=""
                    />
                  </div>
                  <p className="projectspecname">Structure</p>

                  <ul className="projectspeclist">
                    <li>RCC Framed</li>
                    <li>structure (Stit + 5 Floors)</li>
                    <li>with brick work</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="projectspecificationcard">
                  <div>
                    <img
                      className="projectspecicon"
                      src="/images/project-detail/specifications/builind-icon-pink.svg"
                      alt=""
                    />
                  </div>
                  <p className="projectspecname">Kitchen</p>

                  <ul className="projectspeclist">
                    <li>Virtified tile flooring 2' high-glazed</li>
                    <li>tile dado Granite countertop</li>
                    <li>Stainless steel sink</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="projectspecificationcard">
                  <div>
                    <img
                      className="projectspecicon"
                      src="/images/project-detail/specifications/builind-icon-pink.svg"
                      alt=""
                    />
                  </div>
                  <p className="projectspecname">Kitchen</p>

                  <ul className="projectspeclist">
                    <li>
                      <span>Internal -</span> 2 coats of Putty, I coat of
                    </li>
                    <li>primer and 2 coats of interior emulsion</li>
                    <li>
                      <span> Extermal -</span>2 coats of Exterior emulsion
                    </li>
                    <li>paint over I coat of pimer</li>
                  </ul>
                </div>
              </div>
            </Slider>
          </div> */}

          <div className="projectsspccards">
            <Slider ref={sliderRef} {...settings}>
              {projectSpecs.map((spec, index) => (
                <div key={index}>
                  <div className="projectspecificationcard">
                    <div>
                      <img className="projectspecicon" src={spec.icon} alt="" />
                    </div>

                    <p className="projectspecname">{spec.title}</p>

                    <ul className="projectspeclist">
                      {spec.list.map((item, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* </div> */}

          <div className="flex justify-center items-center gap-88 mt-6 curlatedLine">
            <div
              className="custom-prev cursor-pointer curlatedArrow"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img
                src="/images/icons/arrow-l.svg"
                alt="Previous"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </div>

            <div
              className="custom-next cursor-pointer curlatedArrow"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img
                src="/images/icons/arrow-r.svg"
                alt="Next"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
