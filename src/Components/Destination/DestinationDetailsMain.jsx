import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Posts from "../data/data-destination.json";
import Modal from "../Gallery/Modal";

const NEARBY_DESTINATIONS = [
  {
    slug: "genne-mari",
    title: "Genn’e Mari",
    subtitle: "Crystal Waters",
    image: "/assets/img/destination/genne-mari-cover.png",
  },
  {
    slug: "canne-sisa",
    title: "Cann’e Sisa",
    subtitle: "Quiet Shores",
    image: "/assets/img/destination/canne-sisa-cover.png",
  },
  {
    slug: "porto-giunco",
    title: "Porto Giunco",
    subtitle: "Iconic Beach",
    image: "/assets/img/destination/porto-giunco-cover.png",
  },
  {
    slug: "cala-delfino",
    title: "Cala Delfino",
    subtitle: "Hidden Cove",
    image: "/assets/img/destination/cala-delfino-cover.png",
  },
  {
    slug: "cagliari",
    title: "Cagliari",
    subtitle: "Historic City",
    image: "/assets/img/destination/cagliari-cover.png",
  },
  {
    slug: "saint-remy",
    title: "Saint Remy",
    subtitle: "Historic Bastion",
    image: "/assets/img/destination/saint-remy-cover.png",
  },
  {
    slug: "torre-delle-stelle-tower",
    title: "The Tower",
    subtitle: "Coastal Landmark",
    image: "/assets/img/destination/torre-delle-stelle-tower-cover.png",
  },
  {
    slug: "andycoc",
    title: "Andycoc",
    subtitle: "Beach Dining",
    image: "/assets/img/destination/andycoc-cover.png",
  },
  {
    slug: "aquarium",
    title: "Aquarium",
    subtitle: "Garden Dining",
    image: "/assets/img/destination/aquarium-cover.png",
  },
  {
    slug: "mosaico",
    title: "Mosaico",
    subtitle: "Refined Dining",
    image: "/assets/img/destination/mosaico-cover.png",
  },
  {
    slug: "istellas-club",
    title: "Istellas Club",
    subtitle: "Beach Club",
    image: "/assets/img/destination/istellas-club-cover.png",
  },
  {
    slug: "centro-palmira",
    title: "Palmira",
    subtitle: "Local Hub",
    image: "/assets/img/destination/centro-palmira-cover.png",
  },
  {
    slug: "cafe-do-mar",
    title: "Café do Mar",
    subtitle: "Sunset Spot",
    image: "/assets/img/destination/cafe-do-mar-cover.png",
  },
];

const assetPath = (filename) =>
  `/assets/img/destination/${encodeURIComponent(filename)}`;

const DESTINATION_DETAILS_BY_SLUG = {
  mosaico: {
    name: "Mosaico",
    slug: "mosaico",
    category: "Dining",
    rating: 4.8,
    keywords: ["Restaurant", "Wine", "Seafood"],
    headerTitle: "Crafted flavors in a setting to remember",
    bodyText:
      "Mosaico blends traditional Sardinian flavors with contemporary Italian techniques, creating a dining experience that feels both authentic and elevated. The menu highlights locally sourced ingredients, including vegetables grown in the restaurant’s own garden, bringing freshness and seasonality to every dish. With a strong focus on sustainability and partnerships with local producers, Mosaico offers more than just food, it delivers a thoughtful and immersive culinary experience in a warm, refined atmosphere.",
    contact: {
      distance: "Around a 3 min drive from you",
      phone: "+39 320 075 7855",
      email: "info@aquariumsardinia.com",
      website: "https://www.aquariumsardinia.com/mosaico/",
      menu: "https://www.aquariumsardinia.com/mosaico/menu",
      map: "https://maps.app.goo.gl/kEmQ1oAyAbWb1dkG9",
      reviews:
        "https://www.google.com/search?sca_esv=2f50148802d04860&sxsrf=ANbL-n5BsYDPWIj7RPHWb6m0tujfY7wF1g:1775062208706&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYied5U-puZJdCD22Kon7yHP5dwl1PdpZtPxANSnV2ghtEkDMuDE7ce2P5aT8VYBYzsF2Tu0UubDdRUy2qGpUf2Ps_pSQzQqXRMKEKRjjZdXynluZQ%3D%3D&q=Ristorante+Mosaico+by+Aquarium+Reviews&sa=X&ved=2ahUKEwiJup2Djs2TAxXhKvsDHb0HLGIQ0bkNegQIIhAF&biw=1920&bih=945&dpr=1",
    },
    images: {
      image1: assetPath("Mosaico - Image 1 Destination Detail.png"),
      image2: assetPath("Mosaico - Image 2 Destination Detail.png"),
      gallery: [
        assetPath("Mosaico - Gallery 1 Destination Detail.png"),
        assetPath("Mosaico - Gallery 2 Destination Detail.png"),
        assetPath("Mosaico - Gallery 1 Destination Detail-1.png"),
        assetPath("Mosaico - Gallery 2 Destination Detail-1.png"),
      ],
    },
    highlights: [
      "Locally sourced ingredients, including produce from the restaurant’s own garden",
      "Contemporary interpretation of Sardinian and Italian cuisine",
      "Elegant yet relaxed atmosphere, ideal for both casual evenings and special occasions",
      "Strong focus on sustainability and collaboration with local producers",
      "Wide menu offering including seafood, meat, and vegetarian-friendly options",
      "Full-service dining experience with terrace seating, reservations, and curated drinks selection",
    ],
    reviews: [
      {
        name: "Alaska Young",
        date: "4 months ago",
        stars: 5,
        text: "I found this restaurant while passing through Torre delle Stelle and found it particularly pleasant in every way. First and foremost, the elegant and romantic atmosphere. I was also lucky enough to catch live music on the evening! I found the service very satisfactory; the staff are very attentive and knowledgeable. The food is exquisite; you can find fabulous fish and meat dishes, as well as a couple of vegetarian options. What can I say? I absolutely recommend it!",
        avatar: assetPath("Mosaico - Alaska.png"),
      },
      {
        name: "Doc Malik",
        date: "7 months ago",
        stars: 5,
        text: "This is our second time in 2 weeks. What a gem of a place, delicious food, beautiful setting and one of the tastiest desserts I've ever had (Rocher). Make sure to come on a Thursday when there will be live music. Can't wait to come back next year.",
        avatar: assetPath("Mosaico - Doc.png"),
      },
      {
        name: "Karla Fagell",
        date: "1 year ago",
        stars: 5,
        text: "Amazing environment, both the garden and the restaurant! The food was really delicious and we enjoyed the special pannacotta.",
        avatar: assetPath("Mosaico - Karla.png"),
      },
      {
        name: "Nikki Estrada Yoga",
        date: "1 year ago",
        stars: 5,
        text: "Mosaico was hands down the BEST meal we had in all of Sardinia. So fresh, beautiful presentation and incredible flavors. The staff was above and beyond, as was the atmosphere and setting. We come from the Bay Area which is a huge foodie location and Mosaico didn't disappoint. Top notch across the board- you won't be disappointed.",
        avatar: assetPath("Mosaico - Nikki.png"),
      },
      {
        name: "Sam Zawadzki",
        date: "3 months ago",
        stars: 5,
        text: "Great service and a relaxed setting is so important for me when eating out. 5 stars the perfect ambiance to really enjoy the outstanding food. Every bite perfection. We’re excited to work our way through everything on the menu in following visits.",
        avatar: assetPath("Mosaico - Sam Z.png"),
      },
    ],
  },
  "genne-mari": {
    name: "Genn’e Mari Beach",
    slug: "genne-mari",
    category: "Beaches",
    rating: 4.5,
    keywords: ["Beach", "Relaxation", "Nature"],
    headerTitle: "Where the coast feels untouched",
    bodyText:
      "Genn’e Mari is one of Torre delle Stelle’s most serene coastal escapes, known for its soft golden sand and calm, crystal-clear waters. The beach stretches gently into the sea, creating a safe and inviting environment for swimming, sunbathing, and long, unhurried days by the shore. Framed by low dunes and natural rock formations, it offers a quieter alternative to Sardinia’s more crowded beaches while still remaining easily accessible.\n\nBeyond its shoreline, the surrounding landscape invites exploration, with scenic paths and nearby viewpoints overlooking the Mediterranean. Just minutes away, visitors will find local restaurants and services within Torre delle Stelle, along with access to nearby destinations such as Cann’e Sisa, Solanas, and Villasimius. Whether for a morning swim or a full day by the sea, Genn’e Mari captures the essence of Sardinia’s coastal beauty.",
    contact: {
      distance: "Around a 3 min drive from you",
      phone: "Not Available",
      email: "Not Available",
      website: "",
      menu: "",
      map: "https://maps.app.goo.gl/9pCFu4ggRTVDjtE26",
      reviews:
        "https://www.google.com/search?sa=X&sca_esv=8d67f07cd29c129e&sxsrf=ANbL-n4BJNphlw-Vv8fcNE5-js7ey8j5hw:1775068884182&q=Spiaggia+di+Genn%27e+Mari&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWc6OZfMHsIwn-62MlRZXQfnE-_iWn3xz3pERZECg6t9SVxEzMc6TSJhiMXrH84TQ2OCi3HWsE3QQN3s6tELAyR6CTPqpAMbcGm_I_x_JaGYeRDdjaA%3D%3D&ved=2ahUKEwiinKzyps2TAxXULPsDHamYJWEQmJ0LegQIIhAA&biw=1920&bih=945&dpr=1",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail.png"),
      image2: assetPath("Image 2 Destination Detail.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail.png"),
        assetPath("Gallery 2 Destination Detail.png"),
        assetPath("Gallery 1 Destination Detail-1.png"),
        assetPath("Gallery 2 Destination Detail-1.png"),
      ],
    },
    highlights: [
      "Wide stretch of golden sand with calm, shallow waters ideal for swimming",
      "Peaceful atmosphere, less crowded than many nearby beaches",
      "Safe and family-friendly environment with gentle sea conditions",
      "Natural setting framed by dunes and rocky coastal formations",
      "Close proximity to Torre delle Stelle’s restaurants and local services",
      "Easy access to nearby beaches and scenic coastal viewpoints",
    ],
    reviews: [
      {
        name: "Radu Jitea",
        date: "6 months ago",
        stars: 5,
        text: "Very local beach vibes. Lovely sand and very gradual sea slope. Gets less sun in the evening compared with the other beach close-by, Cann’e Sisa. Local roads are a bit tight and the one-way driving is not always followed. A close-by shop is handy if you want to restock on your way from the beach. Free parking is available but the terrain is very uneven.",
        avatar: assetPath("GennGÇÖe Mari Beach - Radu.png"),
      },
      {
        name: "Franziska Meyer",
        date: "3 years ago",
        stars: 5,
        text: "Crystal-clear water and a very natural not so touristic beach! We had a little house nearby and we were so grateful to have this beach right in Front! The water is turquise and you can even snorkel as there are some fish. At the weekend the beach is very crowed but within the weak its basically empty! We took advantage of the mornings when there was no one. I loved that the nature is naturally here and no big hotels or villas at the front. Nature at it's best here!! I highly recommend visit this beach!",
        avatar: assetPath("GennGÇÖe Mari Beach - Franziska.png"),
      },
      {
        name: "NS",
        date: "1 year ago",
        stars: 5,
        text: "The best beach of the south Sardinia. Kids friendly as it is shallow enough. Palm Beach cafe on the site has affordable prices, friendly staff, clean toilets. The are plenty of water activities to rent",
        avatar: assetPath("GennGÇÖe Mari Beach - NS.png"),
      },
      {
        name: "Dragan Gavrilov",
        date: "8 months ago",
        stars: 5,
        text: "Sandy, long and wide beach. Color of the sea is unbelievable!",
        avatar: assetPath("GennGÇÖe Mari Beach - Dragan.png"),
      },
      {
        name: "Bianca Sansotta",
        date: "5 years ago",
        stars: 5,
        text: "Amazing Little beach with clear water and white sand!!Not too crowded and very nice local people .",
        avatar: assetPath("GennGÇÖe Mari Beach - Bianca.png"),
      },
    ],
  },
  "canne-sisa": {
    name: "Cann’e Sisa Beach",
    slug: "canne-sisa",
    category: "Beaches",
    rating: 4.3,
    keywords: ["Beach", "Relaxation", "Nature"],
    headerTitle: "A shoreline full of energy and light",
    bodyText:
      "Cann’e Sisa Beach is one of the most dynamic coastal spots in Torre delle Stelle, known for its long stretch of pale sand and vibrant turquoise waters. Set along the southern coastline of Sardinia, the beach combines natural beauty with a lively atmosphere, making it ideal for both relaxation and activity.\n\nIts shallow seabed and clear waters create excellent conditions for swimming, snorkeling, and water-based activities, while the surrounding Mediterranean landscape adds depth and character to the setting. Visitors will also find beach services, nearby restaurants, and rental options for sunbeds and pedal boats, allowing for a full-day experience by the sea. Whether for a quiet swim or a more active beach day, Cann’e Sisa offers a balanced and engaging coastal experience.",
    contact: {
      distance: "Around a 5 min drive from you",
      phone: "Not Available",
      email: "Not Available",
      website: "",
      menu: "",
      map: "https://maps.app.goo.gl/CoAwkyvve6d6nmy86",
      reviews:
        "https://www.google.com/maps/place/Spiaggia+di+Cann%E2%80%99e+Sisa/@39.1566942,9.372863,14z/data=!4m8!3m7!1s0x12e0c5a30c7a151d:0x761b555902b34348!8m2!3d39.1566966!4d9.3934626!9m1!1b1!16s%2Fg%2F11bv6pl2tr?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-1.png"),
      image2: assetPath("Image 2 Destination Detail-1.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-1.png"),
        assetPath("Gallery 2 Destination Detail-1-1.png"),
        assetPath("Gallery 1 Destination Detail-1-2.png"),
        assetPath("Gallery 2 Destination Detail-1-2.png"),
      ],
    },
    highlights: [
      "Long stretch of light, cream-colored sand with clear turquoise waters",
      "Shallow seabed ideal for swimming, snorkeling, and water activities",
      "Lively atmosphere with nearby beach services and refreshment options",
      "Availability of sunbeds, umbrellas, and pedal boat rentals",
      "Surrounded by Mediterranean pine landscapes and scenic coastal views",
      "Close to restaurants and dining spots, making it ideal for full-day visits",
    ],
    reviews: [
      {
        name: "Radu Jitea",
        date: "6 months ago",
        stars: 5,
        text: "Free car park and local beach vibes. Not always crystal clear water, depending on sea conditions. The sand is a bit coarser. Gets more sun in the evenings compared to the other beach nearby, Genn’e Mari. Enjoyable overall.",
        avatar: assetPath("Cannes Sisa Beach - Radu.png"),
      },
      {
        name: "Matthew Williamson",
        date: "7 years ago",
        stars: 5,
        text: "Amazing beach, super chilled vibes, Genuinely one of the most beautiful beaches I have been to in the whole of Europe, so beautiful we have bought a house around the corner, this is a hidden gem ... Great little beach bars with amazing music and events , soya milk and vegan Cornetto , what more could I ask for.",
        avatar: assetPath("CannGÇÖe Sisa Beach - Matthew.png"),
      },
      {
        name: "Arthur Lugg",
        date: "1 year ago",
        stars: 5,
        text: "Very nice beach . It was not so busy when i went there. Water is very clear, and the water is warm.",
        avatar: assetPath("CannGÇÖe Sisa Beach - Arthur.png"),
      },
      {
        name: "Nathalie De Clercq",
        date: "1 year ago",
        stars: 5,
        text: "Beautiful beach, sunset views!",
        avatar: assetPath("CannGÇÖe Sisa Beach - Nathalie.png"),
      },
      {
        name: "SD",
        date: "5 years ago",
        stars: 5,
        text: "Beautiful. If you find yourself at the beach late evening.. is a paradise! quite and peace. Magnificent colors. A handy chiosk near by close before everyone.",
        avatar: assetPath("CannGÇÖe Sisa Beach - SD.png"),
      },
    ],
  },
  "porto-giunco": {
    name: "Porto Giunco Beach",
    slug: "porto-giunco",
    category: "Beaches",
    rating: 4.7,
    keywords: ["Beach", "Relaxation", "Nature"],
    headerTitle: "One of the island’s most iconic escapes",
    bodyText:
      "Porto Giunco is one of Sardinia’s most celebrated beaches, known for its exceptional colors and expansive shoreline. Located near Villasimius, this stretch of fine sand is surrounded by a unique landscape where the sea meets a lagoon, creating a palette of soft blues, turquoise, and subtle pink tones shaped by natural granite fragments.\n\nOften described as a tropical escape in the Mediterranean, the beach offers both space and serenity. Its shallow, sandy seabed makes it particularly suitable for families, while its protected position between headlands shields it from strong winds, allowing for calm, uninterrupted swimming conditions. Porto Giunco’s scale, beauty, and atmosphere make it not just a destination, but one of the defining coastal experiences of southern Sardinia.",
    contact: {
      distance: "Around a 25 min drive from you",
      phone: "Not Available",
      email: "Not Available",
      website: "",
      menu: "",
      map: "https://maps.app.goo.gl/wLKCbbv9BfWTmcsE8",
      reviews:
        "https://www.google.com/maps/place/Spiaggia+di+Porto+Giunco/@39.1151512,9.5152012,16z/data=!4m8!3m7!1s0x12e0c2c055c76273:0x3fcac81d9cd1e8f0!8m2!3d39.1160995!4d9.5193531!9m1!1b1!16s%2Fg%2F11c5sbddt6?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-2.png"),
      image2: assetPath("Image 2 Destination Detail-2.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-2.png"),
        assetPath("Gallery 2 Destination Detail-1-2.png"),
        assetPath("Gallery 1 Destination Detail-3.png"),
        assetPath("Gallery 2 Destination Detail-3.png"),
      ],
    },
    highlights: [
      "One of Sardinia’s most iconic beaches, known for its exceptional color variations",
      "Unique setting between sea and lagoon, creating a rare natural landscape",
      "Fine, light sand with subtle pink tones from granite fragments",
      "Shallow, calm waters ideal for swimming and families",
      "Large, open shoreline offering space even during busier periods",
      "Protected cove position that reduces wind and enhances comfort",
    ],
    reviews: [
      {
        name: "Ana Trofin",
        date: "6 months ago",
        stars: 5,
        text: "Beautiful beach, with crystal, calm water and beautiful landscape. The only downside is the parking which cost 10 euro visiting at the end of September . But I can see the appeal. It must be really crowded during the summer which would put people off.",
        avatar: assetPath("Porto Giunco Beach - Ana.png"),
      },
      {
        name: "Marty McClung",
        date: "6 months ago",
        stars: 5,
        text: "Great beach, lots of sand and nice water. Beautiful Cliffs around this beach. Unless you want to walk a ways it does cost 6-10 euros to park close, and 25 euros to get an umbrella by the beach. Has a bar and some food also.",
        avatar: assetPath("Porto Giunco Beach - Marty.png"),
      },
      {
        name: "George Lascu",
        date: "7 months ago",
        stars: 5,
        text: "Superb place, incredible beautiful water colors, a type of beach where you can enjoy all day, plus find good food & drinks for decent prices on the beach. As well suitable for all kids who can play in the water safely.",
        avatar: assetPath("Porto Giunco Beach - George.png"),
      },
      {
        name: "Sierra Walters",
        date: "6 months ago",
        stars: 5,
        text: "By far our favorite beach in villasimius area after visiting a few of them!! the water is perfectly crystal clear with no seaweed and we thought there was plenty of room, not as crowded as other beaches!!",
        avatar: assetPath("Porto Giunco Beach - Sierra.png"),
      },
      {
        name: "Pavel Lipovský",
        date: "6 months ago",
        stars: 5,
        text: "Nice beach! Clear water, parking for 10 Euro.",
        avatar: assetPath("Porto Giunco Beach - Pavel.png"),
      },
    ],
  },
  "cala-delfino": {
    name: "Cala Delfino",
    slug: "cala-delfino",
    category: "Beaches",
    rating: 5.0,
    keywords: ["Beach", "Relaxation", "Nature"],
    headerTitle: "A quiet hidden cove",
    bodyText:
      "Cala Delfino is a small and secluded cove offering a more intimate coastal experience compared to Sardinia’s larger beaches. With a length of just around 30 meters, it feels tucked away and naturally protected, creating a quiet escape for those looking to step away from busier shores.\n\nFacing south-east, the cove opens to clear waters and uninterrupted views across the surrounding coastline, including distant islands and rocky formations that define this part of Sardinia. Its untouched nature means there are no services on site, making it ideal for visitors who prefer a more independent and peaceful setting. Cala Delfino is best experienced slowly, a place to bring what you need, stay for a while, and enjoy the simplicity of the landscape.",
    contact: {
      distance: "Around a 35 min drive from you",
      phone: "Not Available",
      email: "Not Available",
      website: "",
      menu: "",
      map: "https://maps.app.goo.gl/vvniqbgfEBoddzYk9",
      reviews: "",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-3.png"),
      image2: assetPath("Image 2 Destination Detail-3.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-3.png"),
        assetPath("Gallery 2 Destination Detail-1-3.png"),
        assetPath("Gallery 1 Destination Detail-4.png"),
        assetPath("Gallery 2 Destination Detail-4.png"),
      ],
    },
    highlights: [
      "Small, secluded cove offering a quiet and private beach experience",
      "Clear waters and natural surroundings with minimal development",
      "Scenic views across the coastline and nearby islands",
      "Ideal for relaxation, swimming, and snorkeling in calm conditions",
      "Uncrowded atmosphere compared to larger, more popular beaches",
      "No on-site services, preserving its untouched and natural character",
    ],
    reviews: [],
    hideReviews: true,
  },
  "saint-remy": {
    name: "Bastion of Saint Remy",
    slug: "saint-remy",
    category: "Landmarks",
    rating: 4.6,
    keywords: ["Culture", "Scenic", "Historic"],
    headerTitle: "A view shaped by history",
    bodyText:
      "Set within the historic Castello district of Cagliari, the Bastion of Saint Remy stands as one of the city’s most striking architectural landmarks. Built in the late 19th century atop medieval fortifications, it connects the upper old town with the surrounding districts below, offering both historical depth and panoramic views over the city and its harbor.\n\nConstructed from local limestone in an elegant neoclassical style, the bastion is defined by its grand staircase, sweeping arches, and imposing columns. At its summit, the Umberto I Terrace opens up to one of the most iconic viewpoints in southern Sardinia, where the city, sea, and sky meet in a single uninterrupted panorama. Today, beyond its architectural significance, the space serves as a cultural hub, hosting exhibitions and gathering both locals and visitors in a setting that reflects the character and rhythm of Cagliari.",
    contact: {
      distance: "Around a 45 min drive from you",
      phone: "+39 070 6771",
      email: "Not Available",
      website: "https://www.sardegnaturismo.it/it/esplora/bastione-saint-remy",
      menu: "",
      map: "https://maps.app.goo.gl/xrHEjE75nTUz4VCS7",
      reviews:
        "https://www.google.com/search?sca_esv=b78cf8500232fcdc&sxsrf=ANbL-n67RgUhZje3kmObmLHsvo7GG3UREQ:1775079191010&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_xyBZZbBMT_ngYc6XvUdlGDGpqvGnAmXwLJ7Rvyy92c5Rf7lmio8rWFxsQVhylR8WcABSvPKFRbskXPUt8qDKU8LzOtaMuWpHXgdg_DIKhJaYDMaq_g%3D%3D&q=Bastione+di+Saint+Remy+Reviews&sa=X&ved=2ahUKEwjEjYOlzc2TAxWr_rsIHTh8IdYQ0bkNegQIJhAH&biw=1920&bih=945&dpr=1",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-4.png"),
      image2: assetPath("Image 2 Destination Detail-4.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-4.png"),
        assetPath("Gallery 2 Destination Detail-1-4.png"),
        assetPath("Gallery 1 Destination Detail-5.png"),
        assetPath("Gallery 2 Destination Detail-5.png"),
      ],
    },
    highlights: [
      "Iconic neoclassical landmark built on historic medieval city walls",
      "Panoramic terrace offering sweeping views over Cagliari and its harbor",
      "Grand staircase and architectural design using local limestone",
      "Located in the Castello district, one of the most historic areas of the city",
      "Cultural space hosting exhibitions, events, and public gatherings",
      "Accessible via both staircases and elevators from lower city levels",
    ],
    reviews: [
      {
        name: "Beereed",
        date: "6 months ago",
        stars: 5,
        text: "Amazing scenery, views and a wonderful walk around here. Not too far from the port. Some fantastic history and if you have the buggy tour you can find out more as you go past which we did. Such a lovely area, we really enjoyed this start to our Italian holiday.",
        avatar: assetPath("Bastion of Saint Remy - Beereed.png"),
      },
      {
        name: "Иван Младенов",
        date: "6 months ago",
        stars: 5,
        text: "Nice view, you can buy umbrellas or hats from vendors there. I recommend not going in sunny weather and during the lunch hours as it is very hot.",
        avatar: assetPath("Bastion of Saint Remy - -ÿ-¦-¦-+.png"),
      },
      {
        name: "Adam Gill",
        date: "6 months ago",
        stars: 5,
        text: "It's a beautiful old structure with wonderful panoramic views of the city once you climb the elegant staircase. Just be warned it can be swarming with tourists taking Insta photos and TikTok videos which can distract from the experience. Don't forget to open your eyes and drink it all in ❤️",
        avatar: assetPath("Bastion of Saint Remy - Adam.png"),
      },
      {
        name: "Waldek",
        date: "5 months ago",
        stars: 5,
        text: "Excellent building, very large and interesting. Must show whilst you are visiting Cagliari.",
        avatar: assetPath("Bastion of Saint Remy - Waldek.png"),
      },
      {
        name: "Lukas P",
        date: "7 months ago",
        stars: 5,
        text: "The view is astonishing. It is very close to the city center with good restaurants and coffee houses. Free access to the top – a must-visit if you are already in Cagliari.",
        avatar: assetPath("Bastion of Saint Remy - Lukas.png"),
      },
    ],
  },
  "torre-delle-stelle-tower": {
    name: "The Tower",
    slug: "torre-delle-stelle-tower",
    category: "Landmarks",
    rating: 4.7,
    keywords: ["Culture", "Scenic", "Historic"],
    headerTitle: "Under Sardinia’s clearest skies",
    bodyText:
      'Perched at the highest point of Torre delle Stelle, this observatory offers a unique perspective on Sardinia, not just across its coastline, but into the night sky above it. Known for its exceptionally clear atmospheric conditions, the area has long been associated with stargazing, giving the village its name, "Tower of the Stars."\n\nThe observatory provides guided astronomical sessions that combine science, storytelling, and breathtaking views. Visitors can observe planets, constellations, and deep-sky objects through professional equipment, often guided by experts in a setting that feels both intimate and expansive.\n\nBy day, the location offers panoramic views over the surrounding landscape. By night, it transforms into one of the most memorable experiences in the region, a quiet, elevated space where the natural beauty of Sardinia extends far beyond the horizon.',
    contact: {
      distance: "Around a 5 min drive from you",
      phone: "+39 392 0239 904",
      email: "info@torredellestelleaielli.it",
      website: "https://torredellestelleaielli.it/",
      menu: "",
      map: "https://maps.app.goo.gl/uhTgpUMzP4FPTZPSA",
      reviews:
        "https://www.google.com/maps/place/Torre+delle+Stelle/@40.5839592,8.8520271,7z/data=!4m12!1m2!2m1!1sTorre+delle+Stelle+Tower!3m8!1s0x133021b2a8fe91a9:0xc8a0d6023edfacee!8m2!3d42.082376!4d13.5904757!9m1!1b1!15sChhUb3JyZSBkZWxsZSBTdGVsbGUgVG93ZXKSAQtvYnNlcnZhdG9yeeABAA!16s%2Fg%2F11b6ss_ssj?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-6.png"),
      image2: assetPath("Image 2 Destination Detail-6.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-6.png"),
        assetPath("Gallery 2 Destination Detail-1-6.png"),
        assetPath("Gallery 1 Destination Detail-7.png"),
        assetPath("Gallery 2 Destination Detail-7.png"),
      ],
    },
    highlights: [
      "Observatory located at the highest point of Torre delle Stelle with panoramic views",
      "Guided stargazing sessions led by knowledgeable astronomy experts",
      "Planetarium-style experiences with access to professional observation equipment",
      "Ideal conditions for celestial observation due to low light pollution",
      "Unique combination of science, education, and immersive natural setting",
      "Distinct evening experience offering a different perspective of Sardinia",
    ],
    reviews: [
      {
        name: "Lorenzo Viola",
        date: "8 years ago",
        stars: 5,
        text: "This is an old observation tower (medieval). Now Turner in astronomical observatory. Also there the local administrations organize events with artists, live music, street foods",
        avatar: assetPath("Torre delle Stelle Tower - Lorenzo.png"),
      },
      {
        name: "Alessandro Pucci",
        date: "3 months ago",
        stars: 5,
        text: "Competent and passionate staff teach young and old to look up to the sky and learn to be amazed. Single observations, workshops, and other activities are available at low prices. Behind the project are the expert hands of astrophysicists who have enhanced this special place.",
        avatar: assetPath("Torre delle Stelle Tower - Alessandro.png"),
      },
      {
        name: "Vittoria Tocchio",
        date: "7 months ago",
        stars: 5,
        text: "I participated in three events offered by the Torre delle Stelle in Aielli: solar observation, a visit to the planetarium, and observation of Saturn. They were three pleasant and enlightening experiences, even for someone like me who has never approached the world of astronomy. The staff proved to be highly knowledgeable, qualified, and at the same time extremely kind and available to answer any questions or concerns. I recommend booking in advance.",
        avatar: assetPath("Torre delle Stelle Tower -  Vittoria.png"),
      },
      {
        name: "Andrea",
        date: "1 year ago",
        stars: 5,
        text: "What a wonderful discovery! We came to visit the town for the murals, but luckily we found a guide outside the tower who entertained us until 12 noon and then took us up to admire our most beautiful star with a special telescope. The cost is 6 euros per adult (children are free), perhaps I would have lowered it a bit, but the guides were very good anyway, and they taught us a little more about our sun.",
        avatar: assetPath("Torre delle Stelle Tower -  Andrea.png"),
      },
      {
        name: "Raffaele Piazzolla",
        date: "1 year ago",
        stars: 5,
        text: "My family and I attended the educational event at the planetarium at the base of the tower. Paolo took us on a journey through time and space with a captivating tale of the stars, galaxies, and events that have brought us to where we are today and where we will be in the incredibly distant future.",
        avatar: assetPath("Torre delle Stelle Tower -  Raffaele.png"),
      },
    ],
  },
  "istellas-club": {
    name: "Istellas Beach Club",
    slug: "istellas-club",
    category: "Dining",
    rating: 4.5,
    keywords: ["Beach", "Relaxation", "Scenic"],
    headerTitle: "A laid-back rhythm by the sea",
    bodyText:
      "Istellas Beach Club offers a relaxed coastal experience where the pace naturally slows and the focus shifts to simple pleasures, sun, sea, and atmosphere. Set directly along the shoreline of Torre delle Stelle, it blends the casual charm of a beach spot with the comfort of a well-serviced lounge.\n\nThe setting is open and inviting, with views over clear waters and easy access to the beach. Guests can spend the day unwinding on sunbeds, enjoying drinks by the sea, or moving between shaded lounge areas and the shoreline. The environment is informal yet thoughtfully arranged, making it equally suited for quiet afternoons or social moments.\n\nWith its combination of location, comfort, and understated energy, Istellas Beach Club provides a seamless way to experience the coast without complication, a place designed for ease, presence, and long, unhurried days.",
    contact: {
      distance: "Around a 5 min drive from you",
      phone: "Not Available",
      email: "istellasbc@gmail.com",
      website: "https://m.facebook.com/istellasbc/",
      menu: "",
      map: "https://maps.app.goo.gl/WeLL9H9q3rV7QyRWA",
      reviews:
        "https://www.google.com/maps/place/Istellas+Beach+Club/@39.1565261,9.3940452,17z/data=!4m8!3m7!1s0x12e0c54be8ba1bb7:0xc6c61841b7dd670a!8m2!3d39.1565261!4d9.3940452!9m1!1b1!16s%2Fg%2F11rfp_d55c?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-7.png"),
      image2: assetPath("Image 2 Destination Detail-7.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-7.png"),
        assetPath("Gallery 2 Destination Detail-1-7.png"),
        assetPath("Gallery 1 Destination Detail-8.png"),
        assetPath("Gallery 2 Destination Detail-8.png"),
      ],
    },
    highlights: [
      "Direct beachfront location with uninterrupted sea views",
      "Sunbeds and lounge areas designed for all-day comfort",
      "Relaxed beach club atmosphere with casual service",
      "Ideal setting for both quiet relaxation and social gatherings",
      "Easy access to the shoreline for swimming and sunbathing",
      "Balanced experience combining simplicity with comfort",
    ],
    reviews: [
      {
        name: "Marcel Ožbolt",
        date: "2 years ago",
        stars: 5,
        text: "Good vibe, good music, super friendly staff and reasonable price. I recommend visiting it",
        avatar: assetPath("Istellas Beach Club -  Marcel.png"),
      },
      {
        name: "Uroš M",
        date: "2 years ago",
        stars: 5,
        text: "This place is next level nice. They even have rabbits! Alberto is the man!",
        avatar: assetPath("Istellas Beach Club -  Uro+í.png"),
      },
      {
        name: "Claudietto 12",
        date: "2 years ago",
        stars: 5,
        text: "We've been coming here for years, the girl is super nice and the products are good!",
        avatar: assetPath("Istellas Beach Club -  Claudietto.png"),
      },
      {
        name: "Riky Locci",
        date: "2 years ago",
        stars: 5,
        text: "This beachside kiosk offers a wonderful experience with beach club services. The staff is extremely professional, friendly, polite, and friendly. Welcoming from the moment you arrive, they provide detailed information about the services offered. The kiosk offers activities for all tastes, along with beach club services that offer comfortable accommodations on the beach. The staff ensures every need is met and creates a welcoming atmosphere. The area is clean and well-organized, creating a relaxing atmosphere. Recommended for those looking for a perfect day at the beach with exceptional service.",
        avatar: assetPath("Istellas Beach Club -  Riky.png"),
      },
      {
        name: "Luna C.",
        date: "3 years ago",
        stars: 5,
        text: "Excellent dish in a fantastic location for its simplicity.",
        avatar: assetPath("Istellas Beach Club -  Luna.png"),
      },
    ],
  },
  "centro-palmira": {
    name: "Centro Palmira",
    slug: "centro-palmira",
    category: "Hubs",
    rating: 4.3,
    keywords: ["Shopping", "Essentials", "Local"],
    headerTitle: "Everything you need, just moments away",
    bodyText:
      "Centro Palmira serves as the central commercial hub of Torre delle Stelle, offering a practical and convenient stop for both everyday needs and casual experiences. Positioned within easy reach of the villas, it brings together a variety of essential services in one accessible location.\n\nThe area includes a mix of shops and amenities, from a market and butcher to a fishmonger, café, pizzeria, and bar. Beyond food and dining, visitors will also find local crafts, newspapers, tobacco shops, and beach-related services, creating a well-rounded offering that supports both short stays and longer visits.\n\nWhether stocking up on groceries, enjoying a quick coffee, or preparing for a day by the sea, Centro Palmira provides a reliable and efficient base, a place where convenience meets the rhythm of local life.",
    contact: {
      distance: "Around a 5 min drive from you",
      phone: "+39 070 786241",
      email: "Not Available",
      website: "http://www.dapalmira.it/",
      menu: "",
      map: "https://maps.app.goo.gl/ZtZ2edpXgGYYvZWQ7",
      reviews:
        "https://www.google.com/search?sca_esv=b78cf8500232fcdc&sxsrf=ANbL-n66BIrk_6bKPuCzwS7W5C6FePdxjQ:1775094365703&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x0jcbtXsa3uYdoMPNIyP7wEHDTvEvLb0dLqBZDU7Xv4qooulxmy3rpAw1hsO2zvjGYF8uppGs1ghWFBvnYRt6GlBKjl4GX4qInVLksiOTz_iGC5E5Q%3D%3D&q=CENTRO+COMMLE+PALMIRA+SAS+Reviews&sa=X&ved=2ahUKEwjg-fDohc6TAxVicKQEHfwXJMIQ0bkNegQIQhAH&biw=1920&bih=945&dpr=1",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-9.png"),
      image2: assetPath("Image 2 Destination Detail-9.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-9.png"),
        assetPath("Gallery 2 Destination Detail-1-9.png"),
        assetPath("Gallery 1 Destination Detail-10.png"),
        assetPath("Gallery 2 Destination Detail-10.png"),
      ],
    },
    highlights: [
      "Central commercial hub serving Torre delle Stelle and surrounding areas",
      "Wide range of services including market, butcher, fishmonger, and dining options",
      "Cafés, bars, and pizzerias for casual meals and quick stops",
      "Availability of local crafts, newspapers, and everyday essentials",
      "Beach-related services including rentals and nearby facilities",
      "Convenient one-stop location for both visitors and residents",
    ],
    reviews: [
      {
        name: "Leo Kettmeir",
        date: "6 months ago",
        stars: 5,
        text: "Amazing staff, was in Torre for a week and went shopping nearly on a daily basis here, they had everything i was looking for and more, and was able to chat with all the staff and get suggestions for meals. truly a nice supermarket that i am looking forward to coming back",
        avatar: assetPath("Centro Palmira  -  Leo.png"),
      },
      {
        name: "Radu Jitea",
        date: "7 months ago",
        stars: 5,
        text: "Fresh bread and hand made ravioli. Also great assortment of Parma Ham and Salami Milano plus fresh mozzarella and smoke scamorza cheese.",
        avatar: assetPath("Centro Palmira - Radu.png"),
      },
      {
        name: "Christopher Lansgate",
        date: "2 years ago",
        stars: 5,
        text: "We have been for holiday two weeks in Torre delle Stelle. In this supermarket we could everything, meat cured meat , artisanal bread, sardinian cakes, everything very good. Even the staff was very prepared and nice",
        avatar: assetPath("Centro Palmira  -  Christopher.png"),
      },
      {
        name: "Corbin",
        date: "1 year ago",
        stars: 5,
        text: "This place was great! The meat counter dudes were super helpful and folks even spoke some English. They were super super nice! The produce and meat was very fresh. I recommend the pickled octopus (insalate de polpo). Great snack with some olives",
        avatar: assetPath("Centro Palmira  -  Corbin.png"),
      },
      {
        name: "Matthew Williamson",
        date: "2 years ago",
        stars: 5,
        text: "Super friendly and always amazing fresh traditional bread, great selection of food from meats to veg to fresh focaccia which is delicious. Homewares and DIY , 5 star also 24/7 vending machine and bancomat",
        avatar: assetPath("Centro Palmira - Matthew.png"),
      },
    ],
  },
  aquarium: {
    name: "Aquarium",
    slug: "aquarium",
    category: "Dining",
    rating: 4.6,
    keywords: ["Restaurant", "Pizza", "Local"],
    headerTitle: "Where every slice reflects Sardinia",
    bodyText:
      "Pizzeria Farra offers a refined take on a timeless classic, rooted in Sardinian tradition and elevated through quality ingredients and thoughtful preparation. Known for its light, easily digestible doughs, the kitchen places emphasis on balance, simplicity, and authenticity.\n\nThe menu highlights locally sourced ingredients, many coming directly from nearby producers, creating pizzas that reflect the richness of the region. From carefully selected cheeses to cured meats and seasonal vegetables, each element is chosen with intention, resulting in flavors that are both familiar and distinctive.\n\nBeyond pizza, the experience extends into a broader expression of Sardinian hospitality. With a curated selection of local wines and craft beers, paired with a warm and welcoming atmosphere, Pizzeria Farra offers a setting where tradition and comfort meet, a place where each meal feels both grounded and memorable.",
    contact: {
      distance: "Around a 7 min drive from you",
      phone: "+39 375 510 0593",
      email: "info@aquariumsardinia.com",
      website: "http://www.dapalmira.it/",
      menu: "https://www.aquariumsardinia.com/menu-farra/",
      map: "https://maps.app.goo.gl/tQNfp7SqyJRJBh6eA",
      reviews:
        "https://www.google.com/search?sca_esv=b78cf8500232fcdc&sxsrf=ANbL-n4Ce57rbjK6QjAohZM0xa5CAkItxw:1775096384581&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWQ3ugS1OziYdWQGYGnX4Xd1gRuF8KYeW0i0DTI9J8paEDuGBlksJEmkZWNYLrOHS_dCTDiBaoSLTxmEf3e0Ml9Px5q7LwScSSItoqDcT4zyqJRsfYA%3D%3D&q=Pizzeria+Farra+by+Aquarium+Reviews&sa=X&ved=2ahUKEwi7userjc6TAxXSV6QEHQ_nCewQ0bkNegQIQhAH&biw=1920&bih=945&dpr=1",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-10.png"),
      image2: assetPath("Image 2 Destination Detail-10.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-10.png"),
        assetPath("Gallery 2 Destination Detail-1-10.png"),
        assetPath("Gallery 1 Destination Detail-11.png"),
        assetPath("Gallery 2 Destination Detail-11.png"),
      ],
    },
    highlights: [
      "Light and easily digestible pizza dough crafted with precision",
      "Strong focus on locally sourced and seasonal Sardinian ingredients",
      "Menu rooted in regional culinary tradition with refined execution",
      "Carefully curated selection of Sardinian wines and craft beers",
      "Balanced offering including pizzas, salads, and complementary dishes",
      "Warm, welcoming atmosphere reflecting authentic local hospitality",
    ],
    reviews: [
      {
        name: "Kara Hamilton",
        date: "4 months ago",
        stars: 5,
        text: "Yummiest pizza EVER! I could have eaten 10, not only did they feel nourishing but also did NOT hurt my stomach like American pizza does! And the gelato was so fresh and delicious!",
        avatar: assetPath("Pizzeria Farra  -  Kara.png"),
      },
      {
        name: "Aaron Wagenheim",
        date: "8 months ago",
        stars: 5,
        text: "Found this place prior to visiting Sardinia. Walked in on a Tuesday right at 7 and sat down immediately while a steady flow of people filled in most of the tables. Fantastic outdoor vibe. The pizza was awesome and we loved the drinks as well. Ended up coming back the next night, and ordering it to go the night after!",
        avatar: assetPath("Pizzeria Farra  -  Aaron.png"),
      },
      {
        name: "Abigail Martinez",
        date: "8 months ago",
        stars: 5,
        text: "I absolutely loved this place! We spent our last night in Sardinia here and it was magical. The overall location is breathtaking and the people are so kind. The food was also so phenomenal and I was so happy we left Italy with such a positive experience. Only wish I lived closer to come more often :)",
        avatar: assetPath("Pizzeria Farra  -  Abigail.png"),
      },
      {
        name: "Sara Turnley",
        date: "1 year ago",
        stars: 5,
        text: "Farra Pizzeria was amazing! The delicious, locally sourced food paired with tasty drinks and excellent service made for a fabulous dinner. The live music on the patio was an added bonus! Farra Pizzeria combines best of both worlds - the comforting atmosphere with the quality and attention to detail of an upscale restaurant. If you’re traveling through Torre delle Stelle, Sardinia, Italy, this is a 10/10 recommended stop!",
        avatar: assetPath("Pizzeria Farra  -  Sara.png"),
      },
      {
        name: "Adriana Ignat",
        date: "8 months ago",
        stars: 5,
        text: "Great restaurant for a romantic dinner. Do reserve in advance and don't skip the tiramisu! We were attended by Alessia, and she was lovely.",
        avatar: assetPath("Pizzeria Farra  -  Adriana.png"),
      },
    ],
  },
  andycoc: {
    name: "Andycoc",
    slug: "andycoc",
    category: "Dining",
    rating: 4.1,
    keywords: ["Restaurant", "Seafood", "Beach"],
    headerTitle: "Seaside dining, rooted in Sardinian tradition",
    bodyText:
      "Set close to the shoreline of Torre delle Stelle, Andycoc Il Moro offers a relaxed dining experience shaped by its coastal surroundings and Sardinian culinary roots. The setting is informal yet inviting, allowing guests to enjoy their meal within a natural, open-air environment.\n\nThe menu reflects a blend of traditional Italian and Sardinian influences, with a strong emphasis on seafood and Mediterranean flavors. Dishes are prepared with simplicity and care, focusing on freshness and familiarity rather than complexity, making it an accessible and enjoyable choice for a wide range of guests.\n\nWith outdoor seating, attentive service, and a location that naturally encourages long, unhurried meals, Andycoc Il Moro provides a balanced experience, where food, setting, and atmosphere come together effortlessly.",
    contact: {
      distance: "Around a 7 min drive from you",
      phone: "+39 393 336 6191",
      email: "Andycoc2@gmail.com",
      website:
        "http://www.facebook.com/Andycoc-on-the-Beach-e-il-Moro-1885191961540035",
      menu: "https://www.google.com/maps/place/andycoc+e+il+Moro/@39.1448413,9.4029769,17z/data=!4m7!3m6!1s0x12e0c5e51a927e27:0xf5bf393a8d596f3!8m2!3d39.1448413!4d9.4055518!10e9!16s%2Fg%2F11f7nkwpmf?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
      map: "https://maps.app.goo.gl/rrxZdmvppzjy8M6J8",
      reviews:
        "https://www.google.com/maps/place/andycoc+e+il+Moro/@39.1448413,9.4029769,17z/data=!4m8!3m7!1s0x12e0c5e51a927e27:0xf5bf393a8d596f3!8m2!3d39.1448413!4d9.4055518!9m1!1b1!16s%2Fg%2F11f7nkwpmf?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-11.png"),
      image2: assetPath("Image 2 Destination Detail-11.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-12.png"),
        assetPath("Gallery 2 Destination Detail-12.png"),
        assetPath("Gallery 1 Destination Detail-1-11.png"),
        assetPath("Gallery 2 Destination Detail-1-11.png"),
      ],
    },
    highlights: [
      "Coastal location offering a relaxed and open dining environment",
      "Strong focus on seafood and Mediterranean-inspired dishes",
      "Outdoor seating designed to complement the natural surroundings",
      "Casual yet welcoming atmosphere suited for all-day dining",
      "Wide menu covering lunch, dinner, and lighter options",
      "Practical amenities including parking and accessible service options",
    ],
    reviews: [
      {
        name: "Pier Farina",
        date: "6 years ago",
        stars: 5,
        text: "Yummy food with great sea view! The staff is friendly and helpful. Very kids friendly and accessible prices taking in consideration that the location is literally one minute from the beach with breathtaking view. highly recommended",
        avatar: assetPath("Andycoc  -  Pier.png"),
      },
      {
        name: "Sophia C",
        date: "10 months ago",
        stars: 5,
        text: "Great little beachside spot. Lovely staff, tasty food. We’ve had some very happy lunch breaks here after the beach. They are very friendly",
        avatar: assetPath("Andycoc  - Sophia.png"),
      },
      {
        name: "Chantelle Pokai",
        date: "10 months ago",
        stars: 5,
        text: "Mussel soup was delicious. Samuel was an excellent waiter and very patient with all the kids at the table",
        avatar: assetPath("Andycoc  - Chantelle.png"),
      },
      {
        name: "Amber M",
        date: "1 year ago",
        stars: 5,
        text: "Amazing view, amazing food, amazing service! We came for lunch and had 3 spaghettis - lobster, clam, sausage. Plus shark, mussels, and tiramisu. Definitely recommend!!",
        avatar: assetPath("Andycoc  - Amber.png"),
      },
      {
        name: "Andrea Cozzolino",
        date: "2 years ago",
        stars: 5,
        text: "Andycoc Restaurant in Torre delle Stelle was a delightful culinary experience. The ambiance was inviting with a stunning view of the Mediterranean Sea. The fresh seafood dishes were bursting with flavors, and the staff was attentive and friendly.",
        avatar: assetPath("Andycoc  - Andrea.png"),
      },
    ],
  },
  "cafe-do-mar": {
    name: "Café do Mar",
    slug: "cafe-do-mar",
    category: "Hubs",
    rating: 4.2,
    keywords: ["Restaurant", "Beach", "Relaxation"],
    headerTitle: "Where Sardinian flavors meet the sea",
    bodyText:
      "Hidden along the shoreline of Torre delle Stelle, Café do Mar offers a relaxed and authentic Sardinian dining experience shaped by its coastal setting. With uninterrupted views of the sea and a naturally welcoming atmosphere, it captures a quieter, more genuine side of the island.\n\nThe kitchen focuses on local flavors and traditional ingredients, presenting curated selections of cheeses, cured meats, and simple yet refined dishes that reflect Sardinia’s culinary identity. The experience extends beyond the plate, with warm, attentive service that makes each visit feel personal and unhurried.\n\nAt certain moments, live music adds depth to the setting, enhancing the connection between food, atmosphere, and location. Combined with thoughtful details and direct access to the surrounding beach environment, Café do Mar offers a balanced experience where dining and relaxation naturally come together.",
    contact: {
      distance: "Around a 5 min drive from you",
      phone: "Not Available",
      email: "Not Available",
      website: "",
      menu: "https://www.google.com/maps/place/Cafe%E2%80%99+do+mar/@39.1554248,9.3953233,17z/data=!4m7!3m6!1s0x12e0c5538f401cb1:0x380f92a9458bed76!8m2!3d39.1554248!4d9.3953233!10e9!16s%2Fg%2F11ry656pdq?hl=en&entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
      map: "https://maps.app.goo.gl/kgB3KUeCAqVwopTcA",
      reviews:
        "https://www.google.com/maps/place/Cafe%E2%80%99+do+mar/@39.1554248,9.3953233,17z/data=!4m8!3m7!1s0x12e0c5538f401cb1:0x380f92a9458bed76!8m2!3d39.1554248!4d9.3953233!9m1!1b1!16s%2Fg%2F11ry656pdq?hl=en&entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-8.png"),
      image2: assetPath("Image 2 Destination Detail-8.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-8.png"),
        assetPath("Gallery 2 Destination Detail-1-8.png"),
        assetPath("Gallery 1 Destination Detail-9.png"),
        assetPath("Gallery 2 Destination Detail-9.png"),
      ],
    },
    highlights: [
      "Seafront location offering direct views over the coastline",
      "Focus on authentic Sardinian flavors and locally inspired dishes",
      "Relaxed and welcoming atmosphere with a strong sense of place",
      "Occasional live music enhancing the overall dining experience",
      "Outdoor seating designed to complement the natural surroundings",
      "Thoughtful amenities and service that elevate a casual setting",
    ],
    reviews: [
      {
        name: "Wojciech Keller",
        date: "11 months ago",
        stars: 5,
        text: "Perfect place off the beaten path to escape the touristy locations/crowds. The vibe is exactly what you imagine thinking of Sardinia. Quick drive from Cagliari and close to Villasimus. You can even use the public transport/bus. Try it!",
        avatar: assetPath("Caf+¬ do Mar  -  Wojciech.png"),
      },
      {
        name: "Karolina Janica",
        date: "1 year ago",
        stars: 5,
        text: "Wonderful customer service! Great food for the price! Brilliant live music entertainment! Francesca Gracie Mile! And hope to see you all soon! Karolina ❤️❤️❤️",
        avatar: assetPath("Caf+¬ do Mar  -  Karolina.png"),
      },
      {
        name: "Chloe Meeus",
        date: "1 year ago",
        stars: 5,
        text: "We discovered this place wandering by and what a good luck ! We wanted to discovered the local cheese and cured meat and it was the perfect degustation plat ! The staff was lovely as well which is not always a given.",
        avatar: assetPath("Caf+¬ do Mar  -  Chloe.png"),
      },
      {
        name: "Valentina Nurchi",
        date: "7 months ago",
        stars: 5,
        text: "Lovely spot on the beach! Well kept and tidy, friendly staff and good variety food/ drinks/ ice cream!",
        avatar: assetPath("Caf+¬ do Mar  -  Valentina.png"),
      },
      {
        name: "Piotr Rękawik",
        date: "1 year ago",
        stars: 5,
        text: "Wonderful people, very friendly, wonderful place – quiet, not crowded with very nice atmosphere and beautiful beach. You will find their everything you need, including shower, which is not obvious when it comes to Sardinian beaches. I definitely recommend this place!!!",
        avatar: assetPath("Caf+¬ do Mar  -  Piotr.png"),
      },
    ],
  },
  cagliari: {
    name: "Cagliari",
    slug: "cagliari",
    category: "Landmarks",
    rating: 5.0,
    keywords: ["Culture", "Historic", "Scenic"],
    headerTitle: "Where history meets the Mediterranean",
    bodyText:
      "Cagliari, the capital of Sardinia, is a city defined by its depth of history and its connection to the sea. Built over thousands of years of continuous settlement, it reflects the influence of multiple civilizations, from ancient prehistory to Roman, Byzantine, and medieval periods. Today, this layered past remains visible throughout the city, shaping both its architecture and its identity.\n\nAt the heart of Cagliari lies the historic Castello district, elevated above the city and overlooking the harbor. Its narrow streets, stone buildings, and open terraces offer sweeping views across the coastline and beyond. The city itself is both cultural and dynamic, serving as Sardinia’s economic, educational, and administrative center, while maintaining a strong sense of place rooted in tradition.\n\nWith its blend of history, architecture, and coastal atmosphere, Cagliari offers more than a visit; it provides a deeper connection to the island’s character and heritage.",
    contact: {
      distance: "Around a 45 min drive from you",
      phone: "Not Available",
      email: "Not Available",
      website: "https://en.wikipedia.org/wiki/Cagliari",
      menu: "",
      map: "https://maps.app.goo.gl/tYAbbtkp22Ge5i6p7",
      reviews: "",
    },
    images: {
      image1: assetPath("Image 1 Destination Detail-5.png"),
      image2: assetPath("Image 2 Destination Detail-5.png"),
      gallery: [
        assetPath("Gallery 1 Destination Detail-1-5.png"),
        assetPath("Gallery 2 Destination Detail-1-5.png"),
        assetPath("Gallery 1 Destination Detail-6.png"),
        assetPath("Gallery 2 Destination Detail-6.png"),
      ],
    },
    highlights: [
      "Capital of Sardinia with over 5,000 years of continuous human history",
      "Historic Castello district with panoramic views over the city and harbor",
      "Rich architectural mix shaped by Roman, medieval, and later influences",
      "Major cultural and educational center with museums and institutions",
      "Strategic Mediterranean port with strong economic and historical significance",
      "Authentic urban experience blending tradition with modern life",
    ],
    reviews: [],
    hideReviews: true,
  },
};

function DestinationDetailsMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const { slug, lang } = useParams();
  const numericId = Number(slug);
  const destinationPost = Number.isNaN(numericId)
    ? Posts.find((post) => post.slug === slug) || Posts[0]
    : Posts.find((post) => post.id === numericId) || Posts[0];
  const currentDestination = DESTINATION_DETAILS_BY_SLUG[slug];
  const categoryCounts = useMemo(
    () =>
      Object.values(DESTINATION_DETAILS_BY_SLUG).reduce(
        (acc, destination) => {
          const category = (destination.category || "").toLowerCase();
          if (category === "beaches") acc.beaches += 1;
          else if (category === "landmarks") acc.landmarks += 1;
          else if (category === "dining") acc.dining += 1;
          else if (category === "hubs") acc.hubs += 1;
          return acc;
        },
        { beaches: 0, landmarks: 0, dining: 0, hubs: 0 },
      ),
    [],
  );
  const nearbyDestinations = useMemo(() => {
    const filtered = NEARBY_DESTINATIONS.filter((item) => item.slug !== slug);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [slug]);

  const openModal = (imageSrc, event) => {
    event.preventDefault();
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img">
                <img
                  src={
                    currentDestination?.images.image1 ||
                    `/assets/img/destination/${destinationPost.bannerImg}`
                  }
                  alt=""
                />
              </div>
              <div className="page-content d-block">
                <div
                  className="page-meta mt-50 mb-45 d-flex align-items-center"
                  style={{ gap: "8px" }}
                >
                  <Link className="page-tag mr-5" to="/tour">
                    {currentDestination?.category || "Featured"}
                  </Link>
                  <span className="ratting">
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>{currentDestination?.rating || "4.8"}</span>
                  </span>
                </div>
                <h2 className="box-title">
                  {currentDestination?.headerTitle ||
                    "Explore the Beauty of Maldives and enjoy"}
                </h2>
                <p className="blog-text mb-30">
                  {(
                    currentDestination?.bodyText ||
                    "voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                  )
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <React.Fragment key={`${paragraph}-${index}`}>
                        {index > 0 ? (
                          <>
                            <br />
                            <br />
                          </>
                        ) : null}
                        {paragraph}
                      </React.Fragment>
                    ))}
                </p>
                <h2 className="box-title">Basic Information</h2>
                <div className="destination-checklist">
                  <div className="checklist style2">
                    <ul>
                      <li>Distance</li>
                      <li>Phone</li>
                      <li>Email</li>
                      <li>Website</li>
                      {currentDestination?.contact.menu ? <li>Menu</li> : null}
                      <li>Location</li>
                      <li>Reviews</li>
                    </ul>
                  </div>
                  <div className="checklist style2">
                    <ul>
                      <li>
                        {currentDestination?.contact.distance ||
                          "Around a 10 min drive from you"}
                      </li>
                      <li>{currentDestination?.contact.phone || "-"}</li>
                      <li>{currentDestination?.contact.email || "-"}</li>
                      <li>
                        {currentDestination?.contact.website ? (
                          <a
                            href={currentDestination.contact.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open Website
                          </a>
                        ) : (
                          "-"
                        )}
                      </li>
                      {currentDestination?.contact.menu ? (
                        <li>
                          <a
                            href={currentDestination.contact.menu}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open Menu
                          </a>
                        </li>
                      ) : null}
                      <li>
                        {currentDestination?.contact.map ? (
                          <a
                            href={currentDestination.contact.map}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open in Maps
                          </a>
                        ) : (
                          "-"
                        )}
                      </li>
                      <li>
                        {currentDestination?.contact.reviews ? (
                          <a
                            href={currentDestination.contact.reviews}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Reviews
                          </a>
                        ) : (
                          "-"
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="service-inner-img mb-40">
                  <img
                    src={
                      currentDestination?.images.image2 ||
                      "/assets/img/destination/destination-inner-1.jpg"
                    }
                    alt=""
                  />
                </div>
                <h2 className="box-title">Highlights</h2>
                <div className="checklist">
                  <ul>
                    {(
                      currentDestination?.highlights || [
                        "Visit most popular location of Maldives",
                        "Buffet Breakfast for all traveler with good quality.",
                        "Expert guide always guide you and give informations.",
                        "Best Hotel for all also great food.",
                        "Helping all traveler for Money Exchange.",
                        "Buffet Breakfast for all traveler with good quality.",
                      ]
                    ).map((highlight, index) => (
                      <li key={`${highlight}-${index}`}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="destination-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">Destination Gallery</h3>
                <div className="row gy-4 gallery-row filter-active">
                  {(
                    currentDestination?.images.gallery || [
                      "/assets/img/gallery/gallery_6_1.jpg",
                      "/assets/img/gallery/gallery_6_2.jpg",
                      "/assets/img/gallery/gallery_6_3.jpg",
                      "/assets/img/gallery/gallery_6_4.jpg",
                    ]
                  ).map((galleryImage, index) => (
                    <div
                      className="col-xxl-auto filter-item"
                      key={`${galleryImage}-${index}`}
                    >
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img
                            src={galleryImage}
                            alt="gallery"
                            onClick={(e) => openModal(galleryImage, e)}
                          />
                          <Link
                            to={galleryImage}
                            className="icon-btn popup-image"
                            onClick={(e) => openModal(galleryImage, e)}
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {!currentDestination?.hideReviews && (
                <div className="th-comments-wrap style2 destination-detail-reviews">
                  <h2 className="blog-inner-title h4">
                    Reviews ({(currentDestination?.reviews || []).length || 3})
                  </h2>
                  <ul className="comment-list">
                    {(currentDestination?.reviews || []).map(
                      (review, index) => (
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
                                  {Array.from({ length: review.stars }).map(
                                    (_, starIndex) => (
                                      <i
                                        key={`star-${starIndex}`}
                                        className="fa-solid fa-star"
                                      />
                                    ),
                                  )}
                                </span>
                              </div>
                              <p className="text">{review.text}</p>
                            </div>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}{" "}
              {/* Comment end */} {/* Comment Form */}
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget widget_categories  ">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=beaches`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Beaches
                    </Link>
                    <span>({categoryCounts.beaches})</span>
                  </li>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=landmarks`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Landmarks
                    </Link>
                    <span>({categoryCounts.landmarks})</span>
                  </li>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=dining`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Dining
                    </Link>
                    <span>({categoryCounts.dining})</span>
                  </li>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=hubs`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Hubs
                    </Link>
                    <span>({categoryCounts.hubs})</span>
                  </li>
                </ul>
              </div>
              <div className="widget  ">
                <h3 className="widget_title">Nearby</h3>
                <div className="recent-post-wrap">
                  {nearbyDestinations.map((item) => (
                    <div className="recent-post" key={item.slug}>
                      <div className="media-img">
                        <Link to={`/${lang || "en"}/destination/${item.slug}`}>
                          <img src={item.image} alt={item.title} />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link
                            className="text-inherit"
                            to={`/${lang || "en"}/destination/${item.slug}`}
                          >
                            {item.title}
                          </Link>
                        </h4>
                        <span className="destination-subtitle">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  {(
                    currentDestination?.keywords || [
                      "Beaches",
                      "Landmarks",
                      "Dining",
                    ]
                  ).map((keyword) => (
                    <Link
                      key={keyword}
                      to={`/${lang || "en"}/destination?keyword=${keyword.toLowerCase()}`}
                    >
                      {keyword}
                    </Link>
                  ))}
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
                      to={`/${lang || "en"}/contact`}
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
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
      />
    </section>
  );
}

export default DestinationDetailsMain;
