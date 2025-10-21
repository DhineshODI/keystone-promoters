export default function OngoingProjectsList() {
  return (
    <>
      <div>
        <div className="detailPageBanners">
          <h5 className="secondHeadingText">Connect &</h5>
          <h5 className="secondHeadingText">Collaborate</h5>

          <div className="BreadCrumSection">
            <span className="subHeadingText">Home</span>
            <span className="subHeadingText">-</span>
            <span className="subHeadingText">Contact US</span>
          </div>
        </div>
      </div>

      <div className="contactPageBgPadding">
        <div className="contactUsBannerPageBg">
          <div className="formContactUsSection">
            <div className="formContactUsSectionFlex">
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
          </div>
        </div>
      </div>
    </>
  );
}
