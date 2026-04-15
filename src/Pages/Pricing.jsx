import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import PricingPlan from '../Components/Services/PricingPlan'
import Cta from '../Components/Services/Cta'
import FaqInnerTwo from '../Components/Faq/FaqInnerTwo'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollToTop'

function Pricing() {
    return (
        <div>
            <HeaderOne />
            <Breadcrumb
                title="Pricing Plan"
            />
            <PricingPlan className="space"/>
            <Cta />
            <FaqInnerTwo />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Pricing
