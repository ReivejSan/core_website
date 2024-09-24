import React, { useState, useEffect } from "react";
import "./homecarousel.scss";

const HomeCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: "https://res.cloudinary.com/db8eb6gt2/image/upload/v1727080918/WhatsApp-Image-2024-01-24-at-10.02.22-scaled_szmohh.jpg",
            caption: "Arkadia Townhouse Maguwo",
            subtitle: "Hunian Selangkah Dari Pakuwon Mall Jogja",
            link: "/property/arkadia-townhouse-maguwo"
        },
        {
            img: "https://res.cloudinary.com/db8eb6gt2/image/upload/v1727080918/WhatsApp-Image-2024-01-24-at-10.02.22-scaled_szmohh.jpg",
            caption: "Arkadia Townhouse Maguwo",
            subtitle: "Hunian Selangkah Dari Pakuwon Mall Jogja",
            link: "/property/arkadia-townhouse-maguwo"
        },
        {
            img: "https://res.cloudinary.com/db8eb6gt2/image/upload/v1727080918/WhatsApp-Image-2024-01-24-at-10.02.22-scaled_szmohh.jpg",
            caption: "Arkadia Townhouse Maguwo",
            subtitle: "Hunian Selangkah Dari Pakuwon Mall Jogja",
            link: "/property/arkadia-townhouse-maguwo"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3500);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel">
            <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div
                        className="carousel-slide"
                        key={index}
                    >
                        <img src={slide.img} alt={slide.caption} />
                        <div className="carousel-caption">
                            <div className="caption-title">{slide.caption}</div>
                            <div className="caption-subtitle">{slide.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indikator Carousel */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentSlide === index ? "active" : ""}`}
                    >
                        {currentSlide === index && <div className="progress-bar"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCarousel;