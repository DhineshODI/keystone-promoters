import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChannelPartnerComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  const [form, setForm] = useState({
    companyName: "",
    email: "",
    city: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validation
    if (!form.companyName.trim()) {
      alert("Please enter the company name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter the email address.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!form.city.trim()) {
      alert("Please enter the city.");
      return;
    }

    // Remarks is optional → no validation

    // If validation passes → submit
    try {
      const res = await axios.post(
        "http://localhost/keystone-api/apis/ChannelPartner.php",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", res.data);

      if (res.data.status === true) {
        alert("Channel partner form submitted successfully!");

        // Reset form
        setForm({
          companyName: "",
          email: "",
          city: "",
          remarks: "",
        });
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
      <div className="channelPartnerMainSection">
        {/* Banner */}
        <div>
          <div className="detailPageBanners">
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Empower Your
            </h5>
            <h5
              className="secondHeadingText"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Growth
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
                Channel Partner
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
                    <h4 className="gettknowHeading">Grow with us</h4>
                    <h3 className="visitOurOFficetext">
                      EMPOWERING OUR CHANNEL PARTNERS TO SUCCEED TOGETHER
                    </h3>
                  </div>
                </div>
                <div className="seondbannerafterSectionMAIN">
                  {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                  <img src="/images/channel-partner--banner-icon.png" alt="" />
                </div>
                <div
                  className="thirdbannerafterSectionMAIN"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div style={{ marginTop: "15px" }}>
                    <p className="contactPageAddress">
                      Join our trusted network of channel partners and earn more
                      by promoting premium homes backed by transparency,
                      quality, and support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Banner-Section */}

        {/* Channel-Partner-Form-Section */}

        <div className="channelPartnerFormFirst">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="lowconatinersectionafterbanner">
              <div className="channelContentPartner">
                <h5
                  className="secondHeadingText "
                  data-aos="fade-down"
                  data-aos-duration="1400"
                >
                  Channel Partners
                </h5>
                <p
                  className="subHeadingText"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Join Keystone Promoters to create sustainable, high-value real
                  estate projects built on trust quality, and innovation.
                </p>
              </div>
              <div className="channelPartnerFormSection">
                <div className="formContactUsSectionFlex">
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
                      <input name="email" onChange={handleChange} type="text" />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        City <sup>*</sup>
                      </label>
                      <br />
                      <input name="city" onChange={handleChange} type="text" />
                    </div>
                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Remarks
                      </label>
                      <br />
                      <input
                        name="remarks"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>

                    <div className="contactFormInputEach">
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
                <img
                  className="formChannelPartnerImage"
                  src="/images/channel-partner-form-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Channel-Partner-Form-Section */}
    </>
  );
}
