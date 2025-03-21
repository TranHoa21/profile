import React from "react";
import "../../../style/contact/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Contact = () => {


    return (
        <div className="contact-body">
            <div className="online-courses row">
                <div className="col-md-6 online-courses-box">
                    <h1 className="online-courses-box-item-title">Contact Us</h1>
                </div>
                <div className="col-md-6 online-courses-box">
                    <p className="online-courses-box-item-content">Welcome to our Website Design Service Pricing page, where we offer two tailored plans to meet your unique needs: Basic and Premium. We are committed to providing flexible, high-quality, and affordable website design solutions for individuals and businesses alike. Whether you're an entrepreneur looking to establish your online presence or a company aiming for a professional and impactful website, our plans are designed with you in mind. Explore our options below to find the perfect fit for your goals and budget.</p>
                </div>
            </div>
            <div className="contact-container row">
                <div className="col-md-8 contact-form-container">
                    <form className="contact-form">
                        <div className="contact-form-group row">
                            <div className="col-md-6 contact-form-group-item">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter First Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 contact-form-group-item">
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter Last Name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-group row">
                            <div className="col-md-6 contact-form-group-item">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 contact-form-group-item">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Enter Phone Number"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter your Subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Enter your Message here..."
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Your Message</button>
                    </form>
                </div>
                <div className="col-md-4 contact-form-container">
                    <div className="contact-item">
                        <img className="contact-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728566260/email_542689_ycsisj.png" />
                        <p className="contact-text">tranhoawebsite@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <img className="contact-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728566260/incoming-call_5465937_lnxqet.png" />
                        <p className="contact-text">+84 349772625</p>
                    </div>
                    <div className="contact-item">
                        <img className="contact-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728566260/home-address_12536976_hudvwe.png" />
                        <p className="contact-text">Some Where in the World</p>
                    </div>
                    <div className="contact-item social-profiles">
                        <div className="social-profiles-img">
                            <NavLink to=""><img className="image-social" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728562402/facebook_5968903_djsy4o.png" /></NavLink>
                            <NavLink to=""><img className="image-social" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728562402/social-media_11124036_dnvisp.png" /></NavLink>
                            <NavLink to=""><img className="image-social" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1728562402/linkedin_3992560_khf6u4.png" /></NavLink>
                        </div>
                        <p className="contact-text">Social Profiles</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;
