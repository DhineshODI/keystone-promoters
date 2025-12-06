import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function JointVentureComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  const [form, setForm] = useState({
    companyName: "",
    email: "",
    phone: "",
    location: "",
    extent: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    email: "",
    phone: "",
    location: "",
    extent: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async () => {
    let newErrors = {};

    if (!form.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } 
    else if (form.phone.replace(/\D/g, "").length < 5) {
      newErrors.phone = "Phone must be at least 5 digits";
    }

    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.extent.trim()) newErrors.extent = "Extent is required";

    setErrors(newErrors);

    // Stop if errors found
    if (Object.keys(newErrors).length > 0) return;

    // Start loader
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://dev.opendesignsin.com/keystonepromotersdemo/keystone-api/keystone-api/apis/JointVenture.php",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.status === true) {
        // Show success snackbar
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);

        // Clear form
        setForm({
          companyName: "",
          email: "",
          phone: "",
          location: "",
          extent: "",
          remarks: "",
        });

        setErrors({});
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Stop loader
    setIsLoading(false);
  };

  return (
    <>
      <div className="JointVenturePage">
        {/* Banner */}
        <div>
          <div className="detailPageBanners">
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Build On
            </h5>
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Commitment
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
                Joint Venture
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
                    <h4 className="gettknowHeading">Grow with Us</h4>
                    <h3 className="visitOurOFficetext">
                      Let's Build <br /> Sucess Through <br /> Joint Ventures.
                    </h3>
                  </div>
                </div>
                <div className="seondbannerafterSectionMAIN">
                  {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                  <img src="/images/joint-venture-banner-icon.png" alt="" />
                </div>
                <div
                  className="thirdbannerafterSectionMAIN"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div style={{ marginTop: "15px" }}>
                    <p className="contactPageAddress">
                      Partner with Keystone Spaces to unlock profitable
                      development opportunities, shared growth, and long-term
                      value through trusted, transparent collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Banner-Section */}

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
                  Joint Venture
                </h5>
                <p
                  className="subHeadingText"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Partner with Keystone Promoters to create valuable,
                  high-quality developments that redefine urban living and
                  inspire mutual growth.
                </p>

                <div className="formMainStyleContactPage">
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name of the Company <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="companyName"
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Email <sup>*</sup>
                    </label>
                    <br />
                    <input name="email" onChange={handleChange} type="email" />
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
                      Location of the Property <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="location"
                      onChange={handleChange}
                      type="text"
                    />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Land Extent <sup>*</sup>
                    </label>
                    <br />
                    <input name="extent" onChange={handleChange} type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Remarks
                    </label>
                    <br />
                    <input name="remarks" onChange={handleChange} type="text" />
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
                  Joint Venture
                </h5>
                <p
                  className="subHeadingText"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Partner with Keystone Promoters to create valuable,
                  high-quality developments that redefine urban living and
                  inspire mutual growth.
                </p>

                <div className="formMainStyleContactPage">
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name of the Company <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      type="text"
                      className={errors.companyName ? "inputError" : ""}
                    />
                    {errors.companyName && (
                      <p className="errorText">{errors.companyName}</p>
                    )}
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Email <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
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
                      country={"in"}
                      value={form.phone}
                      onChange={(value) => {
                        setForm({ ...form, phone: value });
                        setErrors({ ...errors, phone: "" });
                      }}
                      inputClass={errors.phone ? "inputError" : ""}
                      containerClass="phoneContainer"
                    />

                    {errors.phone && (
                      <p className="errorText">{errors.phone}</p>
                    )}
                  </div>

                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Location of the Property <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      type="text"
                      className={errors.location ? "inputError" : ""}
                    />
                    {errors.location && (
                      <p className="errorText">{errors.location}</p>
                    )}
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Land Extent <sup>*</sup>
                    </label>
                    <br />
                    <input
                      name="extent"
                      value={form.extent}
                      onChange={handleChange}
                      type="text"
                      className={errors.extent ? "inputError" : ""}
                    />
                    {errors.extent && (
                      <p className="errorText">{errors.extent}</p>
                    )}
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Remarks
                    </label>
                    <br />
                    <input
                      name="remarks"
                      value={form.remarks}
                      onChange={handleChange}
                      type="text"
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

        {/* Work With Us Section*/}
      </div>

      {showSnackbar && (
        <div className="snackbar">Submitted Successfully! Thank you.</div>
      )}
    </>
  );
}
