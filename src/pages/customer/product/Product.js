import '../../../style/product/style.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    return (
        <div className="product-container">
            <div className="product-header">
                <h1 className="product-title">Professional Website Design - Elevate Your Brand</h1>
                <p className="product-content">We offer optimized, modern, and SEO-friendly website design services tailored to individuals, small businesses, and large organizations. Let your website become a powerful marketing tool and make a strong impression on your customers.</p>
            </div>
            <h2 className='h2-title'>Our Services</h2>
            <h3 className='product-h3-title'>
                1. Business Websites
            </h3>
            <div className="box-content-data">
                <p className="data-content">Professional website design tailored for businesses to build a strong brand image and enhance customer engagement.
                    <ul>
                        <li>Modern, responsive design compatible with all devices.</li>
                        <li>Integrated product and service management.</li>
                        <li>Optimized for speed and SEO.</li>
                    </ul>
                </p>
                <div className="div-product row">
                    <h4 className="div-product-title">Our Product</h4>
                    <div className="col-md-3 item-box">
                        <img className="image-product" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735822766/screencapture-localhost-3000-customer-2025-01-02-19_46_47_wnkdja.png" />
                        <Link to="/" className="btn-link">View details</Link>
                    </div>
                </div>

            </div>
            <h3 className='product-h3-title'>
                2. E-commerce Websites
            </h3>
            <div className="box-content-data">
                <p className="data-content">Develop feature-rich online stores with functionalities like product management, shopping carts, online payment, and order management.
                    <ul>
                        <li>Integrated payment systems: PayPal, MoMo, ZaloPay.</li>
                        <li>Promotion and discount code features.</li>
                        <li>Detailed sales reporting.</li>
                    </ul>
                </p>
                <div className="div-product row">
                    <h4 className="div-product-title">Our Product</h4>
                    <div className="col-md-3 item-box">
                        <img className="image-product" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735821583/juno-page1_x8nawz.png" />
                        <Link to="/" className="btn-link">View details</Link>
                    </div>
                </div>

            </div>
            <h3 className='product-h3-title'>
                3. Personal & Portfolio Websites
            </h3>
            <div className="box-content-data">
                <p className="data-content">Create a personal brand with a website showcasing your profile, experiences, and past projects.
                    <ul>
                        <li>Creative design reflecting your personality.</li>
                        <li>Suitable for freelancers, artists, and professionals.</li>
                    </ul>
                </p>
                <div className="div-product row">
                    <h4 className="div-product-title">Our Product</h4>
                    <div className="col-md-3 item-box">
                        <img className="image-product" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735823924/screencapture-localhost-3000-2025-01-02-20_18_07_wunozd.png" />
                        <Link to="/" className="btn-link">View details</Link>
                    </div>
                </div>

            </div>
            <h3 className='product-h3-title'>
                4. News & Blog Websites
            </h3>
            <div className="box-content-data">
                <p className="data-content">Build a platform to share quality content and attract readers.
                    <ul>
                        <li>Convenient content management system (CMS).</li>
                        <li>Optimized for all devices.</li>
                        <li>Integrated comments and social sharing features.</li>
                    </ul>
                </p>
                <div className="div-product row">
                    <h4 className="div-product-title">Our Product</h4>
                    <div className="col-md-3 item-box">
                        <img className="image-product" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735823216/screencapture-localhost-3000-2025-01-02-20_06_23_pj0r4a.png" />
                        <Link to="/" className="btn-link">View details</Link>
                    </div>
                </div>

            </div>
            <h3 className='product-h3-title'>
                5. Custom Websites
            </h3>
            <div className="box-content-data">
                <p className="data-content">Need a unique website tailored to your ideas and business goals? We are ready to bring your vision to life.
                    <ul>
                        <li>Analysis and consultation for optimal solutions.</li>
                        <li>Custom development to meet your specific requirements.</li>
                        <li>Long-term support and technical warranty.</li>
                    </ul>
                </p>

            </div>
            <h2 className="h2-title">
                Benefits of Choosing Us
            </h2>
            <ul>
                <li className="li-data"><span className="li-highlight">Modern Design:</span>Attractive, user-friendly interfaces.</li>
                <li className="li-data"><span className="li-highlight">SEO-Friendly:</span>Websites that rank easily on search engines.</li>
                <li className="li-data"><span className="li-highlight">High Security:</span>Guaranteed data safety.</li>
                <li className="li-data"><span className="li-highlight">Dedicated Service:</span>Fast support, available 24/7.</li>
            </ul>
        </div>
    )
}
export default Product