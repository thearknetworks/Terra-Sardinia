import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function GalleryInner() {
  const galleryImages = [
    "/assets/img/gallery/Untitled-1_538 x 720 Image 1.png",
    "/assets/img/gallery/Untitled-1_538 x 720 Image 2.png",
    "/assets/img/gallery/Untitled-1_538 x 720 Image 3.png",
    "/assets/img/gallery/Untitled-1_538 x 720 Image 4.png",
    "/assets/img/gallery/Untitled-1_538 x 720 Image 5.png",
    "/assets/img/gallery/Untitled-1_538 x 720 Image 6.png",
    "/assets/img/gallery/Untitled-1_538 x 720 Image 6 copy.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 1.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 2.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 3.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 4.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 5.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 6.png",
    "/assets/img/gallery/Untitled-1_670 x 720 Image 7.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 1.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 2.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 3.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 4.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 5.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 6.png",
    "/assets/img/gallery/Untitled-1_1040 x 720 Image 7.png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 1.png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 2.png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 2 copy.png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 4.png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 5.png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 6 .png",
    "/assets/img/gallery/Untitled-1_1352 x 720 Image 6  copy.png",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalIndex, setModalIndex] = useState(0);

  // Function to open the modal with the selected image
  const openModal = (imageSrc, event) => {
    event.preventDefault(); // Prevent default link behavior
    setModalImage(imageSrc);
    const index = galleryImages.indexOf(imageSrc);
    setModalIndex(index >= 0 ? index : 0);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="overflow-hidden space" id="gallery-sec">
      <div className="container-fuild">
        <div className="title-area mb-30 text-center">
          <span className="sub-title">
            A Taste of Sardenia
          </span>
          <h2 className="sec-title">Discover the Simple Pleasures
        </h2>
          <p className="sec-text"></p>
        </div>
        <div className="row gy-4 gallery-row4">
          {galleryImages.map((imageSrc) => (
            <div className="col-auto" key={imageSrc}>
              <div className="gallery-box style5">
                <div className="gallery-img global-img">
                  <img src={imageSrc} alt="gallery" />
                  <Link
                    to={imageSrc}
                    className="icon-btn popup-image"
                    onClick={(e) => openModal(imageSrc, e)}
                  >
                    <i className="fal fa-magnifying-glass-plus" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
        images={galleryImages}
        initialIndex={modalIndex}
      />
    </div>
  );
}

export default GalleryInner;
