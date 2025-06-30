"use client";
import React from "react";

import Image from "next/image";


const Faq = () => {
    return (
        <>
            <section className="section_faq position-relative">
                <Image src="/images/Star_theme.png" className="Star_theme3" width={48} height={48} alt="hr1" />
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h5>faq</h5>
                            <h2>Frequently asked<br />questions</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6  order-1 order-lg-0">
                            <div className="faq_item bg1">
                                <h3>the best Mood Tracking
                                    <br />app ever!</h3>
                                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-0">
                            <div className="faq_item no_bg">
                                <h3>the best Mood Tracking
                                    <br />app ever!</h3>
                                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-4 order-lg-0">
                            <div className="faq_item no_bg">
                                <h3>the best Mood Tracking
                                    <br />app ever!</h3>
                                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        </div>
                        <div className="col-lg-6  order-3 order-lg-0">
                            <div className="faq_item bg2">
                                <h3>the best Mood Tracking
                                    <br />app ever!</h3>
                                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        </div>
                        <div className="col-lg-6  order-5 order-lg-0">
                            <div className="faq_item bg3">
                                <h3>the best Mood Tracking
                                    <br />app ever!</h3>
                                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        </div>
                        <div className="col-lg-6  order-6 order-lg-0">
                            <div className="faq_item no_bg">
                                <h3>the best Mood Tracking
                                    <br />app ever!</h3>
                                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
