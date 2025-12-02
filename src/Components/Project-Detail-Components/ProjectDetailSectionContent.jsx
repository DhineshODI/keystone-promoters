import AOS from "aos";
import "aos/dist/aos.css";
export default function ProjectDetailSectionContent() {
  return (
    <>
      <div className="mainContainerDetailProject">
        <div className="ProjectDetailSectionContentSection">
          <img
            className="projectDetailBannerIMageMain"
            src="/images/project-detail/project-detail-project-banner.jpg"
            alt=""
          />

          <div className="spectraprojectdetailssection">
            <div className="projectDetailProjectName">
              <div className="mainconatinerprojectflex">
                <img
                  src="/images/project-detail/builind-icon-pink.svg"
                  alt=""
                />
                <div className="projectNameDetailPage">
                  <h5>Spectra</h5>
                  <p>Keelkattalai, Chennai</p>
                </div>
              </div>

              <div className="projectNameDetailPage projectdetailflex">
                <img
                  src="/images/project-detail/builind-icon-pink.svg"
                  alt=""
                />

                <div className="flex items-end gap-2">
                <h5>2 & 3</h5>
                <p>BHK Apartment</p>
                </div>

              </div>
            </div>

            <div className="noffloorswidth">
              <div>
                <p className="nooffloors">
                  No of Floors :<span> Stilt + 5 Floors</span>{" "}
                </p>
                <p className="nooffloors">
                  Land Extent :<span> 22,058 Sq.ft.</span>{" "}
                </p>
                <p className="nooffloors">
                  Total :<span> Units 41</span>{" "}
                </p>
                <p className="nooffloors">
                  3 BHK :<span> 1481 - 1608 Sq.ft.</span>{" "}
                </p>
                <p className="nooffloors">
                  2 BHK : <span> 1069 -1159 Sq.ft.</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
