"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";


const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "John Doe",
            text: "the best Mood Tracking app ever!",
            desc: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliqua.”",
            profileImage: "/images/test1.svg",
        },
        {
            name: "Jane Smith",
            text: "the best Mood Tracking app ever!",
            desc: "“This is a fantastic app for tracking moods. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu.”",
            profileImage: "/images/test2.svg",
        },
        {
            name: "David Harley",
            text: "the best Mood Tracking app ever!",
            desc: "“In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc.”",
            profileImage: "/images/test3.svg",
        },
        {
            name: "Emily Johnson",
            text: "the best Mood Tracking app ever!",
            desc: "“In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc.”",
            profileImage: "/images/test4.svg",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
    };

    return (
        <section className="testimonial hero-section ">
            <div className="container position-relative">
                <Image src="/images/Star_theme.png" className="Star_theme4" width={48} height={48} alt="hr1" />
                <div className="row text-center mb-5 mb-lg-4">
                    <div className="col-12">
                        <h5>Testimonial</h5>
                        <h2>What our users<br /> say about us?</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between gap-5 gap-lg-0">
                    <div className="col-md-10 col-lg-6 position-relative">
                        <Image src="/images/shadow_box.png" className="boxShadow6" width={698} height={698} alt="hr1" />
                        <Image
                            src="/images/testimonial.png"
                            className="hr1_right"
                            width={698}
                            height={698}
                            alt="Testimonial Illustration"
                        />
                    </div>
                    <div className="col-lg-5">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="test_item">
                                    <h3>{testimonial.text}</h3>
                                    <p>{testimonial.desc}</p>
                                </div>
                            ))}
                        </Slider>
                        <div className="profile-images mt-3 mb-4">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`profile-wrapper ${currentSlide === index ? "active" : ""
                                        }`}
                                    style={{
                                        display: "inline-block",
                                        transform:
                                            currentSlide === index
                                                ? "scale(1.3)"
                                                : "scale(1)",
                                        opacity: currentSlide === index
                                            ? "1"
                                            : "0.7",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    <Image
                                        src={testimonial.profileImage}
                                        alt={testimonial.name}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                            ))}
                        </div>
                        <h4 className="current-testimonial-name mt-2">
                            {testimonials[currentSlide].name}
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
