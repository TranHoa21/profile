import '../../../style/pricing/style.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

const Pricing = () => {
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
    };
    return (
        <div className="pricing-container">
            <div className="pricing-header">
                <h1 className="pricing-title">Pricing Plans - Tailored for Your Needs</h1>
                <p className="pricing-content">We offer flexible pricing plans designed to suit businesses of all sizes and requirements. Whether you're a freelancer, a startup, or an established business, we have the right package for you.</p>
            </div>
            <div className="pricing-home-container">
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
            <div className="why-ch-us">
                <h2 className="h2-title-wh">
                    Why Choose Us?
                </h2>
                <ul>
                    <li className="li-data">Transparent pricing with no hidden costs.</li>
                    <li className="li-data">High-quality websites delivered on time.</li>
                    <li className="li-data">Ongoing support to ensure your website runs smoothly.</li>
                    <li className="li-data">Free consultation to help you choose the best plan.</li>
                </ul>
            </div>
            <div className="get-started-section">
                <h2 className="get-started-title">Get Started Today!</h2>
                <p className="get-started-description">
                    Choose a plan that suits you, or contact us for a free consultation. Let's bring your ideas to life and build a website that drives success!
                </p>
            </div>

        </div>
    )
}
export default Pricing