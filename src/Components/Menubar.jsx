import { Link } from "react-router-dom";

export default function Menubar({ menuOnlick }) {
  return (
    <>
      <div className="menubarstyle">
        <div className="onemenu"></div>
        <ul className="twomenu">
          <div>
            <li onClick={menuOnlick}>
              <a href="/brand">Brand</a>
            </li>

            {/* <li onClick={menuOnlick}>
              <a href="/project-detail">Projects</a>
            </li> */}

            <li onClick={menuOnlick}>
              <a href="/ongoing-projects">Ongoing</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/completed">Completed</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/channel-partners">Channel Partners</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/joint-venture">Joint Venture</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/careers">Careers</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/testimonials">Testimonials</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/nri">NRI</a>
            </li>

            <li onClick={menuOnlick}>
              <a href="/contact">Contact Us</a>
            </li>
          </div>

          <img
            onClick={menuOnlick}
            className="menubarcloseicon cursor-pointer"
            src="/images/hamburger-icon.svg"
            alt=""
          />
        </ul>
      </div>
    </>
  );
}
