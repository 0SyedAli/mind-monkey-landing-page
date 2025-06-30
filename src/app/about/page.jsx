import React from 'react'
import AboutBanner from 'src/component/about/AboutBanner'
import GetStart from 'src/component/home/GetStart'

const About = () => {
  return (
    <div className="main">
      <section className="about_banner py-5">
        <div className="container text-center">
          <h1>About <span>Us</span></h1>
        </div>
      </section>
      <AboutBanner />
      <GetStart />
    </div>
  )
}

export default About