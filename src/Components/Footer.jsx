import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  return (
    <>
      <div className="FooterMainDiv reveal ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="FooterSplit">
            <div className="FooterInnerDiv">
              <h5 className="subHeadingText ">Useful Links</h5>

              <ul className="footerListsul">
                <div>
                  <a href="/aboutus">
                    <li className="subHeadingText text-hover-underline">
                      About us
                    </li>
                  </a>

                  <a href="/testimonial">
                    <li className="subHeadingText text-hover-underline">
                      Testimonials
                    </li>
                  </a>

                  {/* <a href="/news">
                    <li className="subHeadingText text-hover-underline">
                      News Room
                    </li>
                  </a> */}

                  <a href="/joint-venture">
                    <li className="subHeadingText text-hover-underline">
                      Joint Venture
                    </li>
                  </a>

                  <a href="/nri">
                    <li className="subHeadingText text-hover-underline">NRI</li>
                  </a>

                  <a href="/careers">
                    <li className="subHeadingText text-hover-underline">
                      Careers
                    </li>
                  </a>
                </div>

                <div>
                  {/* <a href="/joint-venture">
                    <li className="subHeadingText text-hover-underline">
                      Joint Venture
                    </li>
                  </a> */}

                  <a href="/channel-partner">
                    <li className="subHeadingText text-hover-underline">
                      Channel Partner
                    </li>
                  </a>

                  {/* <a href="/blogs">
                    <li className="subHeadingText text-hover-underline">
                      Blogs
                    </li>
                  </a> */}

                  {/* <a href="/news">
                    <li className="subHeadingText text-hover-underline">
                      News
                    </li>
                  </a> */}

                  <a href="/contact">
                    <li className="subHeadingText text-hover-underline">
                      Contact Us
                    </li>
                  </a>
                </div>
              </ul>
            </div>
            <div className="FooterInnerDiv">
              <h5 className="subHeadingText  ">Ongoing Projects</h5>

              <ul className="footerListsul">
                <div>
                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      The Scape - S.Kolathur, Chennai
                    </li>
                  </a>
                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      North Point - Chennai
                    </li>
                  </a>
                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      The Grove - Pallikaranai, Chennai.
                    </li>
                  </a>
                </div>
              </ul>
            </div>
            <div className="FooterInnerDiv">
              <h5 className="subHeadingText  ">Completed Projects</h5>

              <ul className="footerListsul">
                <div>
                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      The Scape - S.Kolathur, Chennai
                    </li>
                  </a>

                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      North Point - Chennai
                    </li>
                  </a>

                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      The Grove - Pallikaranai, Chennai.
                    </li>
                  </a>

                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      Muthu Palace - Karur., chennai
                    </li>
                  </a>

                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      Standard Golden Terrace - Karur.
                    </li>
                  </a>
                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      Ambal Residency - arur.
                    </li>
                  </a>
                </div>
              </ul>
            </div>
            <div className="FooterInnerDiv">
              <div>
                <h5 className="subHeadingText  ">Member</h5>

                <div>
                  <img src="/images/memberlogo.png" alt="" />
                </div>
              </div>
              <div className="mt-5">
                <h5 className="subHeadingText  ">Follow Us</h5>
                <ul className="footerListsul">
                  <div className="iconsFooters">
                    <div className="iconsMainDivFooter">
                      <a
                        href="#"
                        target="_blank"
                      >
                        <img src="/images/icons/linkedin.svg" alt="" />
                      </a>
                    </div>

                    <div className="iconsMainDivFooter">
                      <a
                        href="https://www.instagram.com/keystone_promoters/"
                        target="_blank"
                      >
                        <img src="/images/icons/instagram.svg" alt="" />
                      </a>
                    </div>

                    <div className="iconsMainDivFooter">
                      <a
                        href="https://www.facebook.com/keystonechennai/"
                        target="_blank"
                      >
                        <img src="/images/icons/facebook.svg" alt="" />
                      </a>
                    </div>

                    <div className="iconsMainDivFooter">
                      <a
                        href="https://www.youtube.com/@KeystonePromoters"
                        target="_blank"
                      >
                        <img src="/images/icons/youtube.svg" alt="" />
                      </a>
                    </div>

                    <div className="iconsMainDivFooter">
                      <a
                        href="#"
                        target="_blank"
                      >
                        <img src="/images/icons/twitter-x.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="footercopyRight">
            <div className="subHeadingText copyrightstextcontent ">
              Copyright © Keystone Promotors Pvt Ltd | Terms of Use | Privacy
              Policy
            </div>

            <Link to="https://www.opendesignsin.com/" target="_blank">
              <div className="designByOpendesigns">
                <a
                  className="subHeadingText copyrightstextcontent"
                  target="_blank"
                  href="https://www.opendesignsin.com/"
                >
                  Design By
                </a>
                <img src="/images/homepage/open-designs-logo.webp" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
