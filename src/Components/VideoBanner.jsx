import Header from "./Header";

export default function VideoBanner() {
  return (
    <>
      <div className="videoBannermainContainer">
        <div className="videoBannerVideoFILE">
          <video
            autoPlay
            muted
            loop
            src="/images/homepage/bannerVideo.mp4"
          ></video>

          <div className="contentHeadingBanner">
            <h5 className="secondHeadingText">CRAFTSMANSHIP</h5>
            <h6 className="withTextContent">with</h6>
            <h5 className="secondHeadingText">Purpose</h5>
            <p className="subHeadingText">
              Every detail is designed with intention-Blending functionality,
              beauty, and innovation to create hom ffthat stand the test of time
            </p>
          </div>
        </div>

        {/* <div className="headerHomePage">
          <Header />
        </div> */}
      </div>
    </>
  );
}
