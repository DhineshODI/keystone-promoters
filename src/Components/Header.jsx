import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header({ menuOnlick }) {
  const [active, setActive] = useState("");
  // const handleActive = (name) => setActive(name);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".HeaderMainSEC");
      if (window.scrollY > 80) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/brand") setActive("aboutus");
    else if (path === "/ongoing-projects") setActive("ongoing-projects");
    else if (path === "/completed") setActive("completed");
    else if (path === "/careers") setActive("careers");
    else if (path === "/contact") setActive("contact");
  }, []);

  const handleActive = (val) => {
    setActive(val);
  };

  return (
    <>
      <div>
        <div className="headerTop">
          {/* <div className="mailHeadingText">
            Email : <span>enquiry@keystonepromoters.com</span>
          </div> */}
          <div className="mailHeadingText">
            Email :{" "}
            <a href="mailto:info@keystonepromoters.com">
              info@keystonepromoters.com
            </a>
          </div>

          <div className="mailHeadingText">
            Call us now : <a href="tel:+91442817225">+91 442817225 </a> &nbsp;|{" "}
            <a href="tel:9940008855"> +91 99400 08855</a>
          </div>
        </div>
        <div
          className="HeaderMainSEC"
          //  data-aos="fade-down"
        >
          <a href="/" onClick={() => handleActive("")}>
            <img
              className="headerLogoImg"
              src="/images/keystone-detailpage-logo.jpg"
              alt=""
            />
          </a>
          <ul className="listHeaders">
            <a href="/brand">
              <li
                className={
                  active === "aboutus" ? "active" : "text-hover-underline"
                }
                onClick={() => handleActive("aboutus")}
              >
                Brand
              </li>
            </a>
            <a href="/ongoing-projects">
              <li
                className={
                  active === "ongoing-projects"
                    ? "active"
                    : "text-hover-underline"
                }
                onClick={() => handleActive("ongoing-projects")}
              >
                Ongoing
              </li>
            </a>
            {/* <a href="/joint-venture">
              <li
                className={
                  active === "joint-venture" ? "active" : "text-hover-underline"
                }
                onClick={() => handleActive("joint-venture")}
              >
                Joint Venture
              </li>
            </a> */}

            <a href="/completed">
              <li
                className={
                  active === "completed" ? "active" : "text-hover-underline"
                }
                onClick={() => handleActive("completed")}
              >
                Completed
              </li>
            </a>

            <a href="/careers">
              <li
                className={
                  active === "careers" ? "active" : "text-hover-underline"
                }
                onClick={() => handleActive("careers")}
              >
                Careers
              </li>
            </a>

            <a href="/contact">
              <li
                className={
                  active === "contact" ? "active" : "text-hover-underline"
                }
                onClick={() => handleActive("contact")}
              >
                Contact Us
              </li>
            </a>

            <div className="hamburgerflex cursor-pointer" onClick={menuOnlick}>
              <img
                className="hamburgerIconImage"
                src="/images/icons/hamburger-icon.svg"
                alt=""
              />
              <span>MENU</span>
            </div>
          </ul>

          <ul className="mobileiconskey">
            <a href="tel:9940008855">
              <li>
                <img src="/images/icons/call-mobile.svg" alt="" />
              </li>
            </a>
            <li onClick={menuOnlick}>
              <img src="/images/icons/menu-mobile.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
