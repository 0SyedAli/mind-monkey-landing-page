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
                <h2>why choose <br />
                  Mind Monkey?</h2>
                <h3><span><PiBellSimple /></span> clever notifications</h3>
                <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
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
