import NriFaq from "../Components/NriFaq";
import OngoingProjects from "../Components/OnGoingProjects";

export default function NriPage() {
  return (
    <>
      <div className="">
        <div>
          <div className="NriPage">
            {/* Banner */}
            <div>
              <div className="detailPageBanners NRIbaner">
                <h5 className="secondHeadingText">Smart Choices</h5>
                <h5 className="secondHeadingText">For NRIS</h5>
                <p className="subHeadingText">
                  Every detail is designed with intention-Blending
                  functionality, beauty, and innovation to create homes that
                  stand the test of time
                </p>
              </div>
            </div>
            {/* Banner */}

            <div className="nridiscoversection">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="lowconatinersection">
                  <div>
                    <p className="mainheadingText ">
                      We are Keystone Promoters
                    </p>

                    <h5 className="secondHeadingText ">
                      Discover Why Real Estate Investment Is Your Smartest
                      Choice
                    </h5>
                  </div>

                  <div className="flexnriimage">
                    <div className="oneflexnriimage">
                      <img src="/images/nri/nridiscoverimage.jpg" alt="" />
                    </div>
                    <div className="twoflexnriimage">
                      <p className="maincontentnriimage">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>

                      <p className="subHeadingText">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make...
                      </p>

                      <ul className="nrilist">
                        <li>
                          <div className="mainlistul">
                            <p className="firstulnri">
                              <strong> 100 +</strong> Projects built with
                              enduring quality
                            </p>
                            <p className="valuediv">01</p>
                          </div>
                        </li>
                        <li>
                          <div className="mainlistul">
                            <p className="firstulnri">
                              <strong> 100 +</strong> Projects built with
                              enduring quality
                            </p>
                            <p className="valuediv">01</p>
                          </div>
                        </li>
                        <li>
                          <div className="mainlistul">
                            <p className="firstulnri">
                              <strong> 100 +</strong> Projects built with
                              enduring quality
                            </p>
                            <p className="valuediv">01</p>
                          </div>
                        </li>
                      </ul>

                      <div className="nrilistenquire">
                        <a href="/contact">
                          <button className="cursor-pointer">
                            Enquire Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="keystoneuniquesection">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="lowconatinersection">
                  <p className="mainheadingText ">We are Keystone Promoters</p>
                  <div className="unqiuesectionflex">
                    <h5 className="secondHeadingText ">
                      What Makes Keystone Unique?
                    </h5>
                    <p className="subHeadingText ">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscingelit do
                      eius mmporincididunt ut labore et dolore magna uis ipsum
                      suspendisse et dolore magna uis ipsum suspendisse */}
                    </p>
                  </div>

                  <div className="unqiuecardsflexc">
                    <div className="unquiecardsection">
                      <img
                        src="/images/about-us/icons/time-delivery.svg"
                        alt=""
                      />
                      <h3 className="timedelivery">Timely Delivery </h3>
                      <p className="subHeadingText ">
                        Every commitment met with precision
                      </p>
                    </div>
                    <div className="unquiecardsection">
                      <img src="/images/about-us/icons/design-led.svg" alt="" />
                      <h3 className="timedelivery">Design Led </h3>
                      <p className="subHeadingText ">
                        Architecture with a soul
                      </p>
                    </div>
                    <div className="unquiecardsection">
                      <img src="/images/about-us/icons/compliment.svg" alt="" />
                      <h3 className="timedelivery">100% Compliant</h3>
                      <p className="subHeadingText ">
                        Legal clarity, clear title
                      </p>
                    </div>
                    <div className="unquiecardsection">
                      <img src="/images/about-us/icons/compliment.svg" alt="" />
                      <h3 className="timedelivery">Solid Foundations</h3>
                      <p className="subHeadingText ">
                        Structurally sound and aesthetically modern
                      </p>
                    </div>
                    <div className="unquiecardsection">
                      <img src="/images/about-us/icons/investor.svg" alt="" />
                      <h3 className="timedelivery">Investor Friendly</h3>
                      <p className="subHeadingText ">High appreciation value</p>
                    </div>
                  </div>

                  <div className="nricardscontent">
                    <p className="subHeadingText ">
                      What sets Keystone apart is our blend of thoughtful
                      planning, modern aesthetics, transparency, and a
                      customer-first approach to development.
                    </p>
                  </div>

                  <div className="NriPagebutton">
                    <a href="/contact">
                      <button className="cursor-pointer">Enquire Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <OngoingProjects />

            <NriFaq />
          </div>
        </div>
      </div>
    </>
  );
}
