import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    if (path === "/aboutus") setActive("aboutus");
    else if (path === "/ongoing-projects") setActive("ongoing-projects");
    else if (path === "/project-detail") setActive("project-detail");
    else if (path === "/completed") setActive("completed");
    else if (path === "/contact") setActive("contact");
  }, []);

  const handleActive = (val) => {
    setActive(val);
  };

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
          <a href="/" onClick={() => handleActive("")}>
            <img
              className="headerLogoImg"
              src="/images/keystone-detailpage-logo.jpg"
              alt=""
            />
          </a>
          <ul className="listHeaders">
            <li
              className={
                active === "aboutus" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("aboutus")}
            >
              <a href="/aboutus">Brand</a>
            </li>

            <li
              className={
                active === "ongoing-projects"
                  ? "active"
                  : "text-hover-underline"
              }
              onClick={() => handleActive("ongoing-projects")}
            >
              <a href="/ongoing-projects">Ongoing</a>
            </li>

            <li
              className={
                active === "project-detail" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("project-detail")}
            >
              <a href="/project-detail">Upcoming</a>
            </li>

            <li
              className={
                active === "completed" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("completed")}
            >
              <a href="/completed">Completed</a>
            </li>

            <li
              className={
                active === "contact" ? "active" : "text-hover-underline"
              }
              onClick={() => handleActive("contact")}
            >
              <a href="/contact">Contact Us</a>
            </li>

            <div className="hamburgerflex cursor-pointer" onClick={menuOnlick}>
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
