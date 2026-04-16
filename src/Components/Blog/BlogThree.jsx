import React from "react";
import { Link } from "react-router-dom";

function BlogThree() {
  return (
    <section className="bg-smoke overflow-hidden space">
      <div className="container shape-mockup-wrap">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title">Blog and Article</span>
              <h2 className="sec-title">
                Blog &amp; Articles From Terra Sardenia
              </h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div className="sec-btn">
              <Link to="/blog" className="th-btn style4 th-icon">
                See More Articles
              </Link>
            </div>
          </div>
        </div>
        <div className="row gx-24 gy-30">
          <div className="col-xl-5">
            <Link to="/blog/1" className="blog-grid th-ani clickable-card">
              <div className="blog-img global-img">
                <img src="/assets/img/blog/blog_3_1.jpg" alt="blog" />
              </div>
              <div className="blog-grid_content">
                <div className="blog-meta">
                  <span className="author">July 05, 2024</span>
                  <span>6 min read</span>
                </div>
                <h3 className="box-title">
                  Travel agency for those who want to explore the world and try
                  to make adventure
                </h3>
                <span className="th-btn style4 th-icon">Read More</span>
              </div>
            </Link>
          </div>
          <div className="col-xl-7">
            <Link to="/blog/1" className="blog-grid style2 th-ani clickable-card">
              <div className="blog-img global-img">
                <img src="/assets/img/blog/blog_3_2.jpg" alt="blog" />
              </div>
              <div className="blog-grid_content">
                <div className="blog-meta">
                  <span className="author">July 07, 2024</span>
                  <span>7 min read</span>
                </div>
                <h3 className="box-title">
                  The best time to visit japan &amp; enjoy the cherry blossoms
                </h3>
                <span className="th-btn style4 th-icon">Read More</span>
              </div>
            </Link>
            <Link to="/blog/1" className="blog-grid th-ani style2 mt-24 clickable-card">
              <div className="blog-img global-img">
                <img src="/assets/img/blog/blog_3_3.jpg" alt="blog" />
              </div>
              <div className="blog-grid_content">
                <div className="blog-meta">
                  <span className="author">July 10, 2024</span>
                  <span>8 min read</span>
                </div>
                <h3 className="box-title">
                  Hiden history of Japan in the world and try to make adventure
                </h3>
                <span className="th-btn style4 th-icon">Read More</span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          style={{
            top: "14%",
            right: "-13%",
          }}
        >
          <img src="/assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{
            top: "25%",
            right: "-12%",
          }}
        >
          <img src="/assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          style={{
            top: "20%",
            right: "-18%",
          }}
        >
          <img src="/assets/img/shape/shape_3.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movingX d-none d-xxl-block"
          style={{
            bottom: "-15%",
            right: "10%",
          }}
        >
          <img src="/assets/img/shape/shape_9.png" alt="shape" />
        </div>
      </div>
    </section>
  );
}

export default BlogThree;
