import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectAminities() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [isOpen1, setIsOpen1] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!form.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    // Phone validation (only numbers & at least 10 digits)
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid phone number (minimum 10 digits).");
      return;
    }

    // If validation passes → submit
    try {
      const res = await axios.post(
        "http://localhost/keystone-api/apis/ContactUs.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", res.data);

      if (res.data.status === true) {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        // alert(Error: ${res.data.message});
        console.error("PHP Error:", res.data.error);
      }
    } catch (error) {
      console.error("Request Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

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

  const amenities = [
    {
      img: "/images/project-detail/aminities/CCTV-survalance.jpg",
      title: "CCTV Surveillance",
    },
    {
      img: "/images/project-detail/aminities/Children’s-Play-Area.jpg",
      title: "Children's Play Area",
    },
    {
      img: "/images/project-detail/aminities/Entrance-lobby.jpg",
      title: "Entrance Lobby",
    },
    { img: "/images/project-detail/aminities/gym.jpg", title: "gym" },
    {
      img: "/images/project-detail/aminities/Landscape.jpg",
      title: "Landscape garden",
    },
    { img: "/images/project-detail/aminities/lift.jpg", title: "lift" },
    {
      img: "/images/project-detail/aminities/Multipurpose.jpg",
      title: "Multipurpose Hall",
    },
    {
      img: "/images/project-detail/aminities/Power-backup.jpg",
      title: "Power Backup",
    },
    {
      img: "/images/project-detail/aminities/Rain-water-harvesting.jpg",
      title: "Rain water Harvesting",
    },
    {
      img: "/images/project-detail/aminities/solar-panel.jpg",
      title: "Solar Panels",
    },
    {
      img: "/images/project-detail/aminities/Spacious-Covered-car-parking.jpg",
      title: "Car Parking",
    },
  ];
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
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
      <div className="popupdownload">
        <div className="fordownloadbrocedh">
          <div className="projectaminitessection">
            <div className="container max-w-7xl mx-auto px-4 ">
              <div>
                <div>
                  <p
                    className="subHeadingText"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    AMENITIES
                  </p>
                  <h5
                    className="secondHeadingText  textTransform text-center"
                    data-aos="fade-left"
                    data-aos-duration="1600"
                  >
                    Designed for Comfort and Convenience
                  </h5>
                  <p
                    className="subHeadingText"
                    data-aos="fade-left"
                    data-aos-duration="1900"
                  >
                    Enjoy thoughtfully curated amenities that enhance everyday
                    living with relaxation, recreation, wellness, and community
                    connection.
                  </p>
                </div>
              </div>

              <div className="mainprojectaminitesslider">
                {/* <div className="projectaminitesslider">
                <Slider ref={sliderRef} className="" {...settings}>
                  <div>
                    <div className="aminitessectionproject">
                      <img src="/images/project-detail/aminites1.jpg" alt="" />
                      <h3 className="contentaminities">Gymnasium</h3>
                    </div>
                  </div>
                  <div>
                    <div className="aminitessectionproject">
                      <img src="/images/project-detail/aminites2.jpg" alt="" />
                      <h3 className="contentaminities">Children's Play Area</h3>
                    </div>
                  </div>
                </Slider>
              </div> */}

                <div className="projectaminitesslider">
                  <Slider ref={sliderRef} {...settings}>
                    {amenities.map((item, index) => (
                      <div key={index}>
                        <div className="aminitessectionproject">
                          <img src={item.img} alt={item.title} />
                          <h3 className="contentaminities">{item.title}</h3>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className="arrowwidthsection">
                <div className="onearrowwidthsection">
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
            </div>
          </div>

          <div className="downloadbrocedhurebuttonflex">
            <div className="downloadbrocedhurebutton">
              <div
                onClick={() => setIsOpen1(true)}
                className="subHeadingText text-hover-underline "
              >
                Download Brochure{" "}
              </div>{" "}
              <div className="subHeadingText "> | </div>{" "}
              <div
                onClick={() => setIsOpen(true)}
                className="subHeadingText text-hover-underline "
              >
                {" "}
                enquire now
              </div>
            </div>
          </div>
        </div>

        {/* popups */}

        {isOpen && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center z-100000">
            {/* Modal Box */}

            <div className="insidepopupclass ">
              <div
                ref={modalRef}
                className="bg-white  rounded-xl shadow-2xl p-6 relative animate-modalPopup"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl transition popupclosebuttonabout"
                >
                  ✕
                </button>

                <div className="aboutuspopupstyles">
                  <div className="formMainStyleContactPage">
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Name <sup>*</sup>
                      </label>
                      <br />
                      <input type="text" name="name" onChange={handleChange} />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Email <sup>*</sup>
                      </label>
                      <br />
                      <input type="text" name="email" onChange={handleChange} />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Phone Number <sup>*</sup>
                      </label>
                      <br />
                      <input name="phone" onChange={handleChange} type="text" />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Message
                      </label>
                      <br />
                      <input
                        type="text"
                        name="message"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contactFormInputEach">
                      <button onClick={handleSubmit}>Submit</button>
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
                className="bg-white  rounded-xl shadow-2xl p-6 relative animate-modalPopup"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen1(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl transition popupclosebuttonabout"
                >
                  ✕
                </button>

                <div className="aboutuspopupstyles">
                  <div className="formMainStyleContactPage">
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Name <sup>*</sup>
                      </label>
                      <br />
                      <input type="text" name="name" onChange={handleChange} />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Email <sup>*</sup>
                      </label>
                      <br />
                      <input type="text" name="email" onChange={handleChange} />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Phone Number <sup>*</sup>
                      </label>
                      <br />
                      <input name="phone" onChange={handleChange} type="text" />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Message
                      </label>
                      <br />
                      <input
                        type="text"
                        name="message"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contactFormInputEach">
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* popups */}
    </>
  );
}
