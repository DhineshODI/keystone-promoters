export default function ChannelPartnerComponent() {
  return (
    <>
      <div className="channelPartnerMainSection">
        {/* Banner */}
        <div>
          <div className="detailPageBanners">
            <h5 className="secondHeadingText">Empower Your</h5>
            <h5 className="secondHeadingText">Growth</h5>

            <div className="BreadCrumSection">
              <span className="subHeadingText">Home</span>
              <span className="subHeadingText">-</span>
              <span className="subHeadingText">Channel Partner</span>
            </div>
          </div>
        </div>
        {/* Banner */}

        {/* After-Banner-Section */}

        <div className="afterMainBG">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="bannerafterSectionMAIN">
              <div className="firstbannerafterSectionMAIN">
                <div>
                  <h4 className="gettknowHeading">Grow with us</h4>
                  <h3 className="visitOurOFficetext">
                    EMPOWERING OUR CHANNEL PARTNERS TO SUCCEED TOGETHER
                  </h3>
                </div>
              </div>
              <div className="seondbannerafterSectionMAIN"></div>
              <div className="thirdbannerafterSectionMAIN">
                <div style={{ marginTop: "15px" }}>
                  <p className="contactPageAddress">
                    Join our trusted network of channel partners and earn more
                    by promoting premium homes backed by transparency, quality,
                    and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Banner-Section */}

        {/* Channel-Partner-Form-Section */}

        <div className="channelPartnerFormFirst">
          <div className="container max-w-7xl mx-auto px-4 ">
            <div className="channelContentPartner">
              <h5 className="secondHeadingText ">Channel Partners</h5>
              <p className="subHeadingText">
                Contact us with your question we'll make sure your concerns are
                addressed quickly and efficiently addressed quickly and
                efficiently
              </p>
            </div>
            <div className="channelPartnerFormSection">
              <div className="formContactUsSectionFlex">
                <div className="formMainStyleContactPage">
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="contactFormInputEach">
                    <label className="subHeadingText " htmlFor="">
                      Name <sup>*</sup>
                    </label>
                    <br />
                    <input type="text" />
                  </div>

                  <div className="contactFormInputEach">
                    <button>Submit</button>
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

      {/* Channel-Partner-Form-Section */}
    </>
  );
}
