import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ChannelPartnerComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    email: "",
    city: "",
    phone: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    email: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === "phone") {
    //   if (!/^[6-9]*$/.test(value)) return; // only numbers
    // }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error while typing
  };

  const handleSubmit = async () => {
    let newErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Enter a valid email";
      }
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    // else if (form.phone.replace(/\D/g, "").length < 10) {
    //   newErrors.phone = "Phone must be at least 10 digits";
    // }

    setErrors(newErrors);

    // STOP if validation fails
    if (Object.keys(newErrors).length > 0) return;

    // Start loader
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://keystonepromoters.com/keystone-api/keystone-api/apis/ChannelPartner.php",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.status === true) {
        setForm({
          companyName: "",
          email: "",
          city: "",
          phone: "",
          remarks: "",
        });

        setErrors({});

        // show snackbar
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);
            window.location.href = "/thankyou";
      }
    } catch (error) {
      console.error("Request Error:", error);
    }

    // Stop loader
    setIsLoading(false);
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
                      quality and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Banner-Section */}

        {/* Channel-Partner-Form-Section */}

        {/* <div className="channelPartnerFormFirst">
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
                  estate projects built on trust quality and innovation.
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
        </div> */}

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
                  estate projects built on trust quality and innovation.
                </p>
              </div>
              <div className="channelPartnerFormSection">
                <div className="formContactUsSectionFlex">
                  <div className="formMainStyleContactPage">
                    <div className="contactFormInputEach">
                      <label className="subHeadingText">
                        Name of the Company <sup>*</sup>
                      </label>
                      <input
                        name="companyName"
                        type="text"
                        value={form.companyName}
                        onChange={handleChange}
                        className={errors.companyName ? "inputError" : ""}
                      />
                      {errors.companyName && (
                        <p className="errorText">{errors.companyName}</p>
                      )}
                    </div>

                    <div className="contactFormInputEach">
                      <label className="subHeadingText">
                        Email <sup>*</sup>
                      </label>
                      <input
                        name="email"
                        type="text"
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
                        City <sup>*</sup>
                      </label>
                      <input
                        name="city"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        className={errors.city ? "inputError" : ""}
                      />
                      {errors.city && (
                        <p className="errorText">{errors.city}</p>
                      )}
                    </div>

                    <div className="contactFormInputEach">
                      <label className="subHeadingText">
                        Phone <sup>*</sup>
                      </label>

                      <PhoneInput
                        country={"in"} // Default India
                        value={form.phone}
                        onChange={(value) => {
                          setForm({ ...form, phone: value });
                          setErrors({ ...errors, phone: "" });
                        }}
                        inputClass={errors.phone ? "inputError" : ""}
                        containerClass="phoneContainer"
                        buttonClass="phoneDropdown"
                      />

                      {errors.phone && (
                        <p className="errorText">{errors.phone}</p>
                      )}
                    </div>

                    <div className="contactFormInputEach">
                      <label className="subHeadingText " htmlFor="">
                        Remarks
                      </label>
                      <br />
                      <input
                        name="remarks"
                        type="text"
                        value={form.remarks}
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

      {showSnackbar && (
        <div className="snackbar">Submitted Successfully! Thank you.</div>
      )}
    </>
  );
}
