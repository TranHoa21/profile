import React, { useState } from "react";
import "../../../style/home/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
const Home = () => {
    const [showVision, setShowVision] = useState(false);
    const [showMission, setShowMission] = useState(false);

    const toggleVision = () => {
        setShowVision(!showVision);
    };
    const toggleMission = () => {
        setShowMission(!showMission);
    };
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [currency, setCurrency] = useState('USD');
    const [conversionRates, setConversionRates] = useState({
        USD: 1,
        VND: 24000,
        EUR: 0.9,
    });

    const pricing = {
        basic: 250,
        medium: 625,
        vip: 1250,
    };

    const convertPrice = (price) => {
        const convertedPrice = price * conversionRates[currency];
        return convertedPrice.toLocaleString("en-US"); // Thêm dấu phân cách hàng nghìn và bỏ .00
    }; return (
        <div div className="all-home">
            <div className="home-container">
                <h1 className="title-home">Welcome to Tran Hoa's Web Design</h1>
                <img className="image-bg" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716349604/Remove-bg.ai_1716340559804_cnaowq.png" />
            </div>
            <div className="home-data-core">
                <div className="row-home-data-core">
                    <div className="home-data-item">
                        <img className="image-icon-data" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716420007/Remove-bg.ai_1716354735264_b6jwqf.png" />
                        <div className="item-data-home">
                            <h4 className="content-data-home">Build SEO standard website</h4>
                        </div>
                    </div>
                    <div className="home-data-item">
                        <img className="image-icon-data" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716419998/Remove-bg.ai_1716354754871_rce0yt.png" />
                        <div className="item-data-home">
                            <h4 className="content-data-home">Optimize website performance</h4>
                        </div>
                    </div>
                    <div className="home-data-item">
                        <img className="image-icon-data" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716420643/psd_ui_3d_render_megaphone_lxgzxn.png" />
                        <div className="item-data-home">
                            <h4 className="content-data-home">Proficient in using Reactjs, NextJs</h4>
                        </div>
                    </div>
                    <div className="home-data-item">
                        <img className="image-icon-data" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716420647/yellow_trophy_cup_winner_success_champion_icon_sign_or_symbol_3d_illustration_tj6kei.png" />
                        <div className="item-data-home">
                            <h4 className="content-data-home">Secure and safe web design</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="professional-container">
                <div className="professional-container-title">
                    <h1 className="professional-title">Professional Website Design and Development</h1>
                </div>
                <div className="professional-content">
                    <div className="professional-content-row">
                        <div className="professional-content ">
                            <img className="image-professional" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716423494/Remove-bg.ai_1716340517579_tpfavk.png" />
                        </div>
                        <div className="professional-content content-data ">
                            <div className="professional-content-box1">
                                <h1 className="professional-content-title">Building Websites That Drive Results</h1>
                                <p className="professional-content-data">I specialize in creating websites that are both visually appealing and user-friendly, with a focus on optimizing website performance. I use my technical and creative skills to design and develop effective websites that drive traffic and increase conversions.</p>
                            </div>
                            <div className="professional-content-box2">
                                <div className="professional-vision">
                                    <h3 className="professional-vision-title" onClick={toggleVision}>My Vision</h3>
                                    {showVision && (
                                        <p className="professional-content-data">To empower businesses with effective digital solutions that enhance their online presence and drive growth.</p>
                                    )}
                                </div>
                                <div className="professional-vision">
                                    <h3 className="professional-vision-title" onClick={toggleMission}>My Mission</h3>
                                    {showMission && (
                                        <p className="professional-content-data">To deliver customized web design and development services that cater to the unique needs of each client, with a focus on quality, reliability, and innovation.</p>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="expertise-container">
                <div className="expertise-box1">
                    <h1 className="expertise-title">Expertise and Experience</h1>
                    <div className="content">
                        <p>My years of experience in web design and development have allowed me to specialize in website SEO, website design, and performance optimization, providing businesses with a complete digital solution.</p>
                    </div>
                </div>
                <div className="row expertise-box2">
                    <div className="col-md-2 box2-item col-sm-6 ">
                        <p className="box2-item-time">2019-2020: Web Developer</p>
                        <h4 className="box2-item-cty">ABC Company</h4>
                        <p className="box2-item-content">Developed custom web applications for clients</p>
                        <NavLink className="box2-item-readmore">Read More</NavLink>
                    </div>
                    <div className="col-md-2 box2-item col-sm-6 ">
                        <p className="box2-item-time">2020-2022: Web Designer</p>
                        <h4 className="box2-item-cty">XYZ Web Agency</h4>
                        <p className="box2-item-content">Designed and developed websites for clients in a variety of industries</p>
                        <NavLink className="box2-item-readmore">Read More</NavLink>
                    </div>
                    <div className="col-md-2 box2-item col-sm-6 ">
                        <p className="box2-item-time">2020-2022: Performance Optimization Specialist</p>
                        <h4 className="box2-item-cty">Digital Marketing Company</h4>
                        <p className="box2-item-content">Optimized website performance for clients, improving page speed and load times</p>
                        <NavLink className="box2-item-readmore">Read More</NavLink>
                    </div>
                    <div className="col-md-2 box2-item col-sm-6 ">
                        <p className="box2-item-time">2021-Present: Full Stack Developer</p>
                        <h4 className="box2-item-cty">Web Development Agency</h4>
                        <p className="box2-item-content">Developed and maintained websites for clients, providing full-stack development services</p>
                        <NavLink className="box2-item-readmore">Read More</NavLink>
                    </div>

                </div>
                <div className="row expertise-box2-data-container">
                    <div className="col-sm-5 data-expertise-container">
                        <div className="data-expertise-item">
                            <span className="expertise-item-title">
                                Website SEO
                            </span>
                            <div className="expertise-item-data">
                                <div className="expertise-item-data-color"></div>
                            </div>
                        </div>
                        <div className="data-expertise-item">
                            <span className="expertise-item-title">
                                Website Design
                            </span>
                            <div className="expertise-item-data">
                                <div className="expertise-item-data-color-design"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 data-expertise-container">
                        <div className="data-expertise-item">
                            <span className="expertise-item-title">
                                Performance Optimization
                            </span>
                            <div className="expertise-item-data">
                                <div className="expertise-item-data-color-performance"></div>
                            </div>
                        </div>
                        <div className="data-expertise-item">
                            <span className="expertise-item-title">
                                E-commerce Development
                            </span>
                            <div className="expertise-item-data">
                                <div className="expertise-item-data-color-e-commerce"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="professional-website-container">
                <div className="professional-website-box">
                    <h1 className="professional-website-box-title" >Professional Website Design and Development Services</h1>
                    <div className="professional-website-box-content">
                        <p className="professional-website-box-content-data">As a professional website designer and developer, I provide customized services to suit the unique needs of each client. With my technical and creative skills, I design and develop effective websites that drive traffic and increase conversions.
                        </p>
                    </div>
                </div>
                <div className="row professional-website-box">
                    <div className="col-sm-5 professional-website-box-item active">
                        <div className="website-box-item-data">
                            <img className="professional-website-box-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716516040/circle_14026656_cjru48.png" />
                            <h3 className="professional-website-box-item-title">Website SEO</h3>
                            <p className="professional-website-box-item-content">I specialize in website SEO, providing businesses with the tools and techniques they need to rank higher on Google and other search engines, driving traffic and improving visibility.</p>
                            <NavLink className="professional-website-box-item-link" href="">Read More</NavLink>
                        </div>

                    </div>
                    <div className="col-sm-5 professional-website-box-item-no-active">
                        <div className="website-box-item-data-no-active">
                            <img className="professional-website-box-item-image-no-active" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716515577/check-mark_1442912_gpk1hr.png" />
                            <h3 className="professional-website-box-item-title-no-active">Website Design</h3>
                            <p className="professional-website-box-item-content-no-active">My website design expertise lies in creating visually appealing, user-friendly interfaces, with a focus on usability and accessibility to provide an optimal user experience.</p>
                            <NavLink className="professional-website-box-item-link-no-active" href="">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="row professional-website-box">
                    <div className="col-sm-5 professional-website-box-item-no-active">
                        <div className="website-box-item-data-no-active">
                            <img className="professional-website-box-item-image-no-active" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716515577/check-mark_1442912_gpk1hr.png" />
                            <h3 className="professional-website-box-item-title-no-active">Performance Optimization</h3>
                            <p className="professional-website-box-item-content-no-active">I excel in performance optimization, improving page speed, and load times, enhancing user experience, and reducing bounce rates.</p>
                            <NavLink className="professional-website-box-item-link-no-active" href="">Read More</NavLink>
                        </div>
                    </div>
                    <div className="col-sm-5 professional-website-box-item-no-active">
                        <div className="website-box-item-data-no-active">
                            <img className="professional-website-box-item-image-no-active" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716515577/check-mark_1442912_gpk1hr.png" />
                            <h3 className="professional-website-box-item-title-no-active">E-commerce Development</h3>
                            <p className="professional-website-box-item-content-no-active">I provide e-commerce development services, creating online stores that are easy to use, visually appealing, and optimized for conversions.</p>
                            <NavLink className="professional-website-box-item-link-no-active" href="">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="successful-projects-container">
                <div className="row successful-projects-box">
                    <div className="col-sm-5 successful-projects-item">
                        <h1 className="successful-projects-item-title">Some of My Successful Projects</h1>
                    </div>
                    <div className="col-sm-5 successful-projects-item">
                        <p className="successful-projects-item-content">One of my standout achievements includes developing a custom e-commerce website for a fashion retailer. My design significantly enhanced user experience and interface, leading to a 40% increase in online sales and positive market feedback.</p>
                    </div>
                </div>
                <div className="silde-projects">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50} autoplay={false}
                        slidesPerView={isMobile ? 1 : 3}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="slider"
                    >
                        <SwiperSlide className="slider-item">
                            <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735822766/screencapture-localhost-3000-customer-2025-01-02-19_46_47_wnkdja.png" />
                        </SwiperSlide>
                        <SwiperSlide className="slider-item">
                            <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716652644/screencapture-localhost-3000-2024-05-25-22_56_33_os9csk.png" />
                        </SwiperSlide>
                        <SwiperSlide className="slider-item">
                            <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735821583/juno-page1_x8nawz.png" />
                        </SwiperSlide>
                        <SwiperSlide className="slider-item">
                            <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735823216/screencapture-localhost-3000-2025-01-02-20_06_23_pj0r4a.png" />
                        </SwiperSlide>
                        <SwiperSlide className="slider-item">
                            <img className="silder-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735823924/screencapture-localhost-3000-2025-01-02-20_18_07_wunozd.png" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className="row contact-home-container">
                <div className="col-sm-5 contact-home-item">
                    <img className="contact-home-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716529005/Remove-bg.ai_1716340559804_lyjigf.png" />
                    <div className="contact-home-box1">
                        <h5 className="contact-home-title" >Performance Optimization</h5>
                        <p className="contact-home-year">5 Years</p>
                    </div>
                    <div className="contact-home-box2">
                        <h5 className="contact-home-title" >Website Design</h5>
                        <p className="contact-home-year">5 Years</p>
                    </div>
                </div>
                <div className="col-sm-6 contact-home-item">
                    <div className="contact-home-data">
                        <h1 className="contact-home-data-title">Let's Work Together</h1>
                        <p className="contact-home-data-content">If you are looking for a professional website designer and developer, look no further. I provide customized services to suit the unique needs of each client. Contact me today to discuss how I can help you achieve your digital goals.</p>
                        <div className="contact-home-data-item">
                            <img className="contact-home-data-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716535026/verified_6711626_bmmzpe.png" />
                            <p className="contact-home-data-item-content" >Expertise in website design and development</p>
                        </div>
                        <div className="contact-home-data-item">
                            <img className="contact-home-data-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716535026/verified_6711626_bmmzpe.png" />
                            <p className="contact-home-data-item-content" >Customized solutions for each client</p>
                        </div>
                        <div className="contact-home-data-item">
                            <img className="contact-home-data-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716535026/verified_6711626_bmmzpe.png" />
                            <p className="contact-home-data-item-content" >Professional, reliable, and innovative services</p>
                        </div>
                    </div>
                    <button className="contact-home-btn">Let's Talk</button>
                </div>
            </div>

            <div className="feedback-client-container">
                <div className="row feedback-client">
                    <div className="col-sm-5 feedback-client-box">
                        <h1 className="feedback-client-title"> Client Testimonials </h1>
                    </div>
                    <div className="col-sm-5 feedback-client-box">
                        <p className="feedback-client-content">
                            “Tran Hoa’s expertise in website design and development is unparalleled. He provided us with a customized solution that exceeded our expectations and helped us achieve our digital goals.”
                        </p>
                    </div>
                </div>
                <div className="row box1-feedback-client">
                    <div className="col-sm-5 feedback-client-content-item">
                        <div className="feedback-data">
                            <img className="feedback-client-content-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716538419/chat_5961257_s6iur5.png" />
                            <div className="feedback-client-content-item-data">"Tran Hoa's expertise in website design and development is unparalleled. He provided us with a customized solution that exceeded our expectations and helped us achieve our digital goals."</div>
                            <div className="feedback-client-box-av-name">
                                <img className="feedback-client-box-av-name-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452788/portrait-young-man-yellow-scene_fhk3gp.jpg" />
                                <p className="feedback-client-box-av-name-username">John Smith</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 feedback-client-content-item-active">
                        <div className="feedback-data-active">
                            <img className="feedback-client-content-item-image-active" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716538410/chat_5961307_ikverz.png" />
                            <div className="feedback-client-content-item-data-active">
                                "Tran Hoa's performance optimization skills helped us improve our website speed and load times, enhancing the user experience and reducing bounce rates. Highly recommended for top-tier performance optimization services."</div>
                            <div className="feedback-client-box-av-name-active">
                                <img className="feedback-client-box-av-name-avatar-active" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452784/front-view-angry-model_ugk9pm.jpg" />
                                <p className="feedback-client-box-av-name-username-active">Ginger Jane</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row box1-feedback-client">
                    <div className="col-sm-5 feedback-client-content-item">
                        <div className="feedback-data">
                            <img className="feedback-client-content-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716538419/chat_5961257_s6iur5.png" />
                            <div className="feedback-client-content-item-data">"Tran Hoa's website SEO expertise helped us rank higher on Google, driving traffic and improving visibility. His professionalism and reliability make him a go-to for all our digital needs."</div>
                            <div className="feedback-client-box-av-name">
                                <img className="feedback-client-box-av-name-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452785/portrait-smiling-blonde-woman_gufmzp.jpg" />
                                <p className="feedback-client-box-av-name-username">Tarissa Kith</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 feedback-client-content-item">
                        <div className="feedback-data">
                            <img className="feedback-client-content-item-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716538419/chat_5961257_s6iur5.png" />
                            <div className="feedback-client-content-item-data">"Tran Hoa's e-commerce development services were excellent. He created an online store that was easy to use, visually appealing, and optimized for conversions, leading to a 40% increase in online sales. Highly recommend for top-tier e-commerce development services."</div>
                            <div className="feedback-client-box-av-name">
                                <img className="feedback-client-box-av-name-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728452784/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_fzbvun.jpg" />
                                <p className="feedback-client-box-av-name-username">June Snow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-home-container">
                <h1 className="pricing-home-title">Pricing Packages</h1>
                <p className="pricing-home-content">I offer customized pricing packages to suit the unique needs of each client, with a focus on quality, reliability, and affordability.</p>
                <div className="price-list">
                    <div>
                        <label htmlFor="currency-selector">Choose Currency: </label>
                        <select
                            id="currency-selector"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="VND">VND</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <div className=" row pricing-table ">
                        <div className="pricing-column col-sm-4">
                            <div className="pricing-header hder-1">
                                <h2 >Basic Package</h2>
                                <h3 className="price"> Starting from {`${convertPrice(pricing.basic)} ${currency}`}</h3>
                            </div>
                            <h5 style={{ paddingTop: '25px' }}> MODDUL WEBSITE</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Home
                                        </td>
                                        <td style={{ paddingLeft: '5px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Banner
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Category  </td>
                                        <td style={{ paddingLeft: '5px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" /> Page Admin
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" /> Blog </td>
                                        <td style={{ paddingLeft: '28px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Contact
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="TD1">Integrated part</h5>
                            <ul className="pricing-features">
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Design according to available templates</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" /> Livechat, Messenger, Zalo</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Compatible with mobile devices</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Content Manager (CMS)</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" />Multi language</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Free SSL security</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" />Optimize speed</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />SEO standard design</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Free hosting for 1 year</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" />Install google analytics</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Support updating 10 articles/products</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" />E-commerce features</li>

                            </ul>
                            <button className="btn">Get Started</button>
                        </div>
                        <div className="pricing-column col-sm-4">
                            <div className="pricing-header hder-2">
                                <h2 >Medium Package</h2>
                                <h3 className="price"> Starting from {`${convertPrice(pricing.medium)} ${currency}`}</h3>
                            </div>
                            <h5 style={{ paddingTop: '25px' }}> MODDUL WEBSITE</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Home
                                        </td>
                                        <td style={{ paddingLeft: '5px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Banner
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Category</td>
                                        <td style={{ paddingLeft: '5px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Page Admin
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Blog</td>
                                        <td style={{ paddingLeft: '28px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Contact
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5 className="TD1">Integrated part</h5>
                            <ul className="pricing-features">
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Design according to available templates</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Livechat, Messenger, Zalo</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Compatible with mobile devices</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Content Manager (CMS)</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716543224/close_1828666_nleh1i.png" />Multi language</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Free SSL security</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Optimize speed</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />SEO standard design</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Free hosting for 1 year</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Install google analytics</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Support updating 20 articles/products</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />E-commerce features</li>

                            </ul>
                            <button className="btn">Get Started</button>
                        </div>
                        <div className="pricing-column col-sm-4">
                            <div className="pricing-header hder-3">
                                <h2>VIP Package</h2>
                                <h2 className="price"> Starting from {`${convertPrice(pricing.vip)} ${currency}`}</h2>
                            </div>
                            <h5 style={{ paddingTop: '25px' }}> MODDUL WEBSITE</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Home
                                        </td>
                                        <td style={{ paddingLeft: '5px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Banner
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Category </td>
                                        <td style={{ paddingLeft: '5px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Page Admin
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Blog</td>
                                        <td style={{ paddingLeft: '28px' }}></td>
                                        <td>
                                            <img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Contact
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5 className="TD1">Integrated part</h5>
                            <ul className="pricing-features">
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Design according to available templates</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" /> Livechat, Messenger, Zalo</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Compatible with mobile devices</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Content Manager (CMS)</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Multi language</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Free SSL security</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Optimize speed</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />SEO standard design</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Free hosting for 1 year</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Install google analytics</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Support updating 30 articles/products</li>
                                <li><img src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1716542990/green-tick_dq8x0h.png" />Full featured e-commerce</li>

                            </ul>
                            <button className="btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-box">
                <div className="news-box-title">
                    <h5 className="news-title">News</h5>
                    <div className="news-btn">
                        <button className="previous"><img className="previous-icon"
                            src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728934558/arrow-left_5082834_uup8uq.png" /></button>
                        <button className="next"><img className="next-icon"
                            src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728934552/arrow-right_5082848_itat8z.png" /></button>
                    </div>
                </div>
                <div className="row news">
                    <div className="post-box col-sm-3 col-md-3">
                        <img className="post-image"
                            src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408006/html_le8svd.png" />
                        <h5 className="post-title">LG ra mắt loạt tv oled 4k tích hợp hdr tại ces 2016</h5>
                        <p className="post-date">08/01/2016</p>
                        <p className="post-describe">LG vừa giới thiệu loạt TV OLED 4K mới tại triển lãm CES 2016, trong đó
                            tiêu
                            biểu là 2 mẫu TV LG OLED 77/65-inch 08 và 65/66-inch E6 có tích hợp tính năng HDR. Theo đó ,
                            8
                            mẫu TV OLED 2016 đều được tích hợp những...</p>
                    </div>
                    <div className="post-box col-sm-3 col-md-3">
                        <img className="post-image"
                            src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408006/html_le8svd.png" />
                        <h5 className="post-title">LG ra mắt loạt tv oled 4k tích hợp hdr tại ces 2016</h5>
                        <p className="post-date">08/01/2016</p>
                        <p className="post-describe">LG vừa giới thiệu loạt TV OLED 4K mới tại triển lãm CES 2016, trong đó
                            tiêu
                            biểu là 2 mẫu TV LG OLED 77/65-inch 08 và 65/66-inch E6 có tích hợp tính năng HDR. Theo đó ,
                            8
                            mẫu TV OLED 2016 đều được tích hợp những...</p>
                    </div>
                    <div className="post-box col-sm-3 col-md-3">
                        <img className="post-image"
                            src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408006/html_le8svd.png" />
                        <h5 className="post-title">LG ra mắt loạt tv oled 4k tích hợp hdr tại ces 2016</h5>
                        <p className="post-date">08/01/2016</p>
                        <p className="post-describe">LG vừa giới thiệu loạt TV OLED 4K mới tại triển lãm CES 2016, trong đó
                            tiêu
                            biểu là 2 mẫu TV LG OLED 77/65-inch 08 và 65/66-inch E6 có tích hợp tính năng HDR. Theo đó ,
                            8
                            mẫu TV OLED 2016 đều được tích hợp những...</p>
                    </div>
                    <div className="post-box col-sm-3 col-md-3">
                        <img className="post-image"
                            src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728408006/html_le8svd.png" />
                        <h5 className="post-title">LG ra mắt loạt tv oled 4k tích hợp hdr tại ces 2016</h5>
                        <p className="post-date">08/01/2016</p>
                        <p className="post-describe">LG vừa giới thiệu loạt TV OLED 4K mới tại triển lãm CES 2016, trong đó
                            tiêu
                            biểu là 2 mẫu TV LG OLED 77/65-inch 08 và 65/66-inch E6 có tích hợp tính năng HDR. Theo đó ,
                            8
                            mẫu TV OLED 2016 đều được tích hợp những...</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
