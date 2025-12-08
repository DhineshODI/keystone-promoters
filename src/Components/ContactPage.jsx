import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  const heroRef = useRef(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [hash]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation rules
    if (name === "name") {
      // Allow only letters & spaces
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }

    if (name === "phone") {
      // Allow only numbers
      if (!/^[6-9]*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });

    // Remove error while typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.replace(/\D/g, "").length < 5) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    setErrors(newErrors);

    // STOP if validation fails
    if (Object.keys(newErrors).length > 0) return;

    // Start loader
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://dev.opendesignsin.com/keystonepromotersdemo/keystone-api/keystone-api/apis/ContactUs.php",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.status === true) {
        // Show snackbar
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);

        // Clear form
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Request Error:", error);
    }

    // Stop loader
    setIsLoading(false);
        window.location.href = "/thankyou";
  };

  return (
    <>
      {/* Banner */}
      <div ref={heroRef}>
        <div className="detailPageBanners">
          <h5
            className="secondHeadingText"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Connect &
          </h5>
          <h5
            className="secondHeadingText"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            Collaborate
          </h5>

          <div
            className="BreadCrumSection"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <a href="/" className="subHeadingText  text-hover-underline">
              Home
            </a>
            <span className="subHeadingText">-</span>
            <span className="subHeadingText text-hover-underline">
              Contact US
            </span>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* After-Banner-Section */}

      <div className="afterMainBG">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersectionafterbanner">
            <div className="bannerafterSectionMAIN">
              <div
                className="firstbannerafterSectionMAIN"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div>
                  <h4 className="gettknowHeading">Get to know us</h4>
                  <h3 className="visitOurOFficetext">
                    Visit us at our office location
                  </h3>
                </div>

                <div style={{ marginTop: "15px" }}>
                  <h4 className="gettknowHeading">Address</h4>
                  <p className="contactPageAddress">
                    Door No.1, GF-A, Amace Ganga Sarojini Street,
                    Mahalingapuram, Nungambakkam, Chennai 600 034
                  </p>
                </div>
              </div>
              <div className="seondbannerafterSectionMAIN">
                {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                <img src="/images/contactus-banner-icon.png" alt="" />
              </div>
              <div
                className="thirdbannerafterSectionMAIN"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div
                  className="contactustextcontent"
                  style={{ marginTop: "15px" }}
                >
                  <h4 className="gettknowHeading">Phone</h4>
                  {/* <p className="contactPageAddress">+91 44 2817 2255</p> */}
                  <a
                    href="tel:+914428172255"
                    className="contactPageAddress text-hover-underline"
                  >
                    +91 44 2817 2255
                  </a>
                </div>
                <div
                  className="contactustextcontent"
                  style={{ marginTop: "15px" }}
                >
                  <h4 className="gettknowHeading">MOBILE</h4>
                  {/* <p className="contactPageAddress">+91 99400 08855</p> */}
                  <a
                    href="tel:+919940008855"
                    className="contactPageAddress text-hover-underline"
                  >
                    +91 99400 08855
                  </a>
                </div>
                <div
                  className="contactustextcontent"
                  style={{ marginTop: "15px" }}
                >
                  <h4 className="gettknowHeading">Email</h4>
                  <a
                    href="mailto:info@keystonepromoters.com"
                    className="contactPageAddress text-hover-underline"
                  >
                    info@keystonepromoters.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After-Banner-Section */}

      <div className="contactPageBgPadding">
        <div
          className="contactUsBannerPageBg cursor-pointer"
          onClick={() =>
            window.open("https://maps.app.goo.gl/3B7V1YFCsvFGBWN26", "_blank")
          }
        >
          <div
            className="formContactUsSection"
            id="form_id"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div
              className="formContactUsSectionFlex"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <h5 className="secondHeadingText ">Begin Your Journey</h5>
              <p className="subHeadingText">
                Contact us with your question we'll make sure your concerns are
                addressed quickly and efficiently
              </p>

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
                  <input type="text" name="message" onChange={handleChange} />
                </div>

                <div className="contactFormInputEach">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div> */}

            <div
              className="formContactUsSectionFlex"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <h5 className="secondHeadingText ">Begin Your Journey</h5>
              <p className="subHeadingText">
                Contact us with your question we'll make sure your concerns are
                addressed quickly and efficiently
              </p>

              <div className="formMainStyleContactPage">
                <div className="contactFormInputEach">
                  <label className="subHeadingText">
                    Name <sup>*</sup>
                  </label>
                  <input
                    className={errors.name ? "inputError" : ""}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="errorText">{errors.name}</p>}
                </div>

                <div className="contactFormInputEach">
                  <label className="subHeadingText">
                    Email <sup>*</sup>
                  </label>
                  <input
                    className={errors.email ? "inputError" : ""}
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="errorText">{errors.email}</p>}
                </div>

                <div className="contactFormInputEach">
                  <label className="subHeadingText">
                    Phone Number <sup>*</sup>
                  </label>

                  <PhoneInput
                    country={"in"}
                    value={form.phone}
                    onChange={(value) => {
                      setForm({ ...form, phone: value });
                      setErrors({ ...errors, phone: "" });
                    }}
                    inputClass={errors.phone ? "inputError" : ""}
                    containerClass="phoneContainer"
                    buttonClass="phoneDropdown"
                  />

                  {errors.phone && <p className="errorText">{errors.phone}</p>}
                </div>

                <div className="contactFormInputEach">
                  <label className="subHeadingText">Message</label>
                  <input
                    //className={form.message ? "inputSuccess" : ""}
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

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

      {showSnackbar && (
        <div className="snackbar">Message sent successfully!</div>
      )}
    </>
  );
}
