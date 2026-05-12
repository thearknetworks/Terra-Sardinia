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
      </div>
    </section>
  );
}

export default DestinationList;
