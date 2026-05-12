import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterOne = () => {
  const counters = [
    { value: 400, suffix: "+", title: "Happy Guests" },
    { value: 6, suffix: "", title: "Available Rentals" },
    { value: 56, suffix: "+", title: "Nearby Experinces" },
    { value: 2, suffix: "", title: "Wonderful Hosts" },
  ];

  // Use intersection observer to detect when component is in view
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="counter-area space-bottom mt-5" ref={ref}>
      <div className="container shape-mockup-wrap">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span></span>
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    {inView && (
                      <CountUp
                        start={0}
                        end={counter.value}
                        duration={2} // Matches your jQuery settings
                        delay={0}
                      />
                    )}
                    {counter.suffix}
                  </h3>
                  <h6 className="counter-title">{counter.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
