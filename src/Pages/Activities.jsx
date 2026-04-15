import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ActivitiesInner from '../Components/Activities/ActivitiesInner'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function Activities() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Activities"
            />
            <ActivitiesInner />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Activities
