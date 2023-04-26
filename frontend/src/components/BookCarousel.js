import React from 'react'
import './css/BookCarousel.css'
export const BookCarousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717__340.jpg" className="d-block w-100 carousel-image" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Looking for a better online book shop?</h5>
                                <p>"Your Book Store" offers a wide range of book collection</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2016/10/13/19/24/book-1738609__340.jpg" className="d-block w-100 carousel-image" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Want a book replacement?</h5>
                                <p>Instant support available 24X7 for your various queries</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2021/10/14/13/50/book-6709160__340.jpg" className="d-block w-100 carousel-image" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Want a Gift delivery?</h5>
                                <p>Gift your loved ones with a beautiful present today, shop now</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
