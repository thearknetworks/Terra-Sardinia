import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function GalleryOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open the modal with the selected image
  const openModal = (imageSrc, event) => {
    event.preventDefault(); // Prevent default link behavior
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-area">
      <div className="container th-container shape-mockup-wrap">
        <div className="title-area text-center">
          <span className="sub-title">Through Our Lens</span>
          <h2 className="sec-title">Beautiful Moments In Sardenia</h2>
        </div>
        <div className="row gy-10 gx-10 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_742x696 Image 1.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_742x696 Image 1.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_742x696 Image 1.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_742x696 Image 1.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_743x575 Image 1.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 1.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_743x575 Image 1.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 1.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_743x575 Image 2.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 2.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_743x575 Image 2.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 2.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_743x1200 Image 1.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x1200 Image 1.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_743x1200 Image 1.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x1200 Image 1.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_743x575 Image 3.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 3.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_743x575 Image 3.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 3.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_743x575 Image 4.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 4.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_743x575 Image 4.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_743x575 Image 4.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <Link
                  to="/assets/img/gallery/Home Gallery Component_742x696 Image 2.png"
                  className="popup-image"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_742x696 Image 2.png",
                      e,
                    )
                  }
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus" />
                  </div>
                </Link>
                <img
                  src="/assets/img/gallery/Home Gallery Component_742x696 Image 2.png"
                  alt="gallery"
                  onClick={(e) =>
                    openModal(
                      "/assets/img/gallery/Home Gallery Component_742x696 Image 2.png",
                      e,
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          style={{
            top: "-25%",
            left: "0%",
          }}
        >
          <img src="/assets/img/shape/line.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movingX d-none d-xl-block"
          style={{
            top: "30%",
            left: "-3%",
          }}
        >
          <img
            className="gmovingX"
            src="/assets/images/Elements/Blue color/Starfish.png"
            alt="shape"
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
      />
    </div>
  );
}

export default GalleryOne;
