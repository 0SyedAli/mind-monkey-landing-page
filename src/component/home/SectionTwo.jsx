"use client";
import React from "react";
import Header from "../Header";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";


const SectionTwo = () => {
  return (
    <>
      <section className="position-relative hero-section section-two">
        <Image src="/images/shadow_box.png" className="boxShadow3" width={698} height={698} alt="hr1" />
        <div className="container  position-relative ">
          <div className="row flex-column-reverse flex-lg-row gap-5 gap-lg-0 align-items-center">
            <div className="col-lg-6 position-relative">
              <AnimatedSection
                zoom="out"
                delay={0.2}
              >
                <Image src="/images/Star_theme.png" className="Star_theme8" width={48} height={48} alt="hr1" />
                <Image src="/images/sec2_left.png" className="hr1_right" width={698} height={698} alt="hr1" />
                <Image src="/images/shadow_box2.png" className="boxShadow2" width={698} height={698} alt="hr1" />
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection
                direction="right"
                delay={0.2}
              >
                <h5>features</h5>
                <h2>Lorem Ipsum</h2>
                <h4><Image src="/images/star.png" width={20} height={20} alt="icon" />Lorem Ipsum Dummy</h4>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <h4><Image src="/images/star2.png" width={20} height={20} alt="icon" />Lorem Ipsum Dummy</h4>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                <h4><Image src="/images/cube.png" width={20} height={20} alt="icon" />Lorem Ipsum Dummy</h4>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
