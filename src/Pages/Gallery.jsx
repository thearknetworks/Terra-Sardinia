import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GalleryInner from '../Components/Gallery/GalleryInner'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function Gallery() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Gallery"
            />
            <GalleryInner />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Gallery
