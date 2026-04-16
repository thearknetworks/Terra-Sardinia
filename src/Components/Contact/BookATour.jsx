import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function BookATour() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitted(false);

    const trimmedEmail = email.trim();
    if (!validateEmail(trimmedEmail)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_email: "admin@thearknetworks.com",
          to_email: "info.terrasardinia@gmail.com",
          subject: "New Contact Request",
          user_email: trimmedEmail,
          user_message: message.trim(),
          body: `A new guest has reached out through the website.

Contact Email: ${trimmedEmail}
Message: ${message.trim()}

They are interested in planning a stay.
Please follow up directly to assist them.

Regards, 
Terra Sardenia`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setSubmitError(
        "We could not send your request right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="space-extra2-top space-extra2-bottom"
      style={{
        background: "url(/assets/img/bg/video_bg_1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row flex-row-reverse justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="video-box1">
              {/* <button
                className="play-btn style2 popup-video"
                onClick={() => setModalIsOpen(true)}
              >
                <i className="fa-sharp fa-solid fa-play" />
              </button> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <form
                className="contact-form style2 ajax-contact"
                onSubmit={handleSubmit}
              >
                <h3 className="sec-title mb-30 text">Get in Touch</h3>

                <div className="row">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name3"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                    <img src="assets/img/icon/user.svg" alt="" />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email3"
                      id="email3"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (emailError) {
                          setEmailError("");
                        }
                      }}
                      required
                    />
                    <img src="assets/img/icon/mail.svg" alt="" />
                    {emailError && (
                      <p className="text-danger mb-0 mt-2">{emailError}</p>
                    )}
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    />
                    <img src="assets/img/icon/chat.svg" alt="" />
                  </div>
                  <div className="form-btn col-12 mt-24">
                    <button type="submit" className="th-btn style3">
                      {isSubmitting ? "Sending..." : "Send message"}
                      <img src="/assets/img/icon/plane.svg" alt="" />
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3">
                  {!emailError && submitError && (
                    <span className="text-danger">{submitError}</span>
                  )}
                  {!emailError && !submitError && isSubmitted && (
                    <span className="text-success">
                      Request sent successfully.
                    </span>
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Popup"
        className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        <button className="close-btn" onClick={() => setModalIsOpen(false)}>
          &times;
        </button>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/cQfIUPw72Dk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default BookATour;
