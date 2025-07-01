import Image from 'next/image'
import React from 'react'
import AnimatedSection from 'src/component/AnimatedSection'
import GetStart from 'src/component/home/GetStart'
import SectionFour from 'src/component/home/SectionFour'
import SectionThree from 'src/component/home/SectionThree'
export const metadata = {
  title: 'Features | Mind Monkey',
  description: 'This is my Features page',
  keywords: ['nextjs', 'react', 'javascript'],
}
const About = () => {
  return (
    <div className="main">
      <section className="about_banner py-3 py-lg-5">
        <div className="container text-center">
          <AnimatedSection
            direction="top"
            zoom="in"
            delay={0.2}
          >
            <h1>Features</h1>
          </AnimatedSection>
        </div>
      </section>
      <section className="position-relative hero-section section-two">
        <Image src="/images/shadow_box2.png" className="boxShadow3" width={698} height={698} alt="hr1" />
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row gap-5 gap-lg-0">
            <div className="col-lg-6 position-relative">
              <AnimatedSection
                direction="left"
                zoom="out"
                delay={0.2}
              >
                <Image src="/images/shadow_box2.png" className="boxShadow2" width={698} height={698} alt="hr1" />
                <Image src="/images/sec2_left.png" className="hr1_right" width={698} height={698} alt="hr1" />
              </AnimatedSection>
              <Image src="/images/Star_theme.png" className="Star_theme13" width={48} height={48} alt="hr1" />
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
      <SectionThree />
      <SectionFour />
      <GetStart />
    </div>
  )
}

export default About