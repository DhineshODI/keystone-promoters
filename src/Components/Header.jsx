export default function Header() {
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
          <img
            className="headerLogoImg"
            src="/images/keystone-detailpage-logo.png"
            alt=""
          />
          <ul className="listHeaders">
            <li>Brand</li>
            <li>Ongoing</li>
            <li>Upcoming</li>
            <li>Completed</li>
            <li>Contact us</li>
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
