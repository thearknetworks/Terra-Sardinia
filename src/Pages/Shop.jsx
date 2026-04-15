import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ShopInner from '../Components/Shop/ShopInner'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function Shop() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Shops"
            />
            <ShopInner />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Shop
