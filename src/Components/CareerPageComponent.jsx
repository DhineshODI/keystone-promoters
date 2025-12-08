import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");

  const [fileName, setFileName] = useState("No file chosen");
  const [fileName1, setFileName1] = useState("Choose File");

  // ----------- INPUT VALIDATIONS WHILE TYPING ----------
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) return; // letters only

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // ----------- RESUME UPLOAD VALIDATION -----------
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setSnackMsg("Only PDF, DOC, DOCX formats are allowed");
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setSnackMsg("File size must be less than 2 MB");
      setShowSnackbar(true);

      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }

    setResume(file);
    setFileName(file.name); // ✅ Update filename here

    setFileName1("Uploaded file");
    setErrors({ ...errors, resume: "" });
  };

  // ----------- SUBMIT -----------
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

    if (!form.qualification.trim())
      newErrors.qualification = "Qualification is required";

    if (!form.applyFor.trim()) newErrors.applyFor = "Apply For is required";

    if (!resume) newErrors.resume = "Resume upload is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSnackMsg("Please fix the highlighted errors");
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    formData.append("resume", resume);

    // https://dev.opendesignsin.com/keystonepromotersdemo/keystone-api/keystone-api

    try {
      const res = await axios.post(
        "https://dev.opendesignsin.com/keystonepromotersdemo/keystone-api/keystone-api/apis/CareerForm.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status === true) {
        setSnackMsg("Form Submitted Successfully!");
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);

        setForm({
          name: "",
          email: "",
          phone: "",
          qualification: "",
          applyFor: "",
          message: "",
        });
        setResume(null);
        setErrors({});
      }
    } catch (err) {
      setSnackMsg("Something went wrong. Try again.");
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
    }

    setIsLoading(false);
    window.location.href = "/thankyou";
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

        {/* <div className="worthwithUsSection">
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
        </div> */}

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
                    <label className="subHeadingText">
                      Name <sup>*</sup>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? "inputError" : ""}
                    />
                    {errors.name && <p className="errorText">{errors.name}</p>}
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText">
                      Email <sup>*</sup>
                    </label>
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

                  <div className="contactFormInputEach">
                    <label className="subHeadingText">
                      Phone Number <sup>*</sup>
                    </label>
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
                  <div className="contactFormInputEach">
                    <label className="subHeadingText">
                      Qualification <sup>*</sup>
                    </label>
                    <input
                      name="qualification"
                      value={form.qualification}
                      onChange={handleChange}
                      type="text"
                      className={errors.qualification ? "inputError" : ""}
                    />
                    {errors.qualification && (
                      <p className="errorText">{errors.qualification}</p>
                    )}
                  </div>

                  <div className="contactFormInputEach">
                    <label className="subHeadingText">
                      Apply For <sup>*</sup>
                    </label>
                    <input
                      name="applyFor"
                      value={form.applyFor}
                      onChange={handleChange}
                      type="text"
                      className={errors.applyFor ? "inputError" : ""}
                    />
                    {errors.applyFor && (
                      <p className="errorText">{errors.applyFor}</p>
                    )}
                  </div>

                  <div className="contactFormInputEach">
                    <label className="subHeadingText">
                      Upload Resume <sup>*</sup>
                    </label>

                    {/* <div className="uploadIconWrapper">
                      <input
                        type="file"
                        onChange={handleResumeUpload}
                        accept=".pdf,.doc,.docx"
                      />
                      <img
                        src="/images/icons/file-upload-svgrepo-com-new.svg"
                        className="uploadIcon"
                        alt="upload"
                      />
                    </div> */}

                    {/* <input
                        type="file"
                        onChange={handleResumeUpload}
                        accept=".pdf,.doc,.docx"
                      /> */}
                    {/* <img
                        src="/images/icons/file-upload-svgrepo-com-new.svg"
                        className="uploadIcon"
                        alt="upload"
                      /> */}

                    <div className="customFileWrapper">
                      <label htmlFor="fileInput" className="customFileButton">
                        {/* Choose File */}

                        {fileName1}
                      </label>

                      <span className="customFileName">{fileName}</span>

                      <input
                        type="file"
                        id="fileInput"
                        className="hiddenFileInput"
                        onChange={handleResumeUpload}
                        accept=".pdf,.doc,.docx"
                      />
                    </div>

                    {errors.resume && (
                      <p className="errorText">{errors.resume}</p>
                    )}
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Message
                    </label>
                    <br />
                    <input name="message" onChange={handleChange} type="text" />
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

        {/* Work With Us Section*/}
      </div>

      {showSnackbar && <div className="snackbar">{snackMsg}</div>}
    </>
  );
}
