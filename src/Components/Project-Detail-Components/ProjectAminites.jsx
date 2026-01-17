// import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

export default function ProjectAminities() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const modalRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const resetFormState = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setIsLoading(false);
    setShowSnackbar(false);
  };

  // ----- Block numbers in name -----
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) return;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // ----- PDF Download -----
  const downloadEmptyPDF = () => {
    const blob = new Blob([" "], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = "/brochure.pdf";
    a.download = "brochure.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ----- SUBMIT -----
  const handleSubmit = async () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (form.phone.replace(/\D/g, "").length < 5)
      newErrors.phone = "Minimum 10 digits required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);

    try {
      const payload = isOpen1 ? { ...form, isBrochure: true } : form;
      const res = await axios.post(
        "https://keystonepromoters.com/keystone-api/keystone-api/apis/ContactUs.php",
        JSON.stringify(payload),
        { headers: { "Content-Type": "application/json" } },
      );

      if (res.data.status === true) {
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        if (isOpen1) downloadEmptyPDF();

        setIsOpen(false);
        setIsOpen1(false);

        window.location.href = "/thankyou";
      }
    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  // ----- Modal – Prevent outside click -----
  useEffect(() => {
    if (isOpen || isOpen1) {
      document.body.style.overflow = "hidden";

      const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          e.stopPropagation();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, isOpen1]);

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
      altText: "",
    },
    {
      img: "/images/project-detail/aminities/Children’s-Play-Area.jpg",
      title: "Children's Play Area",
      altText: "3 bhk flats in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/Entrance-lobby.jpg",
      title: "Entrance Lobby",
      altText: "flats in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/gym.jpg",
      title: "gym",
      altText: "2 bhk flat for sale in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/Landscape.jpg",
      title: "Landscape garden",
      altText: "new flats for sale in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/lift.jpg",
      title: "lift",
      altText: "apartments near keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/Multipurpose.jpg",
      title: "Multipurpose Hall",
      altText: "flats for sale in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/Power-backup.jpg",
      title: "Power Backup",
      altText: "apartment for sale in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/Rain-water-harvesting.jpg",
      title: "Rain water Harvesting",
      altText: "3 bhk flats in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/solar-panel.jpg",
      title: "Solar Panels",
      altText: "2 bhk flats in keelkattalai",
    },
    {
      img: "/images/project-detail/aminities/Spacious-Covered-car-parking.jpg",
      title: "Car Parking",
      altText: "2 bhk flat for sale in keelkattalai",
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
          slidesToScroll: 1,
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
                    living with relaxation, recreation, wellness and community
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
                          <img src={item.img} alt={item.altText} />
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
                  {/* <div className="formMainStyleContactPage">
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
                  </div> */}

                  <div className="formMainStyleContactPage">
                    {/* NAME */}

                    <h5
                      style={{ color: "#000" }}
                      className="visitOurOFficetext textTransform text-center"
                    >
                      Enquire Now
                    </h5>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? "inputError" : ""}
                      />
                      {errors.name && (
                        <p className="errorText">{errors.name}</p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Email *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? "inputError" : ""}
                      />
                      {errors.email && (
                        <p className="errorText">{errors.email}</p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Phone *</label>

                      <PhoneInput
                        country="in"
                        value={form.phone}
                        onChange={(v) => {
                          setForm({ ...form, phone: v });
                          setErrors({ ...errors, phone: "" });
                        }}
                        inputClass={errors.phone ? "inputError" : ""}
                      />
                      {errors.phone && (
                        <p className="errorText">{errors.phone}</p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Message</label>
                      <input
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="contactFormInputEach">
                      <button onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                      </button>
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
                  {/* <div className="formMainStyleContactPage">
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
                  </div> */}
                  <div className="formMainStyleContactPage">
                    {/* NAME */}

                    <h5
                      style={{ color: "#000" }}
                      className="visitOurOFficetext textTransform text-center"
                    >
                      Download Brochure
                    </h5>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? "inputError" : ""}
                      />
                      {errors.name && (
                        <p className="errorText">{errors.name}</p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Email *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? "inputError" : ""}
                      />
                      {errors.email && (
                        <p className="errorText">{errors.email}</p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Phone *</label>

                      <PhoneInput
                        country="in"
                        value={form.phone}
                        onChange={(v) => {
                          setForm({ ...form, phone: v });
                          setErrors({ ...errors, phone: "" });
                        }}
                        inputClass={errors.phone ? "inputError" : ""}
                      />
                      {errors.phone && (
                        <p className="errorText">{errors.phone}</p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">Message</label>
                      <input
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="contactFormInputEach">
                      <button onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* popups */}

      {showSnackbar && <div className="snackbar">Submitted Successfully!</div>}
    </>
  );
}
