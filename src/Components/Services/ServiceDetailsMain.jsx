import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../Gallery/Modal";
import allServices from "../data/data-service.json";
import "../Destination/staggeredGallery.css";

function ServiceDetailsMain({ service }) {
  const { lang = "en", slug: routeSlug, id: routeId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalIndex, setModalIndex] = useState(0);

  const galleryImages = service.gallery || [];
  const details = service.details || {};
  const hasPhone = Boolean(details.phone);
  const hasWhatsapp = Boolean(details.whatsapp);
  const hasEmail = Boolean(details.email);

  const contactActions = useMemo(
    () =>
      [
        details.locationUrl
          ? { key: "location", label: "Location", href: details.locationUrl }
          : null,
        details.website
          ? { key: "website", label: "Website", href: details.website }
          : null,
        details.reviewsUrl
          ? { key: "reviews", label: "Reviews", href: details.reviewsUrl }
          : null,
      ].filter(Boolean),
    [details],
  );

  const openModal = (imageSrc, event) => {
    event.preventDefault();
    setModalImage(imageSrc);
    const index = galleryImages.indexOf(imageSrc);
    setModalIndex(index >= 0 ? index : 0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const reviews = service.reviews || [];
  const galleryRowPairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < galleryImages.length; i += 2) {
      pairs.push(galleryImages.slice(i, i + 2));
    }
    return pairs;
  }, [galleryImages]);

  const summaryChecklistLayout = useMemo(() => {
    const lines = service.summaryChecklist || [];
    if (!lines.length) return { mode: "empty" };

    const pairs = lines.map((line) => {
      const emParts = line.split(/\s+[—–]\s+/);
      if (emParts.length === 2) {
        return [emParts[0].trim(), emParts[1].trim()];
      }
      const arrowParts = line.split(/\s*->\s*/);
      if (arrowParts.length === 2) {
        return [arrowParts[0].trim(), arrowParts[1].trim()];
      }
      return null;
    });

    if (pairs.every(Boolean)) {
      return {
        mode: "pairs",
        labels: pairs.map((p) => p[0]),
        values: pairs.map((p) => p[1]),
      };
    }

    return { mode: "plain", lines };
  }, [service.summaryChecklist]);

  const renderGalleryBox = (src) => (
    <div className="gallery-box style3 staggered-gallery-box">
      <div className="gallery-img global-img">
        <img src={src} alt="Gallery" />
        <Link
          to={src}
          className="icon-btn popup-image"
          onClick={(e) => openModal(src, e)}
        >
          <i className="fal fa-magnifying-glass-plus" />
        </Link>
      </div>
    </div>
  );

  const otherServicesSidebar = useMemo(() => {
    const isSameAsCurrent = (s) => {
      if (routeSlug != null && routeSlug !== "") {
        return s.slug === routeSlug;
      }
      if (routeId != null && routeId !== "") {
        const n = parseInt(routeId, 10);
        if (!Number.isNaN(n)) return s.id === n;
      }
      return s.slug === service.slug || s.id === service.id;
    };

    const others = allServices.filter((s) => !isSameAsCurrent(s));

    const mapped = others.slice(0, 3).map((s) => ({
      placeholder: false,
      slug: s.slug,
      name: s.listTitle,
      typeLabel: s.categoryLabel,
      image: s.otherServicesImage || s.cardImage,
      isCurrent: false,
    }));

    const out = [...mapped];
    while (out.length < 3) {
      out.push({
        placeholder: true,
        name: "Coming soon",
        typeLabel: "",
        image: null,
        isCurrent: false,
      });
    }
    return out.slice(0, 3);
  }, [routeSlug, routeId, service.slug, service.id]);

  return (
    <section className="space">
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img">
                <img src={service.headerImg || service.bannerImg} alt="" />
              </div>
              <div className="page-content d-block">
                <div
                  className="page-meta mt-50 mb-45 d-flex align-items-center"
                  style={{ gap: "8px" }}
                >
                  <Link className="page-tag mr-5" to={`/${lang}/service`}>
                    {service.categoryLabel}
                  </Link>
                  <span className="ratting">
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>{service.rating.toFixed(1)}</span>
                  </span>
                </div>
                <h2 className="box-title">{service.headerTitle}</h2>
                {(service.bodyParagraphs || []).map((para, index) => (
                  <p
                    key={`body-${index}`}
                    className={`blog-text ${index === 0 ? "mb-30" : "mb-50"}`}
                  >
                    {para}
                  </p>
                ))}
                {service.innerImage ? (
                  <div className="service-inner-img mb-40">
                    <img src={service.innerImage} alt="" />
                  </div>
                ) : null}
                <h2 className="box-title">{service.summaryTitle}</h2>
                <p className="blog-text mb-30">{service.summaryBody}</p>
                {summaryChecklistLayout.mode === "pairs" ? (
                  <div className="destination-checklist mb-40">
                    <div className="checklist style2">
                      <ul>
                        {summaryChecklistLayout.labels.map((label, index) => (
                          <li key={`sum-label-${index}`}>{label}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        {summaryChecklistLayout.values.map((value, index) => (
                          <li key={`sum-val-${index}`}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : summaryChecklistLayout.mode === "plain" ? (
                  <div className="checklist mb-40">
                    <ul>
                      {summaryChecklistLayout.lines.map((line, index) => (
                        <li key={`check-${index}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {service.quote ? (
                  <blockquote className="wp-block-quote service-detail-quote">
                    <p className="fst-italic mb-0">{service.quote}</p>
                    {service.quoteAuthor ? (
                      <cite>{service.quoteAuthor}</cite>
                    ) : null}
                  </blockquote>
                ) : null}
                {service.supportingBody ? (
                  <p className="blog-text mb-40">{service.supportingBody}</p>
                ) : null}
                <h2 className="box-title">{service.experienceTitle}</h2>
                <p className="blog-text mb-40">{service.experienceBody}</p>
                <h2 className="box-title">Highlights</h2>
                <div className="checklist mb-40">
                  <ul>
                    {(service.highlights || []).map((line, index) => (
                      <li key={`hl-${index}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {galleryImages.length ? (
                <div className="staggered-gallery-wrapper">
                  <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                  {galleryRowPairs.map((pair, rowIndex) => {
                    const rowKey = `staggered-gallery-row-${rowIndex}-${pair[0]}`;
                    if (pair.length === 1) {
                      return (
                        <div
                          className="row staggered-gallery-row g-4 align-items-stretch"
                          key={rowKey}
                        >
                          <div className="col-12 filter-item">
                            <div className="staggered-gallery-item">
                              {renderGalleryBox(pair[0])}
                            </div>
                          </div>
                        </div>
                      );
                    }
                    const [imgA, imgB] = pair;
                    if (rowIndex % 2 === 0) {
                      return (
                        <div
                          className="row staggered-gallery-row g-4 align-items-stretch"
                          key={rowKey}
                        >
                          <div className="col-12 col-lg-7 filter-item">
                            <div className="staggered-gallery-item h-100">
                              {renderGalleryBox(imgA)}
                            </div>
                          </div>
                          <div className="col-12 col-lg-5 filter-item">
                            <div className="staggered-gallery-item h-100">
                              {renderGalleryBox(imgB)}
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        className="row staggered-gallery-row g-4 align-items-stretch"
                        key={rowKey}
                      >
                        <div className="col-12 col-lg-5 filter-item">
                          <div className="staggered-gallery-item h-100">
                            {renderGalleryBox(imgB)}
                          </div>
                        </div>
                        <div className="col-12 col-lg-7 filter-item">
                          <div className="staggered-gallery-item h-100">
                            {renderGalleryBox(imgA)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {reviews.length ? (
                <div className="th-comments-wrap style2 destination-detail-reviews">
                  <h2 className="blog-inner-title h4">
                    Reviews ({reviews.length})
                  </h2>
                  <ul className="comment-list">
                    {reviews.map((review, index) => (
                      <li
                        className="th-comment-item"
                        key={`${review.name}-${index}`}
                      >
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img src={review.avatar} alt={review.name} />
                          </div>
                          <div className="comment-content">
                            <h3 className="name">{review.name}</h3>
                            <div className="commented-wrapp">
                              <span className="commented-on">
                                {review.date}
                              </span>
                              <span className="comment-review">
                                {Array.from({ length: review.stars || 5 }).map(
                                  (_, starIndex) => (
                                    <i
                                      key={`star-${starIndex}`}
                                      className="fa-solid fa-star"
                                    />
                                  ),
                                )}
                              </span>
                            </div>
                            <p
                              className="text"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {review.text}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget">
                <h3 className="widget_title">Services</h3>
                <div className="recent-post-wrap service-sidebar-other-wrap">
                  {otherServicesSidebar.map((item, index) => {
                    const isPlaceholder = Boolean(item.placeholder);
                    const isCurrent = Boolean(item.isCurrent);
                    const to =
                      !isPlaceholder && item.slug && !isCurrent
                        ? `/${lang}/services/${item.slug}`
                        : null;
                    return (
                      <div
                        className={`recent-post service-sidebar-other${isCurrent ? " service-sidebar-other--current" : ""}`}
                        key={
                          item.slug
                            ? `${item.slug}-${index}`
                            : `placeholder-${index}`
                        }
                      >
                        <div className="media-img">
                          {isPlaceholder || !item.image ? (
                            <div
                              className="service-sidebar-other__thumb-ph"
                              aria-hidden
                            />
                          ) : to ? (
                            <Link to={to}>
                              <img src={item.image} alt="" />
                            </Link>
                          ) : (
                            <img src={item.image} alt="" />
                          )}
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            {to ? (
                              <Link className="text-inherit" to={to}>
                                {item.name}
                              </Link>
                            ) : (
                              <span
                                className={
                                  isCurrent
                                    ? "text-inherit"
                                    : "text-inherit service-sidebar-other__name--muted"
                                }
                              >
                                {item.name}
                              </span>
                            )}
                          </h4>
                          {item.typeLabel ? (
                            <span className="destination-subtitle service-sidebar-other__type">
                              {item.typeLabel}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="widget">
                <h3 className="widget_title">Details</h3>
                <div className="destination-details-card destination-details-card--sidebar">
                  {hasPhone || hasWhatsapp || hasEmail ? (
                    <div className="destination-contact-fields">
                      {hasPhone ? (
                        <a
                          className="destination-contact-field"
                          href={`tel:${details.phone.replace(/\s+/g, "")}`}
                        >
                          <span className="field-label">Phone number</span>
                          <span className="field-value">{details.phone}</span>
                        </a>
                      ) : null}
                      {hasWhatsapp ? (
                        <a
                          className="destination-contact-field"
                          href={`https://wa.me/${details.whatsapp.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="field-label">WhatsApp</span>
                          <span className="field-value">
                            {details.whatsapp}
                          </span>
                        </a>
                      ) : null}
                      {hasEmail ? (
                        <a
                          className="destination-contact-field"
                          href={`mailto:${details.email}`}
                        >
                          <span className="field-label">Email address</span>
                          <span className="field-value">{details.email}</span>
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                  {contactActions.length ? (
                    <div className="destination-action-grid">
                      {contactActions.map((action, index) => (
                        <a
                          key={action.key}
                          href={action.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`th-btn th-icon destination-action-btn ${
                            contactActions.length % 2 === 1 &&
                            index === contactActions.length - 1
                              ? "full-width"
                              : ""
                          }`}
                        >
                          {action.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                  {/* {details.locationLabel ? (
                    <div className="destination-distance-row">
                      <span className="destination-distance-icon">
                        <img
                          src="/assets/img/destination/car_icon.png"
                          alt=""
                        />
                      </span>
                      <span>{details.locationLabel}</span>
                    </div>
                  ) : null} */}
                </div>
              </div>

              <div
                className="widget widget_offer need-help-widget"
                style={{
                  background: `linear-gradient(#111d487b, #111d487b), url(/assets/img/destination/need_help.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="offer-banner">
                  <div className="offer">
                    <h6 className="box-title">Need Help? We’re here for you</h6>
                    <div className="banner-logo">
                      <img
                        src="/assets/images/logo/TerraSardiniaWhiteLogo.png"
                        alt="Terra Sardinia"
                      />
                    </div>
                    <Link
                      to={`/${lang}/contact`}
                      className="th-btn style2 th-icon"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          style={{ bottom: "35%", right: "-12%", scale: "0.4" }}
        >
          <img
            src="/assets/images/Elements/Blue color/Shrimp.png"
            alt="shape"
          />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{ bottom: "31%", right: "-8%" }}
        >
          <img src="/assets/images/Elements/Blue color/Coral.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          style={{ bottom: "33%", right: "-5%", scale: "0.5" }}
        >
          <img src="/assets/images/Elements/Blue color/Fish.png" alt="shape" />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
        images={galleryImages}
        initialIndex={modalIndex}
      />
    </section>
  );
}

export default ServiceDetailsMain;
