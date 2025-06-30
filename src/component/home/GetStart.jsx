"use client";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";

const GetStart = () => {
    return (
        <>
            <section className="section_get_start ">
                <div className="container position-relative">
                    <Image src="/images/Star_theme.png" className="Star_theme" width={64} height={64} alt="hr1" />
                    <Image src="/images/Star_theme.png" className="Star_theme2" width={48} height={48} alt="hr1" />
                    <Image src="/images/shadow_box.png" className="boxShadow7" width={698} height={698} alt="hr1" />
                    <div className="sgs_inner">
                        <Image src="/images/getStart_img.png" className="sgs_bg" width={1090} height={508} alt="get start" />
                        <div className="row align-items-center gap-4 gap-lg-0">
                            <div className="col-lg-6">
                                <div className="gs_left">
                                    <h2>ready to get started?</h2>
                                    <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
                                    <button className="btn btn-theme3"><span><FaApple /></span> download app</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="sgs_right position-relative">
                                    <Image src="/images/shadow_box3.png" className="boxShadow8" width={698} height={698} alt="hr1" />
                                    <Image src="/images/get_start_img4.png" width={568.73} height={480.6} alt="get start" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetStart;
