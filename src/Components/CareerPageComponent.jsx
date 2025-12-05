import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import axios from "axios";
export default function CareerPageFunction() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    applyFor: "",
    message: "",
  });

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async () => {
    // ------- VALIDATION -------

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

    // Phone validation: only numbers, minimum 10 digits
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid phone number (minimum 10 digits).");
      return;
    }

    if (!form.qualification.trim()) {
      alert("Please enter your qualification.");
      return;
    }

    if (!form.applyFor.trim()) {
      alert("Please specify the position you are applying for.");
      return;
    }

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    // message is optional → no validation

    // ------- SUBMISSION -------

    const formData = new FormData();

    // append form values
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    // append resume
    formData.append("resume", resume);

    try {
      const res = await axios.post(
        "http://localhost/keystone-api/apis/CareerForm.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Response:", res.data);

      if (res.data.status === true) {
        alert("Career form submitted successfully!");

        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          qualification: "",
          applyFor: "",
          message: "",
        });
        setResume(null);
      } else {
        alert("Error: " + res.data.message);
        console.error("PHP Error:", res.data.error);
      }
    } catch (error) {
      console.error("Request Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="CarrePageMainSection">
        {/* Banner */}
        <div>
          <div className="detailPageBanners">
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Shape Us
            </h5>
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Future with us
            </h5>

            <div
              className="BreadCrumSection"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <a href="/" className="subHeadingText  text-hover-underline">
                Home
              </a>
              <span className="subHeadingText">-</span>
              <span className="subHeadingText text-hover-underline">
                Careers
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
                    <h4 className="gettknowHeading">
                      Join a Legacy of exellence
                    </h4>
                    <h3 className="visitOurOFficetext">
                      Driven People. <br /> Real Opportunities. <br /> Here.
                    </h3>
                  </div>
                </div>
                <div className="seondbannerafterSectionMAIN">
                  {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                  <img src="/images/careers-banner-icon.png" alt="" />
                </div>
                <div
                  className="thirdbannerafterSectionMAIN"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div style={{ marginTop: "15px" }}>
                    <p className="contactPageAddress">
                      Explore exciting roles, innovative thinking, and dynamic
                      opportunities In a company that values your passion and
                      fresh perspective
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Banner-Section */}

        {/* Current-Openings-Section */}

        {/* <div className="careersCurrentOpenings">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="careersCurrentOpeningSection">
              <div>
                <h6 className="secondHeadingText "> Current Openings</h6>
                <p className="subHeadingText  text-center text-[#636465] ">
                  Discover exciting roles that match your skills, passion, and
                  vision for a meaningful career journey
                </p>
              </div>

              <div className="careersMainContainer">
                <div className="careerCardsFLex">
                  <div className="careersCards">
                    <img src="/images/careers/career-icon.svg" alt="" />
                    <div className="careersCardsMaxwidth">
                      <h4>Sr Executive Engagement</h4>
                      <p className="subHeadingText  ">5 Years Experience</p>
                    </div>
                    <button>Apply Now</button>
                  </div>
                  <div className="careersCards">
                    <img src="/images/careers/career-icon.svg" alt="" />
                    <div className="careersCardsMaxwidth">
                      <h4>Sr Executive Engagement</h4>
                      <p className="subHeadingText  ">5 Years Experience</p>
                    </div>
                    <button>Apply Now</button>
                  </div>
                  <div className="careersCards">
                    <img src="/images/careers/career-icon.svg" alt="" />
                    <div className="careersCardsMaxwidth">
                      <h4>Sr Executive Engagement</h4>
                      <p className="subHeadingText  ">5 Years Experience</p>
                    </div>
                    <button>Apply Now</button>
                  </div>
                  <div className="careersCards">
                    <img src="/images/careers/career-icon.svg" alt="" />
                    <div className="careersCardsMaxwidth">
                      <h4>Sr Executive Engagement</h4>
                      <p className="subHeadingText  ">5 Years Experience</p>
                    </div>
                    <button>Apply Now</button>
                  </div>
                  <div className="careersCards">
                    <img src="/images/careers/career-icon.svg" alt="" />
                    <div className="careersCardsMaxwidth">
                      <h4>Sr Executive Engagement</h4>
                      <p className="subHeadingText  ">5 Years Experience</p>
                    </div>
                    <button>Apply Now</button>
                  </div>
                  <div className="careersCards">
                    <img src="/images/careers/career-icon.svg" alt="" />
                    <div className="careersCardsMaxwidth">
                      <h4>Sr Executive Engagement</h4>
                      <p className="subHeadingText  ">5 Years Experience</p>
                    </div>
                    <button>Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Current-Openings-Section */}

        {/* Work With Us Section*/}

        <div className="worthwithUsSection">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="mainSectionFormWithUs">
              <div className="formContactUsSectionFlex">
                <h5
                  className="secondHeadingText "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Work with Us
                </h5>
                <p
                  className="subHeadingText"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  We Value your skills and passion. Share your profile to
                  explore exciting roles at Key Stone Promoters
                </p>

                <div className="formMainStyleContactPage">
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name <sup>*</sup>
                    </label>
                    <br />
                    <input name="name" onChange={handleChange} type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Email <sup>*</sup>
                    </label>
                    <br />
                    <input name="email" onChange={handleChange} type="text" />
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
                      Qualification <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="qualification"
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Apply For <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="applyFor"
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Upload Resume <sup>*</sup>
                    </label>
                    <br />
                    <input type="file" onChange={handleResumeUpload} />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Message
                    </label>
                    <br />
                    <input name="message" onChange={handleChange} type="text" />
                  </div>

                  <div className="contactFormInputEach">
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work With Us Section*/}
      </div>
    </>
  );
}
