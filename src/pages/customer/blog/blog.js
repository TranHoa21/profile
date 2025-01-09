import '../../../style/blog/style.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import ReactPaginate from 'react-paginate';

const Blog = () => {
    const [activeTag, setActiveTag] = useState('Technology'); // Set default active tag
    const [currentPage, setCurrentPage] = useState(0);
    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    return (
        <div className="blog-container">
            <div className="blog row">
                <div className="col-md-8 blog-box">
                    <h4 className="blog-featured">Featured This Month</h4>
                    <div className="blog-box-item">
                        <div className='blog-data'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='tag'>website</p>
                            <h3 className='post-title'>Secrets to Designing a Professional Website: Insights from Real-Life Projects</h3>
                            <div className="features-section">
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="feature-description">Hoa Tran</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733455950/calendar_3483639_civgca.png" />
                                    <p className="feature-description">December 14, 2024</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="feature-description">3 min. to read</p>
                                </div>
                            </div>
                            <p className="website-description">Discover the secrets to designing a professional website with insights from real-life projects. Learn expert tips and best practices to create a stunning and functional website that stands out.</p>
                        </div>
                        <div className='blog-data'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='tag'>website</p>
                            <h3 className='post-title'>Secrets to Designing a Professional Website: Insights from Real-Life Projects</h3>
                            <div className="features-section">
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="feature-description">Hoa Tran</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733455950/calendar_3483639_civgca.png" />
                                    <p className="feature-description">December 14, 2024</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="feature-description">3 min. to read</p>
                                </div>
                            </div>
                            <p className="website-description">Discover the secrets to designing a professional website with insights from real-life projects. Learn expert tips and best practices to create a stunning and functional website that stands out.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 blog-box">
                    <h4 className="blog-featured">Populer Posted</h4>
                    <div className="article-container">
                        <div className='article-header'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='website-category'>Website</p>
                            <h3 className='article-title'>How a Well-Designed Website Can Transform Your Business: Lessons from Real-Life Examples</h3>
                            <div className="article-meta">
                                <div className="author-info">
                                    <img className="author-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="author-name">Hoa Tran</p>
                                </div>
                                <div className="author-info">
                                    <img className="author-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="author-name">3 min. to read</p>
                                </div>
                            </div>
                        </div>
                        <div className='article-header'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='website-category'>Website</p>
                            <h3 className='article-title'>How a Well-Designed Website Can Transform Your Business: Lessons from Real-Life Examples</h3>
                            <div className="article-meta">
                                <div className="author-info">
                                    <img className="author-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="author-name">Hoa Tran</p>
                                </div>
                                <div className="author-info">
                                    <img className="author-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="author-name">3 min. to read</p>
                                </div>
                            </div>
                        </div>
                        <div className='article-header'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='website-category'>Website</p>
                            <h3 className='article-title'>How a Well-Designed Website Can Transform Your Business: Lessons from Real-Life Examples</h3>
                            <div className="article-meta">
                                <div className="author-info">
                                    <img className="author-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="author-name">Hoa Tran</p>
                                </div>
                                <div className="author-info">
                                    <img className="author-avatar" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="author-name">3 min. to read</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="post-all row">
                <div className="col-md-8 post-box">
                    <h3 className="blog-featured">Recently Posted</h3>
                    <div className="blog-box-item">
                        <div className='blog-data'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='tag'>website</p>
                            <h3 className='post-title'>Secrets to Designing a Professional Website: Insights from Real-Life Projects</h3>
                            <div className="features-section">
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="feature-description">Hoa Tran</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733455950/calendar_3483639_civgca.png" />
                                    <p className="feature-description">December 14, 2024</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="feature-description">3 min. to read</p>
                                </div>
                            </div>
                            <p className="website-description">Discover the secrets to designing a professional website with insights from real-life projects. Learn expert tips and best practices to create a stunning and functional website that stands out.</p>
                        </div>
                        <div className='blog-data'>
                            <img className="blog-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733348019/closeup-shot-cute-elephant-walking-dry-grass-wilderness_1_ndt2gg.jpg" />
                            <p className='tag'>website</p>
                            <h3 className='post-title'>Secrets to Designing a Professional Website: Insights from Real-Life Projects</h3>
                            <div className="features-section">
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735918718/z6194646109179_99d6a9c4c3eb2e7b941d571d74bdd879_wd8r3s.jpg" alt="avatar" />
                                    <p className="feature-description">Hoa Tran</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733455950/calendar_3483639_civgca.png" />
                                    <p className="feature-description">December 14, 2024</p>
                                </div>
                                <div className="feature-item">
                                    <img className="feature-icon" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1735917745/timer_766366_gisqwc.png" />
                                    <p className="feature-description">3 min. to read</p>
                                </div>
                            </div>
                            <p className="website-description">Discover the secrets to designing a professional website with insights from real-life projects. Learn expert tips and best practices to create a stunning and functional website that stands out.</p>
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={3}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />
                </div>
                <div className="col-md-3 post-box">
                    <h3 className="blog-featured">Instagram Posts</h3>
                    <div className="row box-post-item">
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                        <div className="col-md-4 post-box-data">
                            <img className="post-image" src="https://res.cloudinary.com/dhjrrk4pg/image/upload/v1733857281/chimpanzee_1_siumkq.jpg" alt="Post image" />
                        </div>
                    </div>
                    <div className="search-container">
                        <h3 className="">Search With Tags</h3>
                        <div className="tags">
                            {['Travel', 'Lifestyle', 'Fashion', 'Technology', 'Business', 'Design', 'Health', 'Food', 'Art'].map((tag) => (
                                <div
                                    key={tag}
                                    className={`tag ${activeTag === tag ? 'active' : ''}`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog 