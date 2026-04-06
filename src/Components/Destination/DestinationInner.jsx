import React, { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import DestinationCard from './DestinationCard';
import DestinationCardTwo from './DestinationCardTwo';

const destinationPosts = [
    {
        id: 1,
        title: "Genn’e Mari",
        subtitle: "Crystal Waters",
        image: "/assets/img/destination/genne-mari-cover.png",
        slug: "genne-mari",
        tag: "beaches",
    },
    {
        id: 2,
        title: "Cann’e Sisa",
        subtitle: "Quiet Shores",
        image: "/assets/img/destination/canne-sisa-cover.png",
        slug: "canne-sisa",
        tag: "beaches",
    },
    {
        id: 3,
        title: "Porto Giunco",
        subtitle: "Iconic Beach",
        image: "/assets/img/destination/porto-giunco-cover.png",
        slug: "porto-giunco",
        tag: "beaches",
    },
    {
        id: 4,
        title: "Cala Delfino",
        subtitle: "Hidden Cove",
        image: "/assets/img/destination/cala-delfino-cover.png",
        slug: "cala-delfino",
        tag: "beaches",
    },
    {
        id: 5,
        title: "Cagliari",
        subtitle: "Historic City",
        image: "/assets/img/destination/cagliari-cover.png",
        slug: "cagliari",
        tag: "landmarks",
    },
    {
        id: 6,
        title: "Saint Remy",
        subtitle: "Historic Bastion",
        image: "/assets/img/destination/saint-remy-cover.png",
        slug: "saint-remy",
        tag: "landmarks",
    },
    {
        id: 7,
        title: "The Tower",
        subtitle: "Coastal Landmark",
        image: "/assets/img/destination/torre-delle-stelle-tower-cover.png",
        slug: "torre-delle-stelle-tower",
        tag: "landmarks",
    },
    {
        id: 8,
        title: "Andycoc",
        subtitle: "Beach Dining",
        image: "/assets/img/destination/andycoc-cover.png",
        slug: "andycoc",
        tag: "dining",
    },
    {
        id: 9,
        title: "Aquarium",
        subtitle: "Garden Dining",
        image: "/assets/img/destination/aquarium-cover.png",
        slug: "aquarium",
        tag: "dining",
    },
    {
        id: 10,
        title: "Mosaico",
        subtitle: "Refined Dining",
        image: "/assets/img/destination/mosaico-cover.png",
        slug: "mosaico",
        tag: "dining",
    },
    {
        id: 11,
        title: "Istellas Club",
        subtitle: "Beach Club",
        image: "/assets/img/destination/istellas-club-cover.png",
        slug: "istellas-club",
        tag: "dining",
    },
    {
        id: 12,
        title: "Palmira",
        subtitle: "Local Hub",
        image: "/assets/img/destination/centro-palmira-cover.png",
        slug: "centro-palmira",
        tag: "hubs",
    },
    {
        id: 13,
        title: "Café do Mar",
        subtitle: "Sunset Spot",
        image: "/assets/img/destination/cafe-do-mar-cover.png",
        slug: "cafe-do-mar",
        tag: "hubs",
    },
];

function DestinationInner() {
    const { lang } = useParams();
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('tab-grid');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const selectedTag = searchParams.get("tag");
    const filteredPosts = selectedTag
        ? destinationPosts.filter((post) => post.tag === selectedTag)
        : destinationPosts;

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <section className="space">
            <div className="container">
                <div className="th-sort-bar">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-4">
                            <div className="search-form-area">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="fa-light fa-magnifying-glass" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="sorting-filter-wrap">
                                <div className="nav" role="tablist">
                                    <Link
                                        to="#"
                                        id="tab-destination-grid"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-grid"
                                        role="tab"
                                        aria-controls="tab-grid"
                                        aria-selected="true"
                                        className={`${activeTab === 'tab-grid' ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => setActiveTab('tab-grid')}
                                    >
                                        <i className="fa-light fa-grid-2" />
                                    </Link>
                                    <Link
                                        to="#"
                                        id="tab-destination-list"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-list"
                                        role="tab"
                                        aria-controls="tab-list"
                                        aria-selected="false"
                                        className={`${activeTab === 'tab-list' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('tab-list')}
                                    >
                                        <i className="fa-solid fa-list" />
                                    </Link>
                                </div>
                                <form className="woocommerce-ordering" method="get">
                                    <select
                                        name="orderby"
                                        className="orderby"
                                        aria-label="destination order"
                                    >
                                        <option value="menu_order" >
                                            Default Sorting
                                        </option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-9 col-lg-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'tab-grid' ? 'show active' : ''}`} id="tab-grid" role="tabpanel"
                            >
                                <div className="row gy-30">
                                    {currentPosts.map((data, index) => (
                                        <div key={index} className="col-xxl-4 col-xl-6">
                                            <DestinationCard
                                                destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationSubtitle={data.subtitle}
                                                destinationSlug={data.slug}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'tab-list' ? 'show active' : ''}`} id="tab-list" role="tabpanel"
                            >
                                <div className="row gy-30">
                                    {currentPosts.map((data, index) => (
                                        <div key={index} className="col-12">
                                            <DestinationCardTwo
                                                destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationSubtitle={data.subtitle}
                                                destinationSlug={data.slug}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="th-pagination text-center mt-60 mb-0">
                            <ul>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i}>
                                        <Link
                                            className={currentPage === i + 1 ? 'active' : ''}
                                            to="#"
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </Link>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li>
                                        <Link className="next-page" to="#" onClick={() => handlePageChange(currentPage + 1)}>
                                            Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4">
                        <aside className="sidebar-area style2">
                            <div className="widget widget_categories  ">
                                <h3 className="widget_title">Categories</h3>
                                <ul>
                                    <li>
                                        <Link to={`/${lang || "en"}/destination?tag=beaches`}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Beaches
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to={`/${lang || "en"}/destination?tag=landmarks`}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Landmarks
                                        </Link>
                                        <span>(3)</span>
                                    </li>
                                    <li>
                                        <Link to={`/${lang || "en"}/destination?tag=dining`}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Dining
                                        </Link>
                                        <span>(4)</span>
                                    </li>
                                    <li>
                                        <Link to={`/${lang || "en"}/destination?tag=hubs`}>
                                            <img src="/assets/img/theme-img/map.svg" alt="" />
                                            Hubs
                                        </Link>
                                        <span>(2)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring The Green Spaces Of the island maldives
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    22/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Harmony With Nature Of Belgium Tour and travle
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    25/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-3.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring The Green Spaces Of Realar Residence
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    27/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Tour</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Rent</Link>
                                    <Link to="/blog">Innovate</Link>
                                    <Link to="/blog">Hotel</Link>
                                    <Link to="/blog">Modern</Link>
                                    <Link to="/blog">Luxury</Link>
                                    <Link to="/blog">Travel</Link>
                                </div>
                            </div>
                            <div
                                className="widget widget_offer  "
                                data-bg-src="/assets/img/bg/widget_bg_1.jpg"
                                style={{ backgroundImage: "url(/assets/img/bg/widget_bg_1.jpg)" }}
                            >
                                <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="Tourm" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <Link className="offter-num" to={+256214203215}>
                                                +256 214 203 215
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DestinationInner
