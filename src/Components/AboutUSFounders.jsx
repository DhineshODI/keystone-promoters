export default function AboutusFounder() {
  return (
    <>
      <div className="foundersbanner">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="lowconatinersection aboutusfounders">
            <div>
              <h5 className="secondHeadingText ">Founders</h5>
              <p className="subHeadingText ">
                Empowering living through vision, purpose, and action.
              </p>
            </div>

            <div className="founderflex">
              <div className="founderflex1">
                <div className="rectangleone active">
                  <div className="founderdetails">
                    <h4 className="secondHeadingText ">Dinesh</h4>
                    <h5 className="subHeadingText ">Director</h5>
                  </div>

                  <img
                    className="founderimagee"
                    src="/images/about-us/founder1.png"
                    alt=""
                  />
                </div>
                <div className="rectangleone">
                  <div className="founderdetails">
                    <h4 className="secondHeadingText ">Dinesh</h4>
                    <h5 className="subHeadingText ">Director</h5>
                  </div>

                  <img
                    className="founderimagee"
                    src="/images/about-us/founder1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="founderflex2">
                <div className="founderflexcontentpopup">
                  <h5 className="foundernamepopup">Dinesh</h5>
                  <p className="subHeadingText ">Director</p>
                </div>

                <hr />

                <p className="subHeadingText founderwho">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <hr />

                <div className="popupaboutusfounders">
                  <ul>
                    <li>director's Profile</li>
                    <li>Design Vision & Individual Aesthetic</li>
                    <li>Professional Journey & Industry Standing</li>
                    <li>Landmark Projects & Curated Showcase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
