import React from 'react'
import GetStart from 'src/component/home/GetStart'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import AnimatedSection from 'src/component/AnimatedSection';
export const metadata = {
  title: 'Pricing | Mind Monkey',
  description: 'This is my Pricing page',
  keywords: ['nextjs', 'react', 'javascript'],
}
const About = () => {
  return (
    <div className="main">
      <section className="about_banner py-3 py-lg-5">
        <div className="container text-center">
          <h1>Pricing</h1>
        </div>
      </section>
      <section className="pricing_section mt-4 mt-lg-5">
        <div className="container">
          <div className="row row-gap-4">
            <div className="ps_item_column col-md-6 col-xl-4">
              <AnimatedSection
                direction="left"
                zoom="out"
                delay={0.2}
              >
                <div className="ps_item">
                  <h3>Silver</h3>
                  <p className='mt-1'>Starting at</p>
                  <div className='my-4 my-lg-5'>
                    <h2>$1,950<span>/year</span></h2>
                    <h5>Annual Subscription</h5>
                  </div>
                  <button className="btn btn-theme2 w-100 py-3 mt-0">Get Price Estimate</button>
                  <ul>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem ipsum dummy</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem ipsum</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Dolor Sit amet</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem Ipsum Simply</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            <div className="ps_item_column col-md-6 col-xl-4">
              <AnimatedSection
                direction="bottom"
                zoom="in"
                delay={0.2}
              >
                <div className="ps_item active">
                  <h3>Gold</h3>
                  <p className='mt-1'>Starting at</p>
                  <div className='my-4 my-lg-5'>
                    <h2>$9,950<span>/year</span></h2>
                    <h5>Setup Cost</h5>
                  </div>
                  <button className="btn btn-theme2 w-100 mt-0 py-3">Get Price Estimate</button>
                  <ul>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem ipsum dummy</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem ipsum</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Dolor Sit amet</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem Ipsum Simply</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Ipsum Lorem </li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Dummy Text</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            <div className="ps_item_column col-md-6 col-xl-4">
              <AnimatedSection
                direction="right"
                zoom="out"
                delay={0.2}
              >
                <div className="ps_item">
                  <h3>Platinium</h3>
                  <p className='mt-1'>Starting at</p>
                  <div className='my-4 my-lg-5'>
                    <h2>$19,500<span>/year</span></h2>
                    <h5>Annual Subscription</h5>
                  </div>
                  <button className="btn btn-theme2 w-100 mt-0 py-3">Get Price Estimate</button>
                  <ul>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem ipsum dummy</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem ipsum</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Dolor Sit amet</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Lorem Ipsum Simply</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Ipsum Lorem </li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Dummy Text</li>
                    <li><span><TbRosetteDiscountCheckFilled /></span>Dolor Sit amet</li>

                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <GetStart />
    </div>
  )
}

export default About