"use client";
import React from "react";
import { PiBellSimple } from "react-icons/pi";

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";


const SectionThree = () => {
  return (
    <>
      <section className="hero-section section-two section-three position-relative">
        <Image src="/images/Star_theme.png" className="Star_theme7" width={48} height={48} alt="hr1" />
        <div className="container">
          <div className="row gap-5 gap-lg-0 align-items-center justify-content-between">
            <div className="col-lg-5">
              <AnimatedSection
                direction="left"
                delay={0.2}
              >
                <h5>advatnages</h5>
                <h2 className="text-uppercase">why choose <br />
                  Mind Monkey?</h2>
                {/* <h3><span><PiBellSimple /></span> clever notifications</h3> */}
                <p>Clever Notifications; “Mind Monkey sets daily reminders that will notify you when it’s time to record your days events, moments and mood. It serves as a friendly reminder to preserve yourself and commit to self care</p>
                <p>FULLY CUSTOMIZABLE “Optimize your experience and claim your independence with our customizable theme and color templates! Keep your most prized and intimate truths safe with the Mind Monkey guide to continued success!</p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 position-relative">
              <AnimatedSection
                zoom="in"
                direction="right"
                delay={0.2}
              >
                <Image src="/images/shadow_box.png" className="boxShadow4" width={698} height={698} alt="hr1" />
                <Image src="/images/sec_three_right.png" className="hr1_right" width={698} height={698} alt="hr1" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
