import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row pb-5 row-gap-4 gap-lg-0">
          <div className="col-md-6 col-lg-4">
            <AnimatedSection
              direction="left"
              delay={0.2}
            >
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo.png"
                  width={140}
                  height={90}
                  alt="Mind Monkey"
                  className="footer_logo"
                  priority={true}
                />
              </Link>
              <ul className="mt-5">
                <li>
                  <Link href="#!">
                    <span>
                      <Image
                        src="/images/email.png"
                        width={20}
                        height={18}
                        alt="Mind Monkey"
                        priority={true}
                      />
                    </span>
                    help@mindmon.com
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <span>
                      <Image
                        src="/images/phone.png"
                        width={19}
                        height={19}
                        alt="Mind Monkey"
                        priority={true}
                      />
                    </span>
                    +1 234 456 678
                  </Link>
                </li>
              </ul>
            </AnimatedSection>
          </div>
          <div className="col-md-6 col-lg-2">
            <AnimatedSection
              direction="top"
              zoom="in"
              delay={0.2}
            >
              <h2>links</h2>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/features">Features</Link></li>
              </ul>
            </AnimatedSection>
          </div>
          <div className="col-md-6 col-lg-2 position-relative">
            <AnimatedSection
              direction="top"
              zoom="in"
              delay={0.2}
            >
              <ul className="footer-legal">
                <li><Link href="term-of-use">terms of use</Link></li>
                <li><Link href="privacy-policy">privacy policy</Link></li>
                <li><Link href="#!">cookie policy</Link></li>
              </ul>
            </AnimatedSection>
          </div>
          <div className="col-md-6 col-lg-4">
            <AnimatedSection
              direction="right"
              delay={0.2}
            >
              <h2>Newsletter</h2>
              <ul>
                <li>Stay up to date</li>
                <form className="footer_form mt-3">
                  <input type="email" placeholder="Your Email" name="email" id="email" />
                  <button className="btn btn-theme4">Sumbit</button>
                </form>
              </ul>
            </AnimatedSection>
          </div>
        </div>
        <div className="footer_border"></div>
        <div className="row text-center py-3">
          <div className="col-12">
            <AnimatedSection
              zoom="out"
              delay={0.2}
            >
              <p>Copyright 2025 Mind Monkey all rights reserved</p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
