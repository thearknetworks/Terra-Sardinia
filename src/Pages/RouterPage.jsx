import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RootRedirect from "../Components/RootRedirect";
import LanguageWrapper from "../Components/LanguageWrapper";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import HomeFour from "./HomeFour";
import About from "./About";
import LoadTop from "../Components/LoadTop";
import Destination from "./Destination";
import DestinationDetails from "./DestinationDetails";
import Service from "./Service";
import ServiceDetails from "./ServiceDetails";
import Activities from "./Activities";
import ActivitiesDetails from "./ActivitiesDetails";
import Shop from "./Shop";
import ShopDetails from "./ShopDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Wishlist from "./Wishlist";
import Gallery from "./Gallery";
import Tour from "./Tour";
import TourDetails from "./TourDetails";
import VillaVerde from "./VillaVerde";
import VillaVerdeDetails from "./VillaVerdeDetails";
import VillaAntares from "./VillaAntares";
import TourGuide from "./TourGuide";
import TourGuiderDetails from "./TourGuiderDetails";
import Faq from "./Faq";
import Pricing from "./Pricing";
import Error from "./Error";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Stays from "./Stays";
import Ferry from "./Ferry";
import Booking from "./Booking";

function RouterPage() {
  return (
    <div>
      <Router>
        <LoadTop />
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route
            path="/booking"
            element={<Navigate to="/en/booking" replace />}
          />
          <Route path="/faq" element={<Navigate to="/en/faqs" replace />} />
          <Route path="/faqs" element={<Navigate to="/en/faqs" replace />} />
          <Route path="/:lang" element={<LanguageWrapper />}>
            <Route path="home" element={<HomeOne />} />
            <Route path="home-tour" element={<HomeTwo />} />
            <Route path="home-agency" element={<HomeThree />} />
            <Route path="home-yacht" element={<HomeFour />} />
            <Route path="about" element={<About />} />
            <Route path="destination" element={<Destination />} />
            <Route path="destination/:slug" element={<DestinationDetails />} />
            <Route path="service" element={<Service />} />
            <Route path="service/:id" element={<ServiceDetails />} />
            <Route path="activities" element={<Activities />} />
            <Route path="activities-details" element={<ActivitiesDetails />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ShopDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="tour" element={<Tour />} />
            <Route path="tour-details" element={<TourDetails />} />
            <Route path="villa-verde" element={<VillaVerde />} />
            <Route path="villa-antares" element={<VillaAntares />} />
            <Route
              path="villa-verde/:room_name"
              element={<VillaVerdeDetails />}
            />
            <Route path="tour-guide" element={<TourGuide />} />
            <Route path="tour-guide/:id" element={<TourGuiderDetails />} />
            <Route path="faqs" element={<Faq />} />
            <Route path="faq" element={<Navigate to="faqs" replace />} />
            <Route path="price" element={<Pricing />} />
            <Route path="error" element={<Error />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stays" element={<Stays />} />
            <Route path="service/ferry" element={<Ferry />} />
            <Route path="services/ferry" element={<Ferry />} />
            <Route path="services/:slug" element={<ServiceDetails />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPage;
