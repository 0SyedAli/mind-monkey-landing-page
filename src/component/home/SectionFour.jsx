"use client";
import React from "react";
import { PiBellSimple } from "react-icons/pi";

import Image from "next/image";


const SectionFour = () => {
  return (
    <>
      <section className="hero-section section-two section-three section-four ">
        <div className="container position-relative">
          <Image src="/images/Star_theme.png" className="Star_theme5" width={48} height={48} alt="hr1" />
          <Image src="/images/Star_theme.png" className="Star_theme6" width={48} height={48} alt="hr1" />
          <div className="row align-items-center flex-column-reverse flex-lg-row gap-5 gap-lg-0 justify-content-between">
            <div className="col-lg-6 position-relative">
              <Image src="/images/shadow_box2.png" className="boxShadow5" width={698} height={698} alt="hr1" />
              <Image src="/images/sec4_right.png" className="hr1_right" width={698} height={698} alt="hr1" />
            </div>
            <div className="col-lg-5">
              <h3><span><Image src="/images/star.png" width={24} height={24} alt="" /></span> fully customizable</h3>
              <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
