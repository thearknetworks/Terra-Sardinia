import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../Gallery/Modal";

function VillaVerdeDetailsInner() {
  const { room_name, lang } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const currentLang = lang || "en";

  const roomContentBySlug = {
    aquarius: {
      name: "Aquarius",
      header: "Light, Open, and Effortlessly Calm",
      body: "Aquarius Room is designed as a bright and tranquil space where simplicity meets comfort. With its soft natural light and relaxed atmosphere, it offers a quiet retreat within the villa, ideal for guests looking to unwind in a setting that feels both open and intimate. The room overlooks the pool area, bringing a subtle connection to the outdoors while maintaining privacy.",
      secondHeader: "Comfort and Practical Living",
      secondBody:
        "The room accommodates up to two guests, with the option of adding an extra bed when needed, making it suitable for flexible stays. It is equipped with essential comforts and functional details to ensure a smooth and relaxed experience, whether for a short getaway or a longer stay. As with all rooms in Villa Verde, the space is part of a pet-friendly environment and welcomes guests within the villa’s shared and easygoing atmosphere.",
      highlights: [
        {
          name: "Pool View",
          icon: "/assets/img/villaVerde/AQUARIUS%20Pool.png",
        },
        {
          name: "Air Conditioning",
          icon: "/assets/img/villaVerde/AQUARIUS%20AC.png",
        },
        { name: "Wifi", icon: "/assets/img/villaVerde/AQUARIUS%20Wifi.png" },
        { name: "TV", icon: "/assets/img/villaVerde/AQUARIUS%20TV.png" },
        { name: "Safe", icon: "/assets/img/villaVerde/AQUARIUS%20Safe.png" },
        {
          name: "Hair Dryer",
          icon: "/assets/img/villaVerde/AQUARIUS%20Hair%20Dryer.png",
        },
        { name: "Desk", icon: "/assets/img/villaVerde/AQUARIUS%20Desk.png" },
        {
          name: "Shower",
          icon: "/assets/img/villaVerde/AQUARIUS%20Shower.png",
        },
      ],
    },

    aries: {
      name: "Aries",
      header: "Warm, Grounded Energy",
      body: "Aries Room carries a warm and inviting atmosphere, designed to feel both grounded and quietly energizing. With its soft tones and balanced layout, the space creates a sense of ease from the moment you enter. Overlooking the pool, it blends indoor comfort with a subtle connection to the villa’s outdoor life, making it ideal for a relaxed and effortless stay.",
      secondHeader: "Simple Comfort, Thoughtfully Equipped",
      secondBody:
        "Designed for up to two guests, Aries Room offers a comfortable and well-proportioned space with the option of adding an extra bed when needed. The room is equipped with practical amenities that enhance convenience while maintaining a clean, uncluttered feel. As part of Villa Verde, guests also benefit from a welcoming, pet-friendly environment and a shared atmosphere that feels both personal and relaxed.",
      highlights: [
        { name: "Pool View", icon: "/assets/img/villaVerde/ARIES%20Pool.png" },
        {
          name: "Air Conditioning",
          icon: "/assets/img/villaVerde/ARIES%20AC.png",
        },
        { name: "Wifi", icon: "/assets/img/villaVerde/ARIES%20Wifi.png" },
        { name: "TV", icon: "/assets/img/villaVerde/ARIES%20TV.png" },
        { name: "Minibar", icon: "/assets/img/villaVerde/ARIES%20Minibar.png" },
        { name: "Desk", icon: "/assets/img/villaVerde/ARIES%20Desk.png" },
        {
          name: "Hair Dryer",
          icon: "/assets/img/villaVerde/ARIES%20Hair%20Dryer.png",
        },
        { name: "Shower", icon: "/assets/img/villaVerde/ARIES%20Shower.png" },
      ],
    },
    cancer: {
      name: "Cancer",
      header: "Soft, Nurturing Escape",
      body: "Cancer Room is designed as a quiet and comforting retreat, where everything slows down. Overlooking the garden, the space feels naturally calming, surrounded by greenery and soft light. Its intimate size and gentle atmosphere make it ideal for those seeking rest, privacy, and a more grounded connection to the villa’s peaceful surroundings.",
      secondHeader: "Comfort in Simplicity",
      secondBody:
        "Perfect for two guests, Cancer Room offers a cozy and thoughtfully arranged space that prioritizes comfort and ease. Every element is designed to feel familiar and welcoming, with practical amenities that support a relaxed stay. As part of Villa Verde, guests also enjoy a shared, home-like environment that is warm, personal, and pet-friendly.",
      highlights: [
        {
          name: "Garden View",
          icon: "/assets/img/villaVerde/CANCER%20Garden.png",
        },
        {
          name: "Air Conditioning",
          icon: "/assets/img/villaVerde/CANCER%20AC.png",
        },
        { name: "Wifi", icon: "/assets/img/villaVerde/CANCER%20Wifi.png" },
        { name: "TV", icon: "/assets/img/villaVerde/CANCER%20TV.png" },
        {
          name: "Minibar",
          icon: "/assets/img/villaVerde/CANCER%20Minibar.png",
        },
        { name: "Desk", icon: "/assets/img/villaVerde/CANCER%20Desk.png" },
        {
          name: "Hair Dryer",
          icon: "/assets/img/villaVerde/CANCER%20Hair%20Dryer.png",
        },
        { name: "Shower", icon: "/assets/img/villaVerde/CANCER%20Shower.png" },
      ],
    },
    virgo: {
      name: "Virgo",
      header: "Refined & Balanced",
      body: "Virgo Room is defined by clarity, balance, and thoughtful simplicity. Overlooking the garden, it offers a calm and composed atmosphere where every detail feels intentional. The space is designed to feel organized and harmonious, creating a setting that is both relaxing and quietly refined.",
      secondHeader: "Space with Purpose",
      secondBody:
        "Ideal for up to three guests, Virgo Room combines functionality with comfort, offering both a king bed and an additional single bed. The layout is practical yet elegant, making it well-suited for small groups or families. Equipped with essential amenities and part of Villa Verde’s warm, pet-friendly environment, it delivers a stay that feels both structured and effortlessly comfortable.",
      highlights: [
        {
          name: "Garden View",
          icon: "/assets/img/villaVerde/VIRGO%20Garden.png",
        },
        {
          name: "Air Conditioning",
          icon: "/assets/img/villaVerde/VIRGO%20AC.png",
        },
        { name: "Wifi", icon: "/assets/img/villaVerde/VIRGO%20Wifi.png" },
        { name: "TV", icon: "/assets/img/villaVerde/VIRGO%20TV.png" },
        { name: "Minibar", icon: "/assets/img/villaVerde/VIRGO%20Minibar.png" },
        { name: "Safe", icon: "/assets/img/villaVerde/VIRGO%20Safe.png" },
        {
          name: "Hair Dryer",
          icon: "/assets/img/villaVerde/VIRGO%20Hair%20Dryer.png",
        },
        { name: "Shower", icon: "/assets/img/villaVerde/VIRGO%20Shower.png" },
      ],
    },
    sagittarius: {
      name: "Sagittarius",
      header: "Open & Effortless",
      body: "Sagittarius Room is designed to feel open, relaxed, and naturally free. Overlooking the garden, the space carries a light and easy atmosphere, where movement and comfort come together effortlessly. It’s a room that invites you to slow down, unwind, and enjoy a sense of freedom within a calm, natural setting.",
      secondHeader: "Flexible Living Space",
      secondBody:
        "Ideal for up to three guests, Sagittarius Room offers a versatile layout with a king bed and a sofa bed, making it perfect for couples, friends, or small families. The room balances comfort with flexibility, supported by practical amenities that enhance everyday ease. As part of Villa Verde, it also benefits from a warm, welcoming, and pet-friendly environment.",
      highlights: [
        {
          name: "Garden View",
          icon: "/assets/img/villaVerde/SAGITTARIUS%20Garden.png",
        },
        {
          name: "Air Conditioning",
          icon: "/assets/img/villaVerde/SAGITTARIUS%20AC.png",
        },
        {
          name: "Wifi",
          icon: "/assets/img/villaVerde/SAGITTARIUS%20Wifi.png",
        },
        { name: "TV", icon: "/assets/img/villaVerde/SAGITTARIUS%20TV.png" },
        {
          name: "Minibar",
          icon: "/assets/img/villaVerde/SAGITTARIUS%20Minibar.png",
        },
        { name: "Fan", icon: "/assets/img/villaVerde/SAGITTARIUS%20Fan.png" },
        {
          name: "Hair Dryer",
          icon: "/assets/img/villaVerde/SAGITTARIUS%20Hair%20Dryer.png",
        },
        {
          name: "Shower",
          icon: "/assets/img/villaVerde/SAGITTARIUS%20Shower.png",
        },
      ],
    },
    "la-tavola": {
      name: "La Tavola",
      header: "Authentic Home Cooking",
      body: "La Tavola is where Villa Verde comes to life through food. Rooted in Sardinian tradition, this shared dining experience brings guests together around simple, genuine dishes prepared with local ingredients. From fresh seafood to handmade specialties, every meal reflects the flavors of the land and the warmth of a home setting.",
      secondHeader: "A Shared Culinary Experience",
      secondBody:
        "Breakfast is served daily in a relaxed, open setting, tailored to your preferences and designed to start the day slowly and naturally. In the evenings, dinners are available by reservation, offering a fixed menu inspired by Sardinian cuisine, with options for both meat, fish, and vegetarian preferences. More than just a meal, La Tavola is a moment to connect, unwind, and experience the villa as a true home.",
      highlights: [
        {
          name: "Breakfast",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Breakfast.png",
        },
        {
          name: "Dinner",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Dinner.png",
        },
        {
          name: "Sardinian",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Sardinian.png",
        },
        {
          name: "Local",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Local.png",
        },
        {
          name: "Vegetarian",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Vegetarian.png",
        },
        {
          name: "Outdoor",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Outdoor.png",
        },
        {
          name: "Shared Table",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Shared.png",
        },
        {
          name: "Fresh",
          icon: "/assets/img/villaVerde/LA%20TAVOLA%20Fresh.png",
        },
      ],
    },
  };
  const villaVerdeReviews = [
    {
      name: "lizdiscovers",
      rating: "5.0",
      date: "May 2018",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Liz.jpg",
      body: "We had a very pleasant stay with Angela and Didier. The rooms are a good size, clean, and equipped with all the necessary amenities. The breakfast was excellent, with fresh bread and delicious coffee. The B&B is close to the beach; you literally walk around the corner and there you are! Because it was early in the season, we often found the beach to ourselves-heavenly! Angela and Didier also offer the option of staying for dinner. They are excellent cooks, and the meals are delicious. I think they deserve a special recommendation as the best restaurant in Torre Delle Stelle. I loved every minute of our relaxing stay! True hospitality, Angela and Didier, we will definitely be back!",
    },
    {
      name: "Marcel T",
      rating: "5.0",
      date: "October 2018",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Marcel.jpg",
      body: "For someone accustomed to staying in hotels, this B&B was a real relief. From the moment you enter the premises, owners Angela and Didier make you feel at home. The rooms are spacious, clean, and well-kept. Dining with Angela and Didier is an experience in itself. Traditional local food made with fresh, homemade ingredients. Added to this is the priceless atmosphere, which makes you feel at home and enjoying dinner at the kitchen table, literally. A huge thank you to Angela and Didier for your hospitality, company, and laughter. It was a week I will remember for years to come. My recommendation: if you want to go to Sardinia, B&B Villa Verde is the place to stay. Marcel Trupia - Netherlands",
    },
    {
      name: "Pimh83",
      rating: "5.0",
      date: "May 2019",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Pimh.jpg",
      body: "B&B Villa Verde is a very welcoming, beautiful, and cozy place to stay. The owners (a couple) are very friendly and speak several languages (good English, Dutch, and French). They have a beautiful garden with lots of beautiful flowers and a pool. They serve all kinds of dinner, but you can also dine elsewhere. We've heard that everyone stays at B&B because the dinner is so delicious. We only stayed one night, and it was one of the best meals we had in Sardinia. I would recommend this place to anyone visiting the island.",
    },
    {
      name: "Katrinalort63",
      rating: "5.0",
      date: "June 2019",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Katrina.jpg",
      body: "A warm welcome from Angela. The whole place is fantastic, they make you feel like family. Just steps from the beach. We ate at the B&B, fresh tuna and homemade ice cream, delicious. It was lovely to sit at a large table with other nationalities sharing stories of our lives (Google Translate helps). Highly recommended.",
    },
    {
      name: "Massimo Farfarana",
      rating: "5.0",
      date: "August 2019",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Massimo.jpg",
      body: "As soon as you walk through the front door, you know you're in paradise! A beautifully kept and enchanting garden, with a magnificent pool, all surrounded by the constellations: Gemini, Cancer, Virgo, and Sagittarius, which are actually the names of the guest rooms! Angela and Didier are the magnificent owners, who, more than just hosts, are the creators of the pleasure, well-being, and serenity of those who decide to spend a few enchanting days in an enchanting place! Congratulations and thank you.",
    },
    {
      name: "Flavio M",
      rating: "5.0",
      date: "September 2020",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Flavio.jpg",
      body: "I stumbled upon this oasis of kindness and hospitality by chance. The owners, Angela and Didier, are delightful people who immediately made us feel at home. The rooms are comfortable, spotlessly clean, and smell wonderful. The pool is fabulous, and the in-house restaurant, run by the owners, offers high-quality international cuisine. We will definitely be back. Highly recommended; don't miss out. Excellent value for money.",
    },
    {
      name: "Deborah999",
      rating: "5.0",
      date: "June 2021",
      avatar: "/assets/img/villaVerde/Villa%20Verde%20review%20-%20Deborah.jpg",
      body: "I stayed for a week in June with my family and had a wonderful time! The owners are very hospitable and kind. Everything is very well-kept and clean, and there's a beautiful garden. Angela and Dominique are also amazing chefs!! We had dinner with them one evening under the porch in their flower garden, filled with the unique scents of Sardinia. We'll definitely be back.",
    },
  ];

  const roomMediaBySlug = {
    aquarius: {
      topImage:
        "/assets/img/villaVerde/Aquarius%20Gallery%201%20Destination%20Detail-13.png",
      gallery: [
        "/assets/img/villaVerde/Aquarius%20Gallery%202%20Destination%20Detail-13.png",
        "/assets/img/villaVerde/Aquarius%20Gallery%201%20Destination%20Detail-1-12.png",
        "/assets/img/villaVerde/Aquarius%20Gallery%202%20Destination%20Detail-1-12.png",
      ],
    },
    aries: {
      topImage:
        "/assets/img/villaVerde/Aries%20Gallery%201%20Destination%20Detail-14.png",
      gallery: [
        "/assets/img/villaVerde/Aries%20Gallery%202%20Destination%20Detail-14.png",
        "/assets/img/villaVerde/Aries%20Gallery%201%20Destination%20Detail-1-13.png",
        "/assets/img/villaVerde/Aries%20Gallery%202%20Destination%20Detail-1-13.png",
      ],
    },
    cancer: {
      topImage:
        "/assets/img/villaVerde/Cancer%20Gallery%201%20Destination%20Detail-15.png",
      gallery: [
        "/assets/img/villaVerde/Cancer%20Gallery%202%20Destination%20Detail-15.png",
        "/assets/img/villaVerde/Cancer%20Gallery%201%20Destination%20Detail-1-14.png",
        "/assets/img/villaVerde/Cancer%20Gallery%202%20Destination%20Detail-1-14.png",
      ],
    },
    virgo: {
      topImage:
        "/assets/img/villaVerde/Virgo%20Gallery%201%20Destination%20Detail-16.png",
      gallery: [
        "/assets/img/villaVerde/Virgo%20Gallery%202%20Destination%20Detail-16.png",
        "/assets/img/villaVerde/Virgo%20Gallery%201%20Destination%20Detail-1-15.png",
        "/assets/img/villaVerde/Virgo%20Gallery%202%20Destination%20Detail-1-15.png",
      ],
    },
    sagittarius: {
      topImage:
        "/assets/img/villaVerde/Sagittarius%20Gallery%201%20Destination%20Detail-17.png",
      gallery: [
        "/assets/img/villaVerde/Sagittarius%20Gallery%202%20Destination%20Detail-17.png",
        "/assets/img/villaVerde/Sagittarius%20Gallery%201%20Destination%20Detail-1-16.png",
        "/assets/img/villaVerde/Sagittarius%20Gallery%202%20Destination%20Detail-1-16.png",
      ],
    },
    "la-tavola": {
      topImage:
        "/assets/img/villaVerde/La%20Tavola%20Gallery%201%20Destination%20Detail-18.png",
      gallery: [
        "/assets/img/villaVerde/La%20Tavola%20Gallery%202%20Destination%20Detail-18.png",
        "/assets/img/villaVerde/La%20Tavola%20Gallery%201%20Destination%20Detail-1-17.png",
        "/assets/img/villaVerde/La%20Tavola%20Gallery%202%20Destination%20Detail-1-17.png",
      ],
    },
  };
  const selectedRoomMedia =
    roomMediaBySlug[room_name] || roomMediaBySlug.aquarius;
  const selectedRoomContent =
    roomContentBySlug[room_name] || roomContentBySlug.aquarius;

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
    <section className="space">
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img global-img">
                <img src={selectedRoomMedia.topImage} alt="" />
              </div>
              <div className="page-content d-block">
                <h2 className="box-title mt-20">
                  {selectedRoomContent.header}
                </h2>
                <p className="blog-text mb-30">{selectedRoomContent.body}</p>
                <h4 className="">{selectedRoomContent.secondHeader}</h4>
                <p className="blog-text mb-35">
                  {selectedRoomContent.secondBody}
                </p>
                <h2 className="box-title">Highlights</h2>
                <ul className="resort-grid-list">
                  {selectedRoomContent.highlights.map((highlight) => (
                    <li key={highlight.name}>
                      <div className="resort-grid-list-icon">
                        <img src={highlight.icon} alt={highlight.name} />
                      </div>
                      <div className="resort-grid-list-details">
                        <h4 className="resort-grid-list-title">
                          {highlight.name}
                        </h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="destination-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                <div className="row gy-4 gallery-row filter-active">
                  {selectedRoomMedia.gallery.map((imagePath, index) => (
                    <div className="col-xxl-auto filter-item" key={index}>
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img src={imagePath} alt="gallery" />
                          <Link
                            to={imagePath}
                            className="icon-btn popup-image"
                            onClick={(e) => openModal(imagePath, e)}
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="th-comments-wrap style2 ">
                <h2 className="blog-inner-title h4">
                  Reviews ({villaVerdeReviews.length})
                </h2>
                <ul className="comment-list">
                  {villaVerdeReviews.map((review) => (
                    <li className="th-comment-item" key={review.name}>
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="comment-content">
                          <h3 className="name">{review.name}</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">{review.date}</span>
                            <span className="comment-review">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <span className="ms-2">{review.rating}</span>
                            </span>
                          </div>
                          <p className="text">{review.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>{" "}
              {/* Comment end */}
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget  ">
                <h3 className="widget_title">Villa Verde</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-verde/aquarius`}>
                        <img
                          src="/assets/img/villaVerde/Aquarius.png"
                          alt="Aquarius Room"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-verde/aquarius`}
                        >
                          Aquarius Room
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>20 m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-verde/aries`}>
                        <img
                          src="/assets/img/villaVerde/Aries.png"
                          alt="Aries Room"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-verde/aries`}
                        >
                          Aries Room
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>21 m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-verde/cancer`}>
                        <img
                          src="/assets/img/villaVerde/Cancer.png"
                          alt="Cancer Room"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-verde/cancer`}
                        >
                          Cancer Room
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>15 m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-verde/virgo`}>
                        <img
                          src="/assets/img/villaVerde/Virgo.png"
                          alt="Virgo Room"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-verde/virgo`}
                        >
                          Virgo Room
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>17 m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-verde/sagittarius`}>
                        <img
                          src="/assets/img/villaVerde/Sagittarius.png"
                          alt="Sagittarius Room"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-verde/sagittarius`}
                        >
                          Sagittarius Room
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>20 m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-verde/la-tavola`}>
                        <img
                          src="/assets/img/villaVerde/La%20Tavola.png"
                          alt="La Tavola"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-verde/la-tavola`}
                        >
                          La Tavola
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>Breakfast &amp; Dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="widget widget_offer need-help-widget"
                style={{
                  background: "url(/assets/img/destination/need_help.png)",
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
                      to={`/${currentLang}/contact`}
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
          style={{ bottom: "35%", right: "-12%" }}
        >
          <img src="/assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{ bottom: "31%", right: "-8%" }}
        >
          <img src="/assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          style={{ bottom: "33%", right: "-5%" }}
        >
          <img src="/assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
      />
    </section>
  );
}

export default VillaVerdeDetailsInner;
