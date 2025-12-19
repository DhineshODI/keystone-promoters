import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  // const projects = [
  //   { name: "The Scape - Keelkattalai, Chennai", link: "/architecture" },
  //   { name: "North Point - Chennai", link: "/architecture" },
  //   { name: "The Grove - Pallikaranai, Chennai.", link: "/architecture" },
  //   { name: "Muthu Palace - Karur., Chennai", link: "/architecture" },
  //   { name: "Standard Golden Terrace - Karur.", link: "/architecture" },
  //   { name: "Ambal Residency - Arur.", link: "/architecture" },
  // ];

  const projects = [
    // --- OLD LIST ---
    // { name: "Spectra", link: "/architecture" },
    { name: "North point", link: "/apartments" },
    { name: "The Grove", link: "/apartments" },
    { name: "The Scape", link: "/apartments" },
    { name: "Random Box", link: "/architecture" },
    { name: "Edge", link: "/architecture" },
    { name: "Mannat", link: "/architecture" },
    { name: "Clay", link: "/architecture" },
    { name: "The hub", link: "/architecture" },
    { name: "Trapezoid", link: "/architecture" },
    { name: "Sabari Garden Housing", link: "/architecture" },
    { name: "Yoga Institute", link: "/architecture" },
    { name: "Library", link: "/architecture" },
    { name: "Haritham", link: "/architecture" },
    { name: "Keystone office", link: "/interior" },
    { name: "Globus", link: "/interior" },
    { name: "Oasis", link: "/interior" },
    { name: "Shub", link: "/interior" },
    { name: "Varnam", link: "/interior" },
    { name: "AUM", link: "/interior" },
    { name: "Kwalitee", link: "/interior" },
    { name: "Random box", link: "/interior" },


  ];

  return (
    <>
      <div className="FooterMainDiv reveal ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="FooterSplit">
            <div className="FooterInnerDiv">
              <h5 className="subHeadingText ">Useful Links</h5>

              <ul className="footerListsul">
                <div>
                  <a href="/brand">
                    <li className="subHeadingText text-hover-underline">
                      About us
                    </li>
                  </a>

                  <a href="/testimonials">
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

                  <a href="/channel-partners">
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
                  <a href="/ongoing-projects/spectra">
                    <li className="subHeadingText  text-hover-underline">
                      Spectra - Keelkattalai, Chennai
                    </li>
                  </a>
                </div>
              </ul>
            </div>
            <div className="FooterInnerDiv">
              <h5 className="subHeadingText  ">Completed Projects</h5>

              {/* <ul className="footerListsul">
                <div>
                  <a href="/architecture">
                    <li className="subHeadingText  text-hover-underline">
                      The Scape - Keelkattalai, Chennai
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
              </ul> */}
              <ul className="footerListsul">
                <div className="projectslistfooter">
                  {projects.map((item, index) => (
                    <li
                      key={index}
                      className="subHeadingText text-hover-underline"
                    >
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
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
                        href=" https://in.linkedin.com/company/keystone-promoters-pvt-ltd---india"
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

                    {/* <div className="iconsMainDivFooter">
                      <a href="#" target="_blank">
                        <img src="/images/icons/twitter-x.svg" alt="" />
                      </a>
                    </div> */}
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className="footercopyRight">
            <div className="subHeadingText copyrightstextcontent ">
              Copyright © Keystone promoters Pvt Ltd
              {/* | Terms of Use | Privacy Policy */}
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
