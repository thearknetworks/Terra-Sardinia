import React from "react";
import DestinationListCard from "./DestinationListCard";

function DestinationList({
  detailsBasePath = "/destination",
  posts = [],
  buttonLabel = "Discover",
  buttonTo = "details",
  sectionClassName = "position-relative overflow-hidden space",
}) {
  return (
    <section className={sectionClassName} id="destination-sec">
      <div className="container shape-mockup-wrap">
        <div className="row gy-4 gx-4">
          {posts.map((data, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <DestinationListCard
                destinationID={data.id}
                destinationImage={data.image}
                destinationTitle={data.title}
                destinationSubtitle={data.item}
                detailsBasePath={detailsBasePath}
                buttonLabel={buttonLabel}
                buttonTo={buttonTo}
              />
            </div>
          ))}
        </div>

        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          style={{ bottom: "17%", right: "-9%" }}
        >
          <img
            src="/assets/images/Elements/Blue color/Coral.png"
            style={{ scale: "0.4" }}
            alt="shape"
          />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{ bottom: "2%", right: "-8%" }}
        >
          <img src="/assets/images/Elements/Blue color/Crab.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          style={{ bottom: "15%", right: "-4%" }}
        >
          <img
            src="/assets/images/Elements/Blue color/Shrimp.png"
            style={{ scale: "0.6" }}
            alt="shape"
          />
        </div>
      </div>
    </section>
  );
}

export default DestinationList;
