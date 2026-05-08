import React, { useEffect, useMemo, useState } from "react";

const Modal = ({ isOpen, closeModal, imageSrc, images, initialIndex = 0 }) => {
  const [visible, setVisible] = useState(false);
  const imageList = useMemo(() => {
    if (Array.isArray(images) && images.length) {
      return images;
    }
    return imageSrc ? [imageSrc] : [];
  }, [images, imageSrc]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Handle smooth opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (!imageList.length) {
      return;
    }

    const clampedIndex = Math.min(
      Math.max(typeof initialIndex === "number" ? initialIndex : 0, 0),
      imageList.length - 1,
    );
    setActiveIndex(clampedIndex);
  }, [isOpen, imageList, initialIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (imageList.length <= 1) {
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (current) => (current - 1 + imageList.length) % imageList.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % imageList.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal, imageList.length]);

  if (!isOpen) return null; // Don't render if it's closed
  const currentSrc = imageList[activeIndex] || imageSrc;
  const hasMultiple = imageList.length > 1;

  const goPrev = (event) => {
    event.stopPropagation();
    setActiveIndex(
      (current) => (current - 1 + imageList.length) % imageList.length,
    );
  };

  const goNext = (event) => {
    event.stopPropagation();
    setActiveIndex((current) => (current + 1) % imageList.length);
  };

  return (
    <div
      className={`modal-overlay ${visible ? "show" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`modal-content ${visible ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={closeModal}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.20)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            border: "none",
          }}
        >
          <span style={{ transform: "translateY(-4px)", lineHeight: 1 }}>
            ×
          </span>
        </button>
        {hasMultiple && (
          <>
            <button
              type="button"
              className="modal-nav modal-nav--prev"
              onClick={goPrev}
              aria-label="Previous image"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.20)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                border: "none",
              }}
            >
              <i className="fa-light fa-chevron-left" />
            </button>
            <button
              type="button"
              className="modal-nav modal-nav--next"
              onClick={goNext}
              aria-label="Next image"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.20)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                border: "none",
              }}
            >
              <i className="fa-light fa-chevron-right" />
            </button>
          </>
        )}
        <img src={currentSrc} alt="Modal content" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
