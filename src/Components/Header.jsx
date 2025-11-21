import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState("");
  const handleActive = (name) => setActive(name);

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

  return (
    <>
      <div>
        <div className="headerTop">
          <div className="mailHeadingText">
            Email : <span>enqiry@keystonepromoters.com</span>
          </div>
          <div className="mailHeadingText">
            Call us now : <span>+91 7092879022</span>
          </div>
        </div>
        <div className="HeaderMainSEC">
          <Link to="/" onClick={() => handleActive("")}>
            <img
              className="headerLogoImg"
              src="/images/keystone-detailpage-logo.jpg"
              alt=""
            />
          </Link>
          <ul className="listHeaders">
            <li
              className={
                active === "aboutus" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("aboutus")}
            >
              <Link to="/aboutus">Brand</Link>
            </li>

            <li
              className={
                active === "ongoing-projects"
                  ? "active"
                  : "text-hover-underline"
              }
              onClick={() => handleActive("ongoing-projects")}
            >
              <Link to="/ongoing-projects">Ongoing</Link>
            </li>

            <li
              className={
                active === "project-detail" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("project-detail")}
            >
              <Link to="/project-detail">Upcoming</Link>
            </li>

            <li
              className={
                active === "completed" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("completed")}
            >
              <Link to="/completed">Completed</Link>
            </li>

            <li
              className={
                active === "contact" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("contact")}
            >
              <Link to="/contact">Contact Us</Link>
            </li>

            <div className="hamburgerflex">
              <img
                className="hamburgerIconImage"
                src="/images/icons/hamburger-icon.svg"
                alt=""
              />
              <span>MENU</span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
