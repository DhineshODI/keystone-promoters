import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect , useState } from "react";
import axios from "axios";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // -------- VALIDATION --------

    if (!form.companyName.trim()) {
      alert("Please enter the company name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter the email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!form.phone.trim()) {
      alert("Please enter the phone number.");
      return;
    }

    // Phone should be numbers & minimum 10 digits
    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Please enter a valid phone number (minimum 10 digits).");
      return;
    }

    if (!form.location.trim()) {
      alert("Please enter the location of the property.");
      return;
    }

    if (!form.extent.trim()) {
      alert("Please enter the land extent.");
      return;
    }

    // remarks is optional → no validation needed

    // -------- SUBMIT REQUEST --------
    try {
      const res = await axios.post(
        "http://localhost/keystone-api/apis/JointVenture.php",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", res.data);

      if (res.data.status === true) {
        alert("Joint Venture form submitted successfully!");

        // Clear form
        setForm({
          companyName: "",
          email: "",
          phone: "",
          location: "",
          extent: "",
          remarks: "",
        });
      } else {
        alert("Error: " + res.data.message);
        console.error("PHP Error:", res.data.error);
      }
    } catch (err) {
      console.error("Request Error:", err);
      alert("Something went wrong. Please try again.");
    }
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
        </div>

        {/* Work With Us Section*/}
      </div>
    </>
  );
}
