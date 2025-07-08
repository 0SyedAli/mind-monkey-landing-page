"use client";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";


const HeroSection = () => {
  return (
    <>
      <section className="hero-section mt-5">
        {/* <Image src="/images/shadow_box.png" className="boxShadow" width={698} height={698} alt="hr1" /> */}
        <div className="container position-relative">
          <Image src="/images/Star_theme.png" className="Star_theme10" width={48} height={48} alt="hr1" />
          <div className="row justify-content-center align-items-center gap-5 gap-lg-0">
            <div className="col-lg-6">
              <AnimatedSection
                direction="left"
                delay={0.2}
              >
                <h1>Welcome To <span>Mind Monkey</span> Track Your Daily Moods</h1>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <button className="btn btn-theme2">get started <span><HiArrowLongRight /></span></button>
              </AnimatedSection>
            </div>
            <div className="col-md-8 col-lg-6 position-relative">
              <AnimatedSection
                zoom="in"
                delay={0.2}
              >
                <div className="boxShadow"></div>
                <Image src="/images/hr1_right.png" className="hr1_right" width={698} height={698} alt="hr1" />
              </AnimatedSection>
              <Image src="/images/Star_theme.png" className="Star_theme11" width={45} height={45} alt="hr1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
