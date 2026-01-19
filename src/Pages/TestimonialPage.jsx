import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
export default function TestimonialPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false, // run only once
    });
  }, []);
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Customer Testimonial | Keystone Promoters Happy Customers</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Customer testimonial showcase experiences with Keystone Promoters, underlining construction quality, transparency, and strong brand confidence."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="/testimonials" />

        {/* Schema Markup */}
      </Helmet>

      <h1 style={{ display: "none" }}>Customer Testimonial</h1>
      <div className="">
        <div>
          <div className="testimonialmainpage">
            {/* Banner */}
            <div>
              <div className="detailPageBanners">
                <h5
                  className="secondHeadingText"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Stories that
                </h5>
                <h5
                  className="secondHeadingText"
                  data-aos="fade-up"
                  data-aos-duration="1300"
                >
                  Inspire Trust
                </h5>

                <div
                  className="BreadCrumSection"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <a href="/" className="subHeadingText  text-hover-underline">
                    Home
                  </a>
                  <span className="subHeadingText">-</span>
                  <a className="subHeadingText  text-hover-underline">
                    Testimonials
                  </a>
                </div>
              </div>
            </div>
            {/* Banner */}

            {/* After-Banner-Section */}

            <div className="afterMainBG testimonialpageafterbanner">
              <div className="container max-w-7xl mx-auto px-4 ">
                <div className="lowconatinersectionafterbanner">
                  <div className="bannerafterSectionMAIN">
                    <div
                      className="firstbannerafterSectionMAIN"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <div>
                        <h2 className="gettknowHeading">
                          Client Testimonials Showcasing
                        </h2>
                        <h2 className="visitOurOFficetext">
                          {/* Driven People. <br /> Real Opportunities. <br /> Here. */}
                          Our Dedication to Building With Integrity and Care
                        </h2>
                      </div>
                    </div>
                    <div className="seondbannerafterSectionMAIN">
                      {/* <div className="seondbannerafterSectionMAINrow"></div> */}
                      <img src="/images/testimonial-banner-icon.png" alt="Customer Testimonial" />
                    </div>

                    <div
                      className="thirdbannerafterSectionMAIN"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      <div style={{ marginTop: "15px" }}>
                        <p className="contactPageAddress">
                          Genuine client stories reflecting our commitment to
                          quality, trust and satisfaction in every completed
                          project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After-Banner-Section */}

            {/* testimonial-cards */}

            <div className="testimonialpagebgcars">
              <div className="container max-w-7xl mx-auto px-4">
                <div className="testimonalpagedisply">
                  <div
                    class="testimonalSliderborder"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <div class="testimonalSectionName">
                      <h4>Mr. Pandian</h4>
                      <p>Chennai</p>
                    </div>
                    <div class="testimonalContent">
                      <p class="subHeadingText">
                        Keystone Promoters delivered quality construction with
                        excellent. finishing and reliable service. They met
                        every requirement with care and professionalism-truly a
                        wae investment
                      </p>
                      <div class="flex items-center justify-between  testimonalPersonImageContainer ">
                        <div class="testimonalPersonImagediv">
                          <img
                            class="testimonalPersonImage"
                            src="/images/youtube-image.png"
                            alt=""
                          />
                        </div>
                        <img
                          class="youtubeIcontestimonal"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="testimonalSliderborder"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div class="testimonalSectionName">
                      <h4>Mrs. Devi</h4>
                      <p>Chennai</p>
                    </div>
                    <div class="testimonalContent">
                      <p class="subHeadingText">
                        Initially hesitant about Keystone, I was soon impressed
                        by their detailed planning, thoughtful design and highly
                        professional execution that consistently exceeded my
                        expectations.
                      </p>
                      <div class="flex items-center justify-between  testimonalPersonImageContainer ">
                        <div class="testimonalPersonImagediv">
                          <img
                            class="testimonalPersonImage"
                            src="/images/youtube-image.png"
                            alt=""
                          />
                        </div>
                        <img
                          class="youtubeIcontestimonal"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="testimonalSliderborder"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div class="testimonalSectionName">
                      <h4>M/s. KwaliteeFabs</h4>
                      <p>Chennai</p>
                    </div>
                    <div class="testimonalContent">
                      <p class="subHeadingText">
                        An Architect/interior designer who creates wonders with
                        style within budget. Vaishnavi’s professionalism and
                        team spirit helped pick perfect colors, fixtures,
                        carpeting, delivering significant quality service.
                      </p>
                      <div class="flex items-center justify-between  testimonalPersonImageContainer ">
                        <div class="testimonalPersonImagediv">
                          <img
                            class="testimonalPersonImage"
                            src="/images/youtube-image.png"
                            alt=""
                          />
                        </div>
                        <img
                          class="youtubeIcontestimonal"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* testimonial-cards */}
          </div>
        </div>
      </div>
    </>
  );
}
