import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
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
          <div className="formContactUsSection" id="form_id"  onClick={(e) => e.stopPropagation()}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
