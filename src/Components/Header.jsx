export default function Header() {
  return (
    <>
      <div>
        <div className="HeaderMainSEC">
          <img src="/images/keystone-Header.jpg" alt="" />
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
